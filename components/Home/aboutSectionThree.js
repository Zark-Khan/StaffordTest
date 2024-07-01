import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function AboutSectionThree({ data }) {
  const [focus, setFocus] = useState([]);
  
  useEffect(() => {
    setFocus(
      data?.Home_page_data?.section_title_three_content.map((item) => false)
    );
  }, [data]);
  return (
    <Box sx={{ width: "100%", paddingTop: "5rem" }}>
      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          letterSpacing: "8px",
          color: "#c61d20",
          fontWeight: "700",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {data?.Home_page_data?.section_title_three}
      </Typography>
      {!!data?.Home_page_data?.section_title_three_content?.length &&
        data?.Home_page_data?.section_title_three_content.map((item, index) => (
          <Box key={index}>
            {(index + 1) % 2 === 1 ? (
              <Slide triggerOnce direction="up" duration={1000}>
                <Fade triggerOnce duration={1500} delay={4}>
                  <Box
                    sx={{
                      position: "relative",
                      marginTop: "2.5rem",
                      width: "100%",
                      transition: "all 1s ease-in-out",
                      "& img": {
                        width: "100% !important",
                        height: "400px !important",
                        objectFit: "cover",
                        filter: "grayscale(1)",
                        transition: "all 1s ease-in-out",
                        opacity: item?.image_opacity != null ? `${item?.image_opacity}%` : "50%",
                      },
                      "&:hover": {
                        "& img": {
                          filter: "grayscale(0)",
                          opacity: "100%",
                        },
                      },
                    }}
                  >
                    <img
                      src={item?.image.url}
                      alt={item?.image.alt}
                      width="100"
                      height="100"
                    />
                    <Box
                      sx={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "100%",
                        height: "100%",
                        transition: "all 1s ease-in-out",
                        "&:hover": {
                          //backgroundColor: "transparent",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingLeft: "60px",
                          paddingRight: "60px",
                          "@media only screen and (max-width:800px)": {
                            flexDirection: "column",
                            paddingTop: "75px",
                            paddingBottom: "60px",
                            justifyContent: "center",
                            gap: "2.15rem",
                          },
                        }}
                      >
                        {!!item?.impressions?.length &&
                          item?.impressions?.map((counts, i) => (
                            <Box key={i}>
                              <Typography
                                variant="h1"
                                sx={{
                                  color: "header.text",
                                  fontSize: "45px",
                                  letterSpacing: "5px",
                                  textTransform: "uppercase",
                                  fontWeight: "700",
                                  height: "55px",
                                  textAlign: "center",
                                }}
                              >
                                {/* {data?.statistics_2?.prefix} */}
                                <CountUp
                                  start={focus[index] ? 0 : null}
                                  end={+counts?.value}
                                  // decimals={1}
                                  duration={4}
                                  redraw={true}
                                >
                                  {({ countUpRef }) => (
                                    <VisibilitySensor
                                      onChange={(isVisible) => {
                                        if (isVisible) {
                                          const dupArr = [...focus];
                                          dupArr[index] = true;
                                          setFocus(dupArr);
                                        }
                                      }}
                                    >
                                      <span ref={countUpRef} />
                                    </VisibilitySensor>
                                  )}
                                </CountUp>
                                <span style={{ color: "#c61d20" }}>
                                  {counts?.postfix}
                                </span>
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{
                                  color: "header.text",
                                  fontSize: "12px",
                                  letterSpacing: "8px",
                                  textTransform: "uppercase",
                                  fontWeight: "700",
                                }}
                              >
                                {counts?.label}
                              </Typography>
                            </Box>
                          ))}
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          width: "100%",
                          
                        }}
                      >
                        <Grid container>
                        
                          <Grid item xs={9}>
                            <Box sx={{ bgcolor: "#fff" }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  textAlign: "left",
                                  fontSize: "16px",
                                  letterSpacing: "8px",
                                  color: "#c61d20",
                                  fontWeight: "700",
                                  textTransform: "uppercase",
                                  paddingTop: "8px",
                                  paddingBottom: "8px",
                                  paddingLeft: "60px",
                                  "@media only screen and (max-width: 899px)": {        
                                    textAlign:"center",
                                    paddingLeft: "0px",
                                },
                                  
                                }}
                              >
                                {item?.title || ""}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={9} md={3} lg={3}>
                          <Typography
                                variant="body2"
                                sx={{
                                  width: "100%",
                                  fontSize: "16px",
                                  letterSpacing: "8px",
                                  color: "#fff",
                                  textAlign:"center",
                                  fontWeight: "700",
                                  textTransform: "uppercase",
                                  paddingTop: "8px",
                                  paddingBottom: "8px",
                                  "@media only screen and (max-width: 899px)": {        
                                    textAlign:"center",
                                    // pl:"30px"
                                },
                                }}
                              >
                                {item?.sub_title || ""}
                                {/* dost */}
                                </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              </Slide>
            ) : (
              <Slide triggerOnce direction="up" duration={1000}>
                <Fade triggerOnce duration={1500} delay={4}>
                  <Box
                    sx={{
                      position: "relative",
                      marginTop: "2.5rem",
                      width: "100%",
                      transition: "all 1s ease-in-out",
                      "& img": {
                        width: "100% !important",
                        height: "400px !important",
                        objectFit: "cover",
                        transition: "all 1s ease-in-out",
                        filter: "grayscale(1)",
                        opacity: item?.image_opacity != null ? `${item?.image_opacity}%` : "50%",
                      },
                      "&:hover": {
                        "& img": {
                          filter: "grayscale(0)",
                          opacity: "100%",
                        },
                      },
                    }}
                  >
                    <img
                      src={item?.image.url}
                      alt="about"
                      width="100"
                      height="100"
                    />
                    <Box
                      sx={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "100%",
                        height: "100%",
                        transition: "all 1s ease-in-out",
                        "&:hover": {
                          //backgroundColor: "transparent",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingLeft: "60px",
                          paddingRight: "60px",
                          "@media only screen and (max-width:800px)": {
                            flexDirection: "column",
                            paddingTop: "75px",
                            paddingBottom: "60px",
                            justifyContent: "center",
                            gap: "2.15rem",
                          },
                        }}
                      >
                        {!!item?.impressions?.length &&
                          item?.impressions?.map((counts, i) => (
                            <Box key={i} >
                              <Typography
                                variant="h1"
                                sx={{
                                  color: "header.text",
                                  fontSize: "45px",
                                  letterSpacing: "5px",
                                  textTransform: "uppercase",
                                  fontWeight: "700",
                                  height: "55px",
                                  textAlign: "center",
                                }}
                                
                              >
                                {/* {data?.statistics_2?.prefix} */}
                                <CountUp
                                  start={focus[index] ? 0 : null}
                                  end={+counts?.value}
                                  // decimals={1}
                                  duration={4}
                                  redraw={true}
                                >
                                  {({ countUpRef }) => (
                                    <VisibilitySensor
                                      onChange={(isVisible) => {
                                        if (isVisible) {
                                          const dupArr = [...focus];
                                          dupArr[index] = true;
                                          setFocus(dupArr);
                                        }
                                      }}
                                    >
                                      <span ref={countUpRef} />
                                    </VisibilitySensor>
                                  )}
                                </CountUp>
                                <span style={{ color: "#c61d20" }}>
                                  {counts?.postfix}
                                </span>
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{
                                  color: "header.text",
                                  fontSize: "12px",
                                  letterSpacing: "8px",
                                  textTransform: "uppercase",
                                  fontWeight: "700",
                                }}
                              >
                                {counts?.label}
                              </Typography>
                            </Box>
                          ))}
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          width: "100%",
                        }}
                      >
                        <Grid container>
                          <Grid item xs={3} >
                          <Typography
                                variant="body2"
                                sx={{
                                  width: "100%",
                                  textAlign: "center",
                                  fontSize: "16px",
                                  letterSpacing: "8px",
                                  color: "#fff",
                                  fontWeight: "700",
                                  textTransform: "uppercase",
                                  paddingTop: "8px",
                                  paddingBottom: "8px",
                                  "@media only screen and (max-width:899px)": {        
                                    display:"none"
                                },
                                }}
                              >
                               {item?.sub_title || ""}
                                </Typography>
                          </Grid>
                          
                          <Grid item xs={9}>
                            <Box sx={{ bgcolor: "#fff" }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  width: "100%",
                                  textAlign: "right",
                                  fontSize: "16px",
                                  letterSpacing: "8px",
                                  color: "#c61d20",
                                  fontWeight: "700",
                                  textTransform: "uppercase",
                                  paddingTop: "8px",
                                  paddingBottom: "8px",
                                  paddingRight: "60px",
                                  "@media only screen and (max-width: 899px)": {        
                                    textAlign:"center",
                                    paddingRight: "0px",
                                },
                                  
                                }}
                              >
                                {item?.title || ""}
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={3} sx={{display:"none","@media only screen and (max-width:899px)": {        
                                    display:"block"
                                },}}>
                         </Grid>
                          <Grid item xs={9} sx={{display:"none","@media only screen and (max-width:899px)": {        
                                    display:"block"
                                },}}>
                          <Typography
                                variant="body2"
                                sx={{
                                  width: "100%",
                                  textAlign: "center",
                                  fontSize: "16px",
                                  letterSpacing: "8px",
                                  color: "#fff",
                                  fontWeight: "700",
                                  textTransform: "uppercase",
                                  paddingTop: "8px",
                                  paddingBottom: "8px",
                                  // paddingRight:"28px"
                                  
                                }}
                              >
                               {item?.sub_title || ""}
                                </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              </Slide>
            )}
          </Box>
        ))}
    </Box>
  );
}

export default AboutSectionThree;
