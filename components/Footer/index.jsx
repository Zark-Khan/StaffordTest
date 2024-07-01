"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter, usePathname } from "next/navigation";
import { pushRouter } from "@/util/routingPush";

const FooterMain = ({ setIsPageLoaded }) => {
  const existingPath = usePathname();
  const pages = ["SERVICES", "WORK", "CONTACT"];
  const router = useRouter();
  const [footerTxt, setFooterTxt] = useState(null);

  const handleClick = (page) => {
    if (page === "Home" && existingPath !== "/") {
      setIsPageLoaded(false);
      pushRouter(() => router.push("/"));
    } else if (page === "SERVICES" && existingPath !== "/services") {
      setIsPageLoaded(false);
      pushRouter(() => router.push("/services"));
    } else if (page === "WORK" && existingPath !== "/work") {
      setIsPageLoaded(false);
      pushRouter(() => router.push("/work"));
    } else if (page === "CONTACT" && existingPath !== "/contact") {
      setIsPageLoaded(false);
      pushRouter(() => router.push("/contact"));
    }
  };
  useEffect(() => {
    getFooterText();
  }, []);
  const getFooterText = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}/wp-json/stafford/v1/footer/`
    );
    const data = await response.json();
    setFooterTxt(data?.response || null);
  };
  return (
    <Box
      sx={{
        "& .MuiAppBar-colorPrimary": {
          bgcolor: "background.paper",
          position: "relative",
          transition: "0.5s",
          paddingBottom: { xs: 4, md: 0 },
        },
      }}
    >
      <AppBar sx={{ boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "end",
                alignItems:"center",
                gap: 1,
                // flexDirection: { xs: "column", sm: "row" },
                "@media only screen and (max-width:665px)": {
                  display:"inline",
                },
              }}
            >
              <Box sx={{ display: "flex", gap: 1, alignItems: "center",
                "@media only screen and (max-width:665px)": {
                  justifyContent:"center"
                },
               }}>
              {pages.map((page, index) => (
                <Box
                  key={page}
                >
                  <Button
                    onClick={() => {
                      handleClick(page);
                    }}
                    sx={{
                      fontSize: "9px",
                      fontWeight: "700",
                      color: "header.text",
                      whiteSpace: "nowrap",
                      letterSpacing: "12px",
                      transition: "0.3s",
                      textTransform: "uppercase",
                      "&:hover": {
                        color: "#c61d20",
                      },
                      "@media only screen and (max-width:670px)": {
                        fontSize:"8px",
                        letterSpacing: "8px",
                        
                      },
                      "@media only screen and (max-width:368px)": {
                        fontSize:"6px",
                        letterSpacing: "6px",
                        
                      },
                    }}
                  >
                    {page}
                  </Button>
                  {index < pages.length - 1 ? (
                    <span
                      key={index}
                      style={{
                        color: "header.text",
                        fontSize: "9px",
                        fontWeight: "700",
                      }}
                    >
                      /
                    </span>
                  ) : null}
                </Box>
              ))}
              </Box>
              <Box>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "9px",
                  fontWeight: "700",
                  color: "header.text",
                  whiteSpace: "nowrap",
                  letterSpacing: "12px",
                  "@media only screen and (max-width:670px)": {
                    fontSize:"8px",
                    letterSpacing: "8px",
                    justifyContent:'center'
                  },
                  "@media only screen and (max-width:368px)": {
                    fontSize:"6px",
                    letterSpacing: "6px",
                    justifyContent:'center'
                  },
                  
                }}
              >
                <span style={{ fontSize: "13px" }}> &copy;</span>{" "}
                {footerTxt !== null ? footerTxt.Footer_data : "2024 STFRD"}
              </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default FooterMain;
