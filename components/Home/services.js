"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

function Services({ data }) {
  const [hoverState, setHoverState] = useState([false, false, false, false]);
  const videoRefs = useRef([]);
  console.log(data)
  useEffect(() => {
    // Preload videos when the component mounts
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        videoRef.load();
      }
    });
  }, []);

  useEffect(() => {
    // Pause all videos when the component unmounts
    return () => {
      videoRefs.current.forEach((videoRef) => {
        if (videoRef) {
          videoRef.pause();
        }
      });
    };
  }, []);

  const handleHoverEnter = (index) => {
    setHoverState((prevHoverState) =>
      prevHoverState.map((state, i) => (i === index ? true : state))
    );
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch((error) => {
        // Handle any potential play errors
        console.error("Error playing video:", error);
      });
    }
  };
  const handleTouchEnter = (index) => {
    setHoverState((prevHoverState) =>
      prevHoverState.map((state, i) => (i === index ? true : false))
    );
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch((error) => {
        // Handle any potential play errors
        console.error("Error playing video:", error);
      });
      videoRefs.current.forEach((item, i) => {
        if (index !== i) {
          item.pause();
          item.currentTime = 0;
        }
      });
    }
  };
  const handleRouteClick = (event) => {
    event.preventDefault();
    setHoverState([false, false, false, false]);
    videoRefs.current.forEach((item, i) => {
      item.pause();
      item.currentTime = 0;
    });
    const hash = event.currentTarget.getAttribute("href").split("#")[1];
    // Navigate programmatically to the hash
    window.location.hash = hash;
  };
  const handleHoverLeave = (index) => {
    setHoverState((prevHoverState) =>
      prevHoverState.map((state, i) => (i === index ? false : state))
    );
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: "5rem" }}>
      <Grid container spacing={2} sx={{ color: "white" }}>
        {data !== null &&
          data?.Services_data?.length > 0 &&
          data?.Services_data.map((item, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sm={6}
              md={3}
              lg={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    fontSize: "16px",
                    letterSpacing: "8px",
                    textTransform: "uppercase",
                    color: "header.text",
                    fontWeight: "700",
                    textAlign: "center",
                    "@media only screen and (max-width:600px)": {
                      fontSize: "12px",
                      letterSpacing: "6px",
                    },
                    "@media only screen and (max-width:400px)": {
                      fontSize: "10px",
                      letterSpacing: "5px",
                    },
                  }}
                >
                  {item?.Service_title
                    ? item?.Service_title
                    : index === 0
                    ? "CONSULTING"
                    : index === 1
                    ? "CREATIVE"
                    : index === 2
                    ? "EXPERIENTAL"
                    : index === 3
                    ? "MEDIA"
                    : null}
                </Typography>
                {index < data?.Services_data.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-6px",
                      right: "-15px",
                      fontSize: "22px",
                      textTransform: "uppercase",
                      color: "#c61d20",
                      fontWeight: "700",
                      "@media only screen and (max-width:900px)": {
                        right: index === 1 || index === 3 ? "0px" : "-15px",
                        display: index % 2 ? "none" : ""
                      },
                    }}
                  >
                    +
                  </Box>
                )}
              </Box>
              <div
                style={{ width: "100%", display: "contents" }}
                onMouseEnter={() => handleHoverEnter(index)}
                onMouseLeave={() => handleHoverLeave(index)}
                onTouchStart={() => handleTouchEnter(index)}
              >
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    backgroundColor: "#0b0b0b",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",

                    "& img": {
                      height: "400px",
                      //filter: "grayscale(1)",
                      transition: "all 1s ease-in-out",
                      "@media only screen and (max-width:1100px)": {
                        height: "-webkit-fill-available",
                      },
                      "@media only screen and (max-width:850px)": {
                        height: "300px",
                      },
                      "@media only screen and (max-width:1100px)": {
                        height: "350px",
                      },
                      "@media only screen and (max-width:600px)": {
                        height: "200px",
                      },
                    },
                    "& video": {
                      height: "400px",
                      // filter: "grayscale(1)",
                      transition: "all 1s ease-in-out",
                      "@media only screen and (max-width:1100px)": {
                        height: "-webkit-fill-available",
                      },
                      "@media only screen and (max-width:600px)": {
                        height: "50vw",
                      },
                    },

                    "&:hover": {
                      "& img": {
                        // transition: "ease-out 2s",
                        transform: "scale(1.2)",
                        //filter: "grayscale(0)",
                      },
                      "& video": {
                        // filter: "grayscale(0)",
                      },
                    },
                  }}
                >
                  <a
                     href={`/services#${item?.Service_title?.toLowerCase()}`}
                    style={{
                      height: "-webkit-fill-available",
                      width: "100%",
                      display: "contents",
                    }}
                    onClick={handleRouteClick}
                  >
                    {item?.Service_data?.image?.type === "video" ? (
                      <>
                        <video
                          id="myVideo"
                          ref={(ref) => (videoRefs.current[index] = ref)}
                          key={item.id || index}
                          autoPlay={hoverState[index]}
                          muted
                          loop
                          preload="auto"
                          style={{
                            minWidth: "100%",
                            // filter: "saturate(0)",
                            // height:'auto',
                            margin: "unset",
                            objectFit: "cover",
                            opacity: `${item?.Service_data?.featured_image_opacity}%`,
                          }}
                          playsInline
                        >
                          <source
                            src={item?.Service_data?.image?.url}
                            // src={
                            //   "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                            // }
                            type="video/mp4"
                          />
                        </video>
                      </>
                    ) : (
                      <img
                        alt="Random image"
                        key={item.id || index}
                        // src={
                        //   item?.Service_data?.image?.url
                        //     ? item?.Service_data?.image?.url
                        //     : index === 0
                        //     ? "/images/Rectangle1.svg"
                        //     : index === 1
                        //     ? "/images/Rectangle2.svg"
                        //     : index === 2
                        //     ? "/images/Rectangle3.svg"
                        //     : "/images/Rectangle4.png"
                        // }
                        src={item?.Service_data?.image?.url}
                        // width={640}
                        // height={400}
                        style={{
                          width: "100%",
                          cursor: "pointer",
                          objectFit: "cover",
                          opacity: `${item?.Service_data?.featured_image_opacity}%`,
                        }}
                      />
                    )}

                    {/* <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        transition: "all 1s ease-in-out",
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    ></Box> */}
                  </a>
                </Box>
              </div>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Services;
