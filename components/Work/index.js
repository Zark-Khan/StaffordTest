"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { pushRouter } from "@/util/routingPush";
import { Message_data } from "@/context/context";

function Work({ data }) {
  console.log("adhajkskdk", data);
  
  const { setIsPageLoaded } = useContext(Message_data);
  const router = useRouter();
  const [isClicked, setIsClicked] = useState([]);

  const handleClick = (index, imagesData) => {
    const dupArr = [...isClicked];
    dupArr[index] = true;
    setIsClicked(dupArr);
    setIsPageLoaded(false);
    pushRouter(() => router.push(`/work/${imagesData.Project_slug}`));
  };
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "20px" }}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {!!data?.Projects_data?.length &&
          data?.Projects_data.map((imagesData, index) => (
            <Grid key={index} item xs={12} sm={12} md={6}>
              <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      letterSpacing: "8px",
                      color: "header.text",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      my:"2rem",
                      ml:"2rem",
                      "@media only screen and (max-width:800px)": {
                        ml:"0rem"
                      }
                    }}
                  >
                    {imagesData?.Project_post_title}
                  </Typography>
              <Box
                sx={
                  isClicked[index]
                    ? {
                        width: "100vw",
                        height: "100vh",
                        position: "fixed",
                        zIndex: "9999",
                        top: 0,
                        right: 0,
                        left: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }
                    : {
                        cursor: "pointer",
                        width: "100%",
                        position: "relative",
                        backgroundColor: "#0b0b0b",
                        display: "flex",
                        alignItems: "center",
                        overflow: "hidden",
                        "&:hover": {
                          "& img": isClicked[index]
                            ? {}
                            : {
                                transform: "scale(1.2)",
                                //filter: "grayscale(0)",
                                // opacity: imagesData?.Media?.opacity
                              },
                        },
                        "& img": {
                          //filter: "grayscale(1)",
                          transition: "all 1s ease-in-out",
                          height: "auto",
                          objectFit: "cover",
                          opacity: `${imagesData?.Media?.opacity}%`,
                          // opacity:  imagesData?.Media?.opacity != null ? `${imagesData?.Media?.opacity}%` : "50%",
                          "@media only screen and (min-width:600px)": {
                            height: "360px",
                          },
                        },
                      }
                }
                onClick={() => handleClick(index, imagesData)}
              >
                <Image
                  alt={imagesData?.Project_post_title}
                  src={imagesData?.Media?.background_image}
                  // src={"https://www.w3schools.com/tags/img_girl.jpg"}
                  width={640}
                  height={320}
                  className={isClicked[index] ? "bigImg" : ""}
                  style={
                    isClicked[index]
                      ? {
                          background: "black",
                          transform: "none !important",
                        }
                      : {
                          width: "100%",
                        }
                  }
                />
                {/* <Box
                  sx={{
                    backgroundColor: "rgba(0,0,0,0)",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    transition: "all 1s ease-in-out",
                    justifyContent: "center",
                    "&:hover": {
                      opacity: "0",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      letterSpacing: "8px",
                      color: "#c61d20",
                      fontWeight: "700",
                      textTransform: "uppercase",
                    }}
                  >
                    {imagesData?.Project_post_title}
                  </Typography>
                </Box> */}
              </Box>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Work;
