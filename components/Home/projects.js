import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { pushRouter } from "@/util/routingPush";
import { Message_data } from "@/context/context";
import { Fade, Slide } from "react-awesome-reveal";

function Projects({ data }) {
  const { setIsPageLoaded } = useContext(Message_data);
  const router = useRouter();
  const [isClicked, setIsClicked] = useState([false, false]);

  const handleClick = (index, item) => {
    const dupArr = [...isClicked];
    dupArr[index] = true;
    setIsClicked(dupArr);
    setIsPageLoaded(false);
    pushRouter(() => router.push(`/work/${item.Project_slug}`));
  };
console.log("ophhhh", data);
if (data !== null) {
  console.log('Data is not null');
  if (Array.isArray(data.Featured_Projects_data)) {
    console.log('Featured_Projects_data is an array');
    if (data.Featured_Projects_data.length > 0) {
      console.log('Featured_Projects_data is not empty');
    } else {
      console.log('Featured_Projects_data is empty');
    }
  } else {
    console.log('Featured_Projects_data is not an array');
  }
} else {
  console.log('Data is null');
}
const featuredProjects = data && data.Featured_Projects_data ? Object.values(data.Featured_Projects_data) : [];

  return (
    <Box
      sx={{
        marginTop: featuredProjects.length > 0 && "5rem",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            fontSize: "16px",
            letterSpacing: "8px",
            color: "header.text",
            fontWeight: "700",
            paddingBottom: featuredProjects.length > 0 && "3rem",
            textTransform: "uppercase",
            color: "#c61d20",
            textAlign:'center'
          }}
        >
          {featuredProjects.length > 0 && "featured projects:"}
        </Typography>
        <Grid container columnSpacing={3} rowSpacing={5}>
          {featuredProjects.length > 0 ? (
            <>
              {featuredProjects?.map((item, index) => (
                <Grid
                  key={index}
                  sx={{
                    "& .fade1": isClicked[index]
                      ? {
                          display: "contents",
                        }
                      : {},
                  }}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                >
                  <Slide
                    direction="up"
                    className="fade1"
                    triggerOnce
                    duration={1000}
                  >
                    <Fade
                      direction="up"
                      className="fade1"
                      triggerOnce
                      duration={1500}
                    >
                       {/* <Box
                          sx={{
                            // backgroundColor: "rgba(0,0,0,0)",
                            // position: "absolute",
                            // top: "0",
                            // right: "0",
                            // width: "100%",
                            // height: "100%",
                            // display: "flex",
                            // alignItems: "center",
                            // transition: "all 1s ease-in-out",
                            // justifyContent: "center",
                            // "&:hover":{
                            //   opacity: "0"
                            // }
                          }}
                        > */}
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "16px",
                              letterSpacing: "8px",
                              color: "header.text",
                              fontWeight: "700",
                              textTransform: "uppercase",
                              mb:"2rem",
                              ml:"2rem",
                              "@media only screen and (max-width:800px)": {
                                ml:"0rem",
                                textAlign:"center"
                              }
                            }}
                          >
                            {item?.Project_title}
                          </Typography>
                        {/* </Box> */}
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
                                        // filter: "grayscale(0)",
                                        // opacity: "100%",
                                      },
                                },
                                "& img": {
                                  // filter: "grayscale(1)",
                                  transition: "all 1s ease-in-out",
                                  height: "340px !important",
                                  objectFit: "cover",
                                  // opacity:"100%",
                                  opacity: `${item?.Project_data?.project_opacity}%`,
                                  "@media only screen and (max-width:600px)": {
                                    height: "auto !important",
                                  },
                                },
                              }
                        }
                        onClick={() => handleClick(index, item)}
                      >
                        <Image
                          alt={item?.Project_data?.additional_metadata?.image_alt_text}
                          src={item?.Project_data?.Project_logo_url}
                          // src={"https://www.w3schools.com/tags/img_girl.jpg"}
                          width={640}
                          height={340}
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
                            "&:hover":{
                              opacity: "0"
                            }
                          }}
                        > */}
                          {/* <Typography
                            variant="body2"
                            sx={{
                              fontSize: "16px",
                              letterSpacing: "8px",
                              color: "#c61d20",
                              fontWeight: "700",
                              textTransform: "uppercase",
                            }}
                          >
                            {item?.Project_title}
                          </Typography> */}
                        {/* </Box> */}
                      </Box>
                    </Fade>
                  </Slide>
                </Grid>
              ))}
            </>
          ) : (
            <>
              {/* <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={
                    isClicked[0]
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
                            "& img": isClicked[0]
                              ? {}
                              : {
                                  transition: "ease-out 2s",
                                  transform: "scale(1.2)",
                                },
                          },
                          "& img": {
                            height: "320px",
                            objectFit: "cover",
                            "@media only screen and (max-width:600px)": {
                              height: "auto !important",
                            },
                          },
                        }
                  }
                  onClick={() => handleClick(0)}
                >
                  <Image
                    alt="Random image"
                    src="/images/project1.png"
                    width={640}
                    height={320}
                    className={isClicked[0] ? "bigImg" : ""}
                    style={
                      isClicked[0]
                        ? {
                            background: "black",
                            filter: "grayscale(1)",
                            transform: "none !important",
                          }
                        : {
                            width: "100%",
                            filter: "grayscale(1)",
                          }
                    }
                  />
                  <Box
                    sx={{
                      backgroundColor: "rgba(0,0,0,0)",
                      position: "absolute",
                      top: "0",
                      right: "0",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      virgin airlines
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={
                    isClicked[1]
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
                            "& img": isClicked[0]
                              ? {}
                              : {
                                  transition: "ease-out 2s",
                                  transform: "scale(1.2)",
                                },
                          },
                          "& img": {
                            height: "320px",
                            objectFit: "cover",
                            "@media only screen and (max-width:600px)": {
                              height: "auto !important",
                            },
                          },
                        }
                  }
                  onClick={() => handleClick(1)}
                >
                  <Image
                    alt="Random image"
                    src="/images/project2.png"
                    width={640}
                    height={300}
                    className={isClicked[1] ? "bigImg" : ""}
                    style={
                      isClicked[1]
                        ? {
                            background: "black",
                            filter: "grayscale(1)",
                            transform: "none !important",
                          }
                        : {
                            width: "100%",
                            filter: "grayscale(1)",
                          }
                    }
                  />
                  <Box
                    sx={{
                      backgroundColor: "rgba(0,0,0,0)",
                      position: "absolute",
                      top: "0",
                      right: "0",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
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
                      didi chuxing
                    </Typography>
                  </Box>
                </Box>
              </Grid> */}
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
