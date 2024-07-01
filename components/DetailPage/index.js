"use client";
import React from "react";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import NumberCounter from "@/components/DetailPage/numberCounter";

function DetailPage({ data }) {
  console.log("first", data?.featured_image_opacity);

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl" sx={{mb:"1.5rem"}}>
        <Typography
          variant="h1"
          sx={{
            // paddingTop: "5rem",
            color: "header.text",
            fontSize: "35px",
            letterSpacing: "30px",
            lineHeight: "80px",
            textTransform: "uppercase",
            mt:"1.5rem",
            fontWeight: "700",
            "@media only screen and (max-width:800px)": {
              paddingTop: "2.5rem",
              fontSize: "25px",
              letterSpacing: "20px",
              lineHeight: "60px",
            },
            "@media only screen and (max-width:450px)": {
              // paddingTop: "2rem",
              fontSize: "19px",
              letterSpacing: "12px",
              lineHeight: "45px",
              wordBreak: "normal",
            },
            "@media only screen and (max-width:375px)": {
              // paddingTop: "2rem",
              fontSize: "16px",
              letterSpacing: "10px",
              lineHeight: "45px",
              wordBreak: "normal",
              whiteSpace: "normal",
              overflowWrap: "break-word"
            },
          }}
        >
          <span style={{ color: "#c61d20", fontWeight: "700" }}>
            {data?.Project_post_title || ""}
          </span>
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "header.text",
            fontSize: "16px",
            letterSpacing: "11px",
            textTransform: "uppercase",
            fontWeight: "700",
            lineHeight: "0px",
            "@media only screen and (max-width:1081px)": {
              fontSize: "14px",
              letterSpacing: "9px",
              lineHeight: "28px",
            },
            "@media only screen and (max-width:450px)": {
              fontSize: "12px",
              letterSpacing: "9px",
              lineHeight: "28px",
            },
          }}
        >
          {data?.project_post_subtitle_ || ""}
        </Typography>
      </Container>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          "& video": {
            // filter: "saturate(0)",
            transition: "all 1s ease-in-out",
          },
          "& img": {
            //filter: "saturate(0)",
            transition: "all 1s ease-in-out",
          },
          "&:hover": {
            "& video": { filter: "saturate(1)" },
            "& img": {
              //filter: "saturate(1)"
            },
          },
        }}
      >
        {data !== null &&
        data?.project_post_background_image?.type === "video" ? (
          <>
            <video
              autoPlay
              muted
              loop
              style={{
                width: "100%",
                height: "100vh",
                margin: "unset",
                objectFit: "cover",
                opacity: `${data?.featured_image_opacity}%`
              }}
              preload="auto"
              playsInline
            >
              <source
                src={data?.project_post_background_image?.url}
                // src={
                //   "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                // }
                type="video/mp4"
              />
            </video>
          </>
        ) : (
          <Image
            alt="Random image"
            src={
              data !== null && data?.project_post_background_image
                ? data?.project_post_background_image?.url
                : "/images/detail-hero-img.png"
            }
            width={640}
            height={480}
            style={{
              width: "100%",
              height: "100vh",
              margin: "unset",
              objectFit: "cover",
              objectPosition: "center",
              opacity: `${data?.featured_image_opacity}%`
            }}
          />
        )}
        {/* <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0)",
            position: "absolute",
            top: "0",
            right: "0",
            width: "100%",
            height: "100%",
          }}
        >
          <Container maxWidth="xl">
            <Typography
              variant="h1"
              sx={{
                paddingTop: "5rem",
                color: "header.text",
                fontSize: "35px",
                letterSpacing: "30px",
                lineHeight: "80px",
                textTransform: "uppercase",
                fontWeight: "700",
                "@media only screen and (max-width:800px)": {
                  paddingTop: "2.5rem",
                  fontSize: "25px",
                  letterSpacing: "20px",
                  lineHeight: "60px",
                },
                "@media only screen and (max-width:450px)": {
                  paddingTop: "2rem",
                  fontSize: "19px",
                  letterSpacing: "12px",
                  lineHeight: "45px",
                  wordBreak: "break-all",
                },
              }}
            >
              <span style={{ color: "#c61d20", fontWeight: "700" }}>
                {data?.Project_post_title || ""}
              </span>
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "header.text",
                fontSize: "16px",
                letterSpacing: "11px",
                textTransform: "uppercase",
                fontWeight: "700",
                lineHeight: "28px",
                "@media only screen and (max-width:450px)": {
                  fontSize: "12px",
                  letterSpacing: "9px",
                  lineHeight: "28px",
                },
              }}
            >
              {data?.project_post_subtitle_ || ""}
            </Typography>
          </Container>
        </Box> */}
      </Box>
      <NumberCounter data={data} />
    </Box>
  );
}

export default DetailPage;
