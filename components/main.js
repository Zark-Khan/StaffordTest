"use client";

import React, { useContext } from "react";
import { HeaderMain } from "@/components/Header";
import { Box } from "@mui/material";
import { useState } from "react";
import CircularIndeterminate from "@/components/loader";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Message_data } from "@/context/context";
import FooterMain from "./Footer";

function Main({ Component, pageProps }) {
  const { isPageLoaded, setIsPageLoaded } = useContext(Message_data);
  const [loaderFade, setLoaderFade] = useState(false);

  const path = usePathname();
  const [mode, setMode] = useState("light");
  const [firstPageLoad, setFirstPageLoad] = useState(true);
  const [circleShow, setCircleShow] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setCircleShow(true);
      setTimeout(() => {
        setFirstPageLoad(false);
        setLoaderFade(true);
      }, 500);
      setTimeout(() => {
        setIsPageLoaded(true);
        setLoaderFade(false);
      }, 1000);
    };

    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      handleLoad();
    } else {
      window.addEventListener("load", () => {
        setIsPageLoaded(false);
      });
    }
    return () => {
      window.removeEventListener("load", () => {
        setIsPageLoaded(false);
      });
    };
  }, [path]);

  return (
    <>
      {!isPageLoaded && (
        <>
          {firstPageLoad && (
            <CircularIndeterminate classes={"loaderBackground"} />
          )}
          {loaderFade && (
            <CircularIndeterminate
              circleShow={circleShow}
              classes={"loaderBarUnload"}
            />
          )}
          {!loaderFade && <CircularIndeterminate classes={"loaderBar"} />}
        </>
      )}

      <HeaderMain setMode={setMode} setIsPageLoaded={setIsPageLoaded} />
      <Box>
        <Component {...pageProps} />
      </Box>
      <FooterMain setIsPageLoaded={setIsPageLoaded} />
    </>
  );
}

export default Main;
