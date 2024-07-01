"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useRouter } from "next/router";
import Image from "next/image";
import VisibilitySensor from "react-visibility-sensor";
import { Slide } from "react-awesome-reveal";

function ServiceMain({ data }) {
  console.log("fdsd", data);

  const [focus, setFocus] = useState(0);
  
  // const [contentHeight, setContentHeight] = useState([0, 0, 0, 0]);
  // const [compare, setCompare] = useState("0-center");
  // const contentRefOne = useRef(null);
  // const contentRefTwo = useRef(null);
  // const contentRefThree = useRef(null);
  // const contentRefFour = useRef(null);

  // useEffect(() => {
  //   if (contentRefOne.current) {
  //     const height = contentRefOne.current.offsetHeight;
  //     setContentHeight((prevHeight) => {
  //       const newHeight = [...prevHeight];
  //       newHeight[0] = height;
  //       return newHeight;
  //     });
  //   }
  //   if (contentRefTwo.current) {
  //     const height = contentRefTwo.current.offsetHeight;
  //     setContentHeight((prevHeight) => {
  //       const newHeight = [...prevHeight];
  //       newHeight[1] = height;
  //       return newHeight;
  //     });
  //   }
  //   if (contentRefThree.current) {
  //     const height = contentRefThree.current.offsetHeight;
  //     setContentHeight((prevHeight) => {
  //       const newHeight = [...prevHeight];
  //       newHeight[2] = height;
  //       return newHeight;
  //     });
  //   }
  //   if (contentRefFour.current) {
  //     const height = contentRefFour.current.offsetHeight;
  //     setContentHeight((prevHeight) => {
  //       const newHeight = [...prevHeight];
  //       newHeight[3] = height;
  //       return newHeight;
  //     });
  //   }
  // }, [data?.Services_data, focus]);
  useEffect(() => {
    if (window) {
      setFocus(window.innerWidth);
    }
  }, []);


  useEffect(() => {
    const hashRoute = window.location.hash;
    const service = hashRoute.replace("#", "");

    // data?.Services_data.forEach((item, index) => {
    //   if (item?.Service_post_title?.toLowerCase() === service) {
    //     setDur(0);
    //   }
    // });
    
    setTimeout(() => {
      let elem = document.getElementById(service);
      if (elem) {
        elem.scrollIntoView({
          // behavior: "smooth",
          // block: "start",
        });
      }
    }, focus >= 800 ? 1200 : 0);
  }, [data?.Services_data]);

  // const handleScroll = (event) => {
  //   var elem = document.elementFromPoint(
  //     $(window).width() / 2,
  //     $(window).height() / 2
  //   );
  //   var jqueryElem = $(elem);
  //   if (
  //     jqueryElem.attr("class") !== undefined &&
  //     jqueryElem.attr("class")?.includes("-center")
  //   ) {
  //     setCompare(jqueryElem.attr("class"));
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);



  const [imgVisibility, setImgVisibility] = useState([]);

  return (
    <>
      {focus >= 800 && (
        <Container maxWidth="xl" sx={{ my: "3rem" }}>
          {data !== null && data?.Services_data?.length > 0 && (
            <>
              {data.Services_data.map((service, index) => {
                const direction = index % 2 === 0 ? "right" : "left";
                const animationClass =
                  index % 2 === 0
                    ? "imageBoxSlideFromRight"
                    : "imageBoxSlideFromLeft";

                return (
                  <React.Fragment key={index}>
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <Slide
                          direction={direction}
                          duration={1200}
                          delay={100}
                          triggerOnce
                          in={isVisible}
                        >
                          {index != 0 && (
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                mt:3,
                                justifyContent:
                                  index % 2 === 0 ? "flex-end" : "flex-start",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  width: "50%",
                                  color:"#c61d20",
                                  fontSize:"170px",
                                  fontWeight:"bold",
                                  // mb:"unset"
                                }}
                              >
                                {/* <Image
                                  alt="Random image"
                                  src={"/images/plus.png"}
                                  width={120}
                                  height={100}
                                /> */}
                                <span>+</span>
                              </Box>
                            </Box>
                          )}
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              flex: "column",
                              justifyContent:
                              index % 2 === 0 ? "flex-start" : "flex-end",
                            }}
                            >
                            <Box sx={{
                              width: "100%",
                              maxWidth: "55%",
                              "@media only screen and (max-width:950px)":{
                                maxWidth: "65%",
                              }
                            }}>
                              <Typography
                                id={service?.Service_post_title?.toLowerCase()}
                                sx={{
                                  color: "header.text",
                                  fontSize: "52px",
                                  letterSpacing: "20px",
                                  lineHeight: "110px",
                                  textTransform: "uppercase",
                                  fontWeight: "700",
                                }}
                              >
                                {service?.Service_post_title ||
                                  "No Title Available"}
                              </Typography>

                              {service?.custom_data?.format_with_headings?.length >
                              0 &&
                              service?.custom_data?.format_with_headings?.map(
                                (text, i) => (
                                  <Box
                                    className={`${index}-center`}
                                    key={i}
                                    sx={{mb:1}}
                                  >
                                    <Typography
                                      className={`${index}-center`}
                                      variant="body2"
                                      sx={{
                                        color: "header.text",
                                        fontSize: "18px !important",
                                        //letterSpacing: "6px",
                                        lineHeight: "34px",
                                        fontWeight: "600",
                                        // textTransform: "uppercase ",
                                    }}
                                    >
                                      <Typography
                                        className={`${index}-center`}
                                        component="span"
                                        sx={{
                                          color: "header.text",
                                          fontSize: "18px !important",
                                          letterSpacing: "6px",
                                          lineHeight: "34px",
                                          fontWeight: "700",
                                          // textTransform: "uppercase ",
                                      }}
                                      >
                                        {text?.heading}
                                        <span
                                          className={`${index}-center`}
                                          style={{
                                            color: "#c61d20",
                                            paddingLeft: "2px",
                                          }}
                                        >
                                          /
                                        </span>
                                      </Typography>
                                      {text?.content}
                                      {/* STRATEGIC COMMUNICATIONS CONSULTING/The compass guiding your brand through the intricate landscape of messaging and outreach. It's the art and science of crafting a roadmap that aligns your objectives with a tailored communication strategy, amplifying your voice in a crowded digital arena. This consultancy dives deep into understanding your brand's essence, audience nuances, and market trends, translating them into a cohesive narrative. From defining your unique story to selecting the right channels for dissemination, strategic communications consulting empowers your brand to resonate authentically, fostering meaningful connections and driving impactful results. AI Consulting/to weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}

                                      {/* AI CONSULTING/To weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}
                                    </Typography>
                                  </Box>
                                )
                              )}

                              {service.custom_data?.format_with_bullets
                                ?.length > 0 && (
                                <Box
                                  component="ul"
                                  sx={{ listStyleType: "disc", mb: 1 }}
                                >
                                  {service.custom_data.format_with_bullets.map(
                                    (bullet, bulletIndex) => (
                                      <Box
                                        component="li"
                                        key={bulletIndex}
                                        sx={{
                                          position: "relative",
                                          paddingLeft: "24px", // Adjust as needed for indentation
                                          "&::before": {
                                            content: "'+'",
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            color: "header.text",
                                            fontSize: "18px",
                                            letterSpacing: "8px",
                                            lineHeight: "34px",
                                            textTransform: "uppercase",
                                            fontWeight: "600",
                                          },
                                        }}
                                      >
                                        <Typography
                                          sx={{
                                            color: "header.text",
                                            fontSize: "18px",
                                            letterSpacing: "8px",
                                            lineHeight: "34px",
                                            textTransform: "uppercase",
                                            fontWeight: "600",
                                            display: "inline-block",
                                          }}
                                        >
                                          {bullet.bullet_heading}
                                        </Typography>
                                      </Box>
                                    )
                                  )}
                                </Box>
                              )}

                              {service?.Service_post_content && (
                                <Box
                                  className={`${index}-center`}
                                    sx={{
                                      color: "header.text",
                                      fontSize: "18px !important",
                                      //letterSpacing: "6px",
                                      lineHeight: "34px",
                                      fontWeight: "600",
                                      // textTransform: "uppercase ",
                                      mb:1
                                  }}
                                >
                                  <div
                                    className={`${index}-center`}
                                    dangerouslySetInnerHTML={{
                                      __html: service?.Service_post_content,
                                    }}
                                  ></div>
                                </Box>
                              )}
                            </Box>
                          </Box>
                          </Slide>
                      )}
                    </VisibilitySensor>
                          <Box
                            sx={{
                              paddingTop: "2.5rem",
                              width: "100%",
                              "& img": {
                                width: "100% !important",
                                height: "100% !important",
                                objectFit: "cover",
                              },
                              "& .imageBoxAbout": {
                                width: "100%",
                                height: "280px",
                                "@media only screen and (max-width:600px)": {
                                  height: "280px",
                                },
                              },
                            }}
                          >
                            <Grid
                              container
                              spacing={{ xs: 4, sm: 5, md: 6, lg: 4
                              }}
                                sx={{display:"flex", flexDirection:index % 2 === 0 ? "row" : "row-reverse"}}
                            >
                              {service.custom_data?.services_images?.map((item, i) => (
                              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                                <VisibilitySensor onChange={(isVisible) => {
                                  if (isVisible && !imgVisibility[index * 4 + i]) {
                                    setImgVisibility((prev) => {
                                      const newVisibility = [...prev];
                                      newVisibility[index * 4 + i] = true;
                                      return newVisibility;
                                    });
                                  }
                                }}>
                                  <Box
                                    className={`imageBoxAbout ${imgVisibility[index * 4 + i] ? animationClass : ""}`}
                                    sx={{
                                      visibility: imgVisibility[index * 4 + i] ? "visible" : "hidden",
                                      transition: "all 1s ease-in-out",
                                      animationDelay: imgVisibility[index * 4 + i] ? `${index * 300 + i * 100}ms` : "0ms",
                                    }}
                                  >
                                          <img
                                            alt={item?.image?.alt}
                                            src={item?.image?.url}
                                            width={640}
                                            height={250}
                                          />
                                        </Box>
                                      </VisibilitySensor>
                                    </Grid>
                                  )
                                )}
                            </Grid>
                          </Box>
                        
                  </React.Fragment>
                );
              })}
            </>
          )}
        </Container>
      )}
      {focus < 800 && (
        <Box sx={{ width: "100%" }}>
          {data !== null && data?.Services_data?.length > 0 && (
            <>
              {data.Services_data.map((service, index) => {
                const direction = "up";
                return (
                  <React.Fragment key={index} >
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <Slide
                          direction={direction}
                          duration={1000}
                          delay={20}
                          triggerOnce
                          in={isVisible}
                        >
                          <Box
                            key={index}
                            sx={{
                              display: "flex",
                              // flex:"column",
                              justifyContent: "center",
                            }}
                            
                            >
                            <Box
                              id={service?.Service_post_title?.toLowerCase()}
                              key={index}
                              sx={{
                                width: "100%",
                                maxWidth: "80vw",
                              }}
                              >
                              <Typography
                                sx={{
                                  color: "header.text",
                                  fontSize: "47px",
                                  letterSpacing: "15px",
                                  lineHeight: "80px",
                                  textTransform: "uppercase",
                                  fontWeight: "700",
                                  "@media only screen and (max-width:620px)": {
                                    fontSize: "30px",
                                    letterSpacing: "12px",
                                    lineHeight: "45px",
                                    my: 2,
                                  },
                                  "@media only screen and (max-width:380px)": {
                                    letterSpacing: "10px",
                                    fontSize: "26px",
                                  },
                                }}
                              >
                                {service?.Service_post_title ||
                                  "No Title Available"}
                              </Typography>

                              {service?.custom_data?.format_with_headings
                                ?.length > 0 &&
                                service?.custom_data?.format_with_headings?.map(
                                  (text, index) => (
                                    <Box
                                      key={index}
                                      sx={{
                                        marginTop: "35px",
                                        "@media only screen and (max-width:620px)":
                                          {
                                            marginTop: "10px",
                                          },
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          fontSize: "16px",
                                          color: "header.text",
                                          fontWeight: "500",
                                          lineHeight: "22px",
                                          //letterSpacing: "7px",
                                          fontWeight: "500",
                                          "@media only screen and (max-width:620px)":
                                            {
                                              fontSize: "12px",
                                              lineHeight: "19px",
                                              //letterSpacing: "4px"
                                            },
                                          "@media only screen and (max-width:380px)":
                                            {
                                              //letterSpacing: "1px",
                                            },
                                        }}
                                      >
                                        <Typography
                                            component="span"
                                          sx={{
                                            fontSize: "16px",
                                            color: "header.text",
                                            fontWeight: "500",
                                            lineHeight: "22px",
                                            letterSpacing: "7px",
                                            fontWeight: "700",
                                            "@media only screen and (max-width:620px)":
                                              {
                                                fontSize: "12px",
                                                lineHeight: "19px",
                                                letterSpacing: "5px"
                                              },
                                            "@media only screen and (max-width:380px)":
                                              {
                                                letterSpacing: "1px",
                                              },
                                          }}
                                        >
                                          {text?.heading}
                                          <span
                                            style={{
                                              color: "#c61d20",
                                              paddingLeft: "2px",
                                            }}
                                          >
                                            /
                                          </span>
                                        </Typography>
                                        {text?.content}
                                      </Typography>
                                    </Box>
                                  )
                                )}

                              {service.custom_data?.format_with_bullets
                                ?.length > 0 && (
                                <Box
                                  component="ul"
                                  sx={{ listStyleType: "disc" }}
                                >
                                  {service.custom_data.format_with_bullets.map(
                                    (bullet, bulletIndex) => (
                                      <Box
                                        component="li"
                                        key={bulletIndex}
                                        sx={{
                                          marginBottom: "4px",
                                          position: "relative",
                                          paddingLeft: "20px", // Adjust as needed for indentation
                                          "&::before": {
                                            content: "'+'",
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            color: "header.text",
                                            fontSize: "16px",
                                            letterSpacing: "8px",
                                            lineHeight: "30px",
                                            textTransform: "uppercase",
                                            fontWeight: "500",
                                          },
                                        }}
                                      >
                                        <Typography
                                          sx={{
                                            color: "header.text",
                                            fontSize: "16px",
                                            letterSpacing: "8px",
                                            lineHeight: "30px",
                                            textTransform: "uppercase",
                                            fontWeight: "500",
                                            display: "inline-block",
                                            "@media only screen and (max-width:620px)": {
                                              fontSize: "12px",
                                              letterSpacing: "4px",
                                              lineHeight: "25px",
                                              fontWeight: "600",
                                              "&::before": {
                                                letterSpacing: "6px",
                                              },
                                            },
                                            "@media only screen and (max-width:380px)": {
                                              letterSpacing: "4px",
                                              "&::before": {
                                                letterSpacing: "1px",
                                              },
                                            },
                                          }}
                                        >
                                          {bullet.bullet_heading}
                                        </Typography>
                                      </Box>
                                    )
                                  )}
                                </Box>
                              )}

                              {service?.Service_post_content && (
                                <Box
                                  className={`${index}-center`}
                                  sx={{
                                    fontSize: "16px",
                                    color: "header.text",
                                    fontWeight: "500",
                                    lineHeight: "22px",
                                    //letterSpacing: "7px",
                                    fontWeight: "500",
                                    // textAlign:"center",
                                    // whiteSpace: "normal",
                                    // wordBreak: "break-word",
                                    "@media only screen and (max-width:620px)":
                                      {
                                        fontSize: "12px",
                                        lineHeight: "19px",
                                        //letterSpacing: "4px"
                                        // wordBreak: "break-word",
                                        // paddingRight: "10px",
                                      },
                                    "@media only screen and (max-width:380px)":
                                      {
                                        //letterSpacing: "1px",
                                      },
                                  }}
                                >
                                  <div
                                    className={`${index}-center`}
                                    dangerouslySetInnerHTML={{
                                      __html: service?.Service_post_content,
                                    }}
                                  ></div>
                                </Box>
                              )}
                            </Box>
                          </Box>

                          {service.custom_data?.services_images && (
                            <Grid
                              container
                              spacing={{ xs: 2, sm: 2, md: 2 }}
                              sx={{ px: 1, pt: 2 }}
                            >
                              {service.custom_data.services_images.map(
                                (img, i) => (
                                  <Grid
                                    item
                                    xs={6}
                                    md={4}
                                    lg={3}
                                    key={i}
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      "& img":{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "290px"
                                      },
                                      "@media only screen and (max-width:620px)":{
                                      "& img":{
                                      height: "190px"
                                      }
                                    },
                                    "@media only screen and (max-width:400px)":{
                                      "& img":{
                                      height: "150px"
                                      }
                                    }
                                    }}
                                  >
                                    {/* <div style={{ width: "100%" }}> */}
                                    <img
                                      src={img?.image.url}
                                      alt={img?.image.alt || "Service Image"}
                                      // width={280}
                                      // height={290}
                                      
                                    />
                                    {/* </div> */}
                                  </Grid>
                                )
                              )}
                            </Grid>
                          )}

                          {index < data.Services_data.length - 1 && (
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                mt:3,
                                justifyContent:
                                  index % 2 === 0 ? "flex-end" : "flex-start",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  width: "40%",
                                  
                                  color:"#c61d20",
                                  fontSize:"170px",
                                  fontWeight:"bold",
                                }}
                              >
                                {/* <Image
                                  alt="Random image"
                                  src={"/images/plus.png"}
                                  width={110}
                                  height={90}
                                /> */}
                                <span>+</span>
                              </Box>
                            </Box>
                          )}
                        </Slide>
                      )}
                    </VisibilitySensor>
                  </React.Fragment>
                );
              })}
            </>
          )}
        </Box>
      )}
    </>

    /* {service.custom_data?.services_images && (
                    <Grid
                      container
                      spacing={{ xs: 1, sm: 2, md: 2 }}
                      sx={{ pt: 6 }}
                    >
                      
                            {service.custom_data.services_images.map(
                              (img, i) => (
                                <Grid item xs={6} md={4} lg={3} key={i}>
                                  <VisibilitySensor
                    key={i}
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setImg((prevFocus) => {
                          const newFocus = [...prevFocus];
                          newFocus[i] = true;
                          return newFocus;
                        });
                      }
                    }}
                  >
                          
                                  <Image
                                    src={img?.image.url}
                                    alt={img?.image.alt || "Service Image"}
                                    className={`imageBoxAbout ${
                                      img[i] ? "imageBoxAnimation" : ""
                                    }`}
                                    width={310}
                                    height={270}
                                    style={{
                                      objectFit: "cover",
                                      width: "100%",
                                      // height: "100%",
                                      visibility: focus[index] ? "visible" : "hidden",
                        transition: "all 1s ease-in-out",
                        animationDelay: focus[index]
                          ? `${index * 300}ms`
                          : "0ms",
                                    }}
                                  />
                              
                            </VisibilitySensor>
                              </Grid>
                              )
                            )}
                         
                    </Grid>
                  )} */

    // <>
    //   {focus < 800 && (
    //       <Box
    //         sx={{
    //           width: "100%",
    //           position: "relative",
    //           display: "flex",
    //           alignItems: "center",
    //           flexDirection: "column",
    //           justifyContent: "center",
    //           "@media only screen and (max-width:600px)": {
    //             display: "none",
    //           },
    //         }}
    //       >
    //         {data !== null && data?.Services_data?.length > 0 && (
    //           <>
    //             {data?.Services_data?.map((item, index) => (
    //               <React.Fragment key={index}>
    //                 {index === 0 && (
    //                   <Box
    //                     className={`${index}-center`}
    //                     key={`${index}_${item?.Service_post_title?.toLowerCase()}`}
    //                     id={item?.Service_post_title?.toLowerCase()}
    //                     sx={{
    //                       "&::before": {
    //                         content: '""',
    //                         position: "absolute",
    //                         top: "0",
    //                         left: "0",
    //                         width: "100%",
    //                         height: "100%",
    //                         zIndex: -1,
    //                         backgroundImage: `url(${item.Service_post_featured_image_data.url})`,
    //                         backgroundSize: "cover",
    //                         backgroundPosition: "center",
    //                         backgroundRepeat: "no-repeat",
    //                         opacity: item?.custom_data?.featured_image_opacity != null ? `${item?.custom_data?.featured_image_opacity}%` : "50%",
    //                         transition: "all 0.75s ease-in-out",
    //                         borderRadius: "50%",
    //                       },
    //                       backgroundColor: "#0c0c0c",
    //                       position:"relative",
    //                       transformOrigin: compare?.includes(`${index}-center`)
    //                         ? "top center"
    //                         : "top right",

    //                       zIndex: compare?.includes(`${index}-center`)
    //                         ? 999
    //                         : 4,
    //                       transform: compare?.includes(`${index}-center`)
    //                         ? "scale(0.8,0.8) translate(0%,0%)"
    //                         : "scale(0.6,0.6) translate(0%,0%)",
    //                       minWidth: "100%",
    //                       width: `${contentHeight[index]}px`,
    //                       height: "max-content",
    //                       aspectRatio: "1 / 1",
    //                       borderRadius: "50%",
    //                       transition: "1s",
    //                       "@media only screen and (max-width:600px)": {
    //                         transform: "scale(1,1) translate(0%,0%)",
    //                       },
    //                       // "&:hover":{"&::before": {opacity:"100%"}}
    //                     }}
    //                   >
    //                     <Box
    //                       className={`${index}-center`}
    //                       ref={contentRefOne}
    //                       sx={{
    //                         backdropFilter: "saturate(0)",
    //                         backgroundColor: "rgba(0,0,0,0.1)",
    //                         width: "100%",
    //                         minHeight: "100%",
    //                         height: "fit-content",
    //                         padding: "15%",
    //                         borderRadius: "50%",
    //                         display: "flex",
    //                         alignItems: "center",
    //                       }}
    //                     >
    //                       <Container
    //                         className={`${index}-center`}
    //                         maxWidth="xl"
    //                         sx={{ maxWidth: "100vw" }}
    //                       >
    //                         <Box
    //                           className={`${index}-center`}
    //                         >
    //                           <Typography
    //                             className={`${index}-center`}
    //                             variant="h1"
    //                             sx={{
    //                               color: "header.text",
    //                               fontSize: "35px",
    //                               letterSpacing: "30px",
    //                               textTransform: "uppercase",
    //                               fontWeight: "700",
    //                               wordBreak: "break-all",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 fontSize: "2.19vw",
    //                                 letterSpacing: "2.04vw",
    //                               },
    //                             }}
    //                           >
    //                             <span
    //                               className={`${index}-center`}
    //                               style={{ color: "#c61d20" }}
    //                             >
    //                               +
    //                             </span>
    //                             {item?.Service_post_title}
    //                           </Typography>
    //                         </Box>

    //                         {item?.custom_data?.format_with_headings?.length >
    //                           0 &&
    //                           item?.custom_data?.format_with_headings?.map(
    //                             (text, i) => (
    //                               <Box
    //                                 className={`${index}-center`}
    //                                 key={i}
    //                                 sx={{
    //                                   marginTop: "35px",
    //                                   "@media only screen and (max-width:1600px)":
    //                                     {
    //                                       marginTop: "2.37vw",
    //                                     },
    //                                 }}
    //                               >
    //                                 <Typography
    //                                   className={`${index}-center`}
    //                                   variant="body2"
    //                                   sx={{
    //                                     fontSize: "15px",
    //                                     color: "header.text",
    //                                     fontWeight: "400",
    //                                     wordBreak: "break-word",
    //                                     "@media only screen and (max-width:1600px)":
    //                                       {
    //                                         fontSize: "1.2vw",
    //                                       },
    //                                   }}
    //                                 >
    //                                   <Typography
    //                                     className={`${index}-center`}
    //                                     variant="body1"
    //                                     component="span"
    //                                     sx={{
    //                                       fontSize: "15px",
    //                                       letterSpacing: "8px",
    //                                       textTransform: "uppercase",
    //                                       color: "header.text",
    //                                       fontWeight: "700",
    //                                       wordBreak: "break-word",
    //                                       "@media only screen and (max-width:1600px)":
    //                                         {
    //                                           fontSize: "1.2vw",
    //                                           letterSpacing: "0.543vw",
    //                                         },
    //                                     }}
    //                                   >
    //                                     {text?.heading}
    //                                     <span
    //                                       className={`${index}-center`}
    //                                       style={{
    //                                         color: "#c61d20",
    //                                         paddingLeft: "2px",
    //                                       }}
    //                                     >
    //                                       /
    //                                     </span>
    //                                   </Typography>
    //                                   {text?.content}
    //                                   {/* STRATEGIC COMMUNICATIONS CONSULTING/The compass guiding your brand through the intricate landscape of messaging and outreach. It's the art and science of crafting a roadmap that aligns your objectives with a tailored communication strategy, amplifying your voice in a crowded digital arena. This consultancy dives deep into understanding your brand's essence, audience nuances, and market trends, translating them into a cohesive narrative. From defining your unique story to selecting the right channels for dissemination, strategic communications consulting empowers your brand to resonate authentically, fostering meaningful connections and driving impactful results. AI Consulting/to weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}

    //                                   {/* AI CONSULTING/To weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}
    //                                 </Typography>
    //                               </Box>
    //                             )
    //                           )}

    //                         {item?.custom_data?.format_with_bullets?.length >
    //                           0 && (
    //                           <Box
    //                             className={`${index}-center`}
    //                             sx={{
    //                               display: "flex",
    //                               flexDirection: "column",
    //                               gap: "6px",
    //                               marginTop: "35px",
    //                               paddingBottom: "2rem",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 gap: "0.40628vw",
    //                                 marginTop: "2.37vw",
    //                                 paddingBottom: "2.166vw",
    //                               },
    //                             }}
    //                           >
    //                             {item?.custom_data?.format_with_bullets?.map(
    //                               (text, i) => (
    //                                 <Typography
    //                                   className={`${index}-center`}
    //                                   key={i}
    //                                   variant="body1"
    //                                   sx={{
    //                                     fontSize: "15px",
    //                                     letterSpacing: "8px",
    //                                     textTransform: "uppercase",
    //                                     color: "header.text",
    //                                     fontWeight: "700",
    //                                     wordBreak: "break-word",
    //                                     "@media only screen and (max-width:1600px)":
    //                                       {
    //                                         fontSize: "1.2vw",
    //                                         letterSpacing: "0.585vw",
    //                                       },
    //                                   }}
    //                                 >
    //                                   + {text?.bullet_heading}
    //                                 </Typography>
    //                               )
    //                             )}
    //                           </Box>
    //                         )}
    //                         {item?.Service_post_content && (
    //                           <Box
    //                             className={`${index}-center`}
    //                             sx={{
    //                               paddingTop: "1rem",
    //                               fontSize: "15px",
    //                               color: "header.text",
    //                               fontWeight: "400",
    //                               wordBreak: "break-word",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 fontSize: "1.2vw",
    //                                 paddingTop: "1.098vw",
    //                               },
    //                             }}
    //                           >
    //                             <div
    //                               className={`${index}-center`}
    //                               dangerouslySetInnerHTML={{
    //                                 __html: item?.Service_post_content,
    //                               }}
    //                             ></div>
    //                           </Box>
    //                         )}
    //                       </Container>
    //                     </Box>
    //                   </Box>
    //                 )}
    //                 {index === 1 && (
    //                   <Box
    //                     className={`${index}-center`}
    //                     key={`${index}_${item?.Service_post_title?.toLowerCase()}`}
    //                     id={item?.Service_post_title?.toLowerCase()}
    //                     sx={{
    //                       "&::before": {
    //                         content: '""',
    //                         position: "absolute",
    //                         top: "0",
    //                         left: "0",
    //                         width: "100%",
    //                         height: "100%",
    //                         zIndex: -1,
    //                         backgroundImage: `url(${item.Service_post_featured_image_data.url})`,
    //                         backgroundSize: "cover",
    //                         backgroundPosition: "center",
    //                         backgroundRepeat: "no-repeat",
    //                         opacity: item?.custom_data?.featured_image_opacity != null ? `${item?.custom_data?.featured_image_opacity}%` : "50%",
    //                         transition: "all 0.75s ease-in-out",
    //                         borderRadius: "50%",
    //                       },
    //                       backgroundColor: "#0c0c0c",
    //                       position:"relative",
    //                       marginTop:
    //                         contentHeight[index] != 0
    //                           ? `-${contentHeight[index] / 3}px`
    //                           : "-35%",
    //                       transformOrigin: compare?.includes(`${index}-center`)
    //                         ? "top center"
    //                         : "top left",

    //                       zIndex: compare?.includes(`${index}-center`)
    //                         ? 999
    //                         : 4,
    //                       transform: compare?.includes(`${index}-center`)
    //                         ? "scale(0.8,0.8) translate(0%,0%)"
    //                         : "scale(0.6,0.6) translate(0%,0%)",

    //                       minWidth: "100%",
    //                       width: `${contentHeight[index]}px`,
    //                       height: "max-content",
    //                       aspectRatio: "1 / 1",
    //                       borderRadius: "50%",
    //                       transition: "1s",
    //                       "@media only screen and (max-width:600px)": {
    //                         marginTop: "unset !important",
    //                         transform: "scale(1,1) translate(0%,0%)",
    //                       },
    //                       // "&:hover":{"&::before": {opacity:"100%"}}
    //                     }}
    //                   >
    //                     <Box
    //                       className={`${index}-center`}
    //                       ref={contentRefTwo}
    //                       sx={{
    //                         backdropFilter: "saturate(0)",
    //                         backgroundColor: "rgba(0,0,0,0.1)",
    //                         width: "100%",
    //                         minHeight: "100%",
    //                         height: "fit-content",
    //                         padding: "15%",
    //                         borderRadius: "50%",
    //                         display: "flex",
    //                         alignItems: "center",
    //                       }}
    //                     >
    //                       <Container
    //                         className={`${index}-center`}
    //                         maxWidth="xl"
    //                         sx={{ maxWidth: "100vw" }}
    //                       >
    //                         <Box
    //                           className={`${index}-center`}
    //                         >
    //                           <Typography
    //                             className={`${index}-center`}
    //                             variant="h1"
    //                             sx={{
    //                               color: "header.text",
    //                               fontSize: "35px",
    //                               letterSpacing: "30px",
    //                               textTransform: "uppercase",
    //                               fontWeight: "700",
    //                               wordBreak: "break-all",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 fontSize: "2.19vw",
    //                                 letterSpacing: "2.04vw",
    //                               },
    //                             }}
    //                           >
    //                             <span
    //                               className={`${index}-center`}
    //                               style={{ color: "#c61d20" }}
    //                             >
    //                               +
    //                             </span>
    //                             {item?.Service_post_title}
    //                           </Typography>
    //                         </Box>

    //                         {item?.custom_data?.format_with_headings?.length >
    //                           0 &&
    //                           item?.custom_data?.format_with_headings?.map(
    //                             (text, i) => (
    //                               <Box
    //                                 className={`${index}-center`}
    //                                 key={i}
    //                                 sx={{
    //                                   marginTop: "35px",
    //                                   "@media only screen and (max-width:1600px)":
    //                                     {
    //                                       marginTop: "2.37vw",
    //                                     },
    //                                 }}
    //                               >
    //                                 <Typography
    //                                   className={`${index}-center`}
    //                                   variant="body2"
    //                                   sx={{
    //                                     fontSize: "15px",
    //                                     color: "header.text",
    //                                     fontWeight: "400",
    //                                     wordBreak: "break-word",
    //                                     "@media only screen and (max-width:1600px)":
    //                                       {
    //                                         fontSize: "1.2vw",
    //                                       },
    //                                   }}
    //                                 >
    //                                   <Typography
    //                                     className={`${index}-center`}
    //                                     variant="body1"
    //                                     component="span"
    //                                     sx={{
    //                                       fontSize: "15px",
    //                                       letterSpacing: "8px",
    //                                       textTransform: "uppercase",
    //                                       color: "header.text",
    //                                       fontWeight: "700",
    //                                       wordBreak: "break-word",
    //                                       "@media only screen and (max-width:1600px)":
    //                                         {
    //                                           fontSize: "1.2vw",
    //                                           letterSpacing: "0.543vw",
    //                                         },
    //                                     }}
    //                                   >
    //                                     {text?.heading}
    //                                     <span
    //                                       className={`${index}-center`}
    //                                       style={{
    //                                         color: "#c61d20",
    //                                         paddingLeft: "2px",
    //                                       }}
    //                                     >
    //                                       /
    //                                     </span>
    //                                   </Typography>
    //                                   {text?.content}
    //                                   {/* STRATEGIC COMMUNICATIONS CONSULTING/The compass guiding your brand through the intricate landscape of messaging and outreach. It's the art and science of crafting a roadmap that aligns your objectives with a tailored communication strategy, amplifying your voice in a crowded digital arena. This consultancy dives deep into understanding your brand's essence, audience nuances, and market trends, translating them into a cohesive narrative. From defining your unique story to selecting the right channels for dissemination, strategic communications consulting empowers your brand to resonate authentically, fostering meaningful connections and driving impactful results. AI Consulting/to weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}

    //                                   {/* AI CONSULTING/To weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}
    //                                 </Typography>
    //                               </Box>
    //                             )
    //                           )}

    //                         {item?.custom_data?.format_with_bullets?.length >
    //                           0 && (
    //                           <Box
    //                             className={`${index}-center`}
    //                             sx={{
    //                               display: "flex",
    //                               flexDirection: "column",
    //                               gap: "6px",
    //                               marginTop: "35px",
    //                               paddingBottom: "2rem",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 gap: "0.40628vw",
    //                                 marginTop: "2.37vw",
    //                                 paddingBottom: "2.166vw",
    //                               },
    //                             }}
    //                           >
    //                             {item?.custom_data?.format_with_bullets?.map(
    //                               (text, i) => (
    //                                 <Typography
    //                                   className={`${index}-center`}
    //                                   key={i}
    //                                   variant="body1"
    //                                   sx={{
    //                                     fontSize: "15px",
    //                                     letterSpacing: "8px",
    //                                     textTransform: "uppercase",
    //                                     color: "header.text",
    //                                     fontWeight: "700",
    //                                     wordBreak: "break-word",
    //                                     "@media only screen and (max-width:1600px)":
    //                                       {
    //                                         fontSize: "1.2vw",
    //                                         letterSpacing: "0.585vw",
    //                                       },
    //                                   }}
    //                                 >
    //                                   + {text?.bullet_heading}
    //                                 </Typography>
    //                               )
    //                             )}
    //                           </Box>
    //                         )}
    //                         {item?.Service_post_content && (
    //                           <Box
    //                             className={`${index}-center`}
    //                             sx={{
    //                               paddingTop: "1rem",
    //                               fontSize: "15px",
    //                               color: "header.text",
    //                               fontWeight: "400",
    //                               wordBreak: "break-word",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 fontSize: "1.2vw",
    //                                 paddingTop: "1.098vw",
    //                               },
    //                             }}
    //                           >
    //                             <div
    //                               className={`${index}-center`}
    //                               dangerouslySetInnerHTML={{
    //                                 __html: item?.Service_post_content,
    //                               }}
    //                             ></div>
    //                           </Box>
    //                         )}
    //                       </Container>
    //                     </Box>
    //                   </Box>
    //                 )}
    //                 {index === 2 && (
    //                   <Box
    //                     className={`${index}-center`}
    //                     key={`${index}_${item?.Service_post_title?.toLowerCase()}`}
    //                     id={item?.Service_post_title?.toLowerCase()}
    //                     sx={{
    //                       "&::before": {
    //                         content: '""',
    //                         position: "absolute",
    //                         top: "0",
    //                         left: "0",
    //                         width: "100%",
    //                         height: "100%",
    //                         zIndex: -1,
    //                         backgroundImage: `url(${item.Service_post_featured_image_data.url})`,
    //                         backgroundSize: "cover",
    //                         backgroundPosition: "center",
    //                         backgroundRepeat: "no-repeat",
    //                         opacity: item?.custom_data?.featured_image_opacity != null ? `${item?.custom_data?.featured_image_opacity}%` : "50%",
    //                         transition: "all 0.75s ease-in-out",
    //                         borderRadius: "50%",
    //                       },
    //                       backgroundColor: "#0c0c0c",
    //                       position:"relative",
    //                       marginTop:
    //                         contentHeight[index] != 0
    //                           ? `-${contentHeight[index] / 3}px`
    //                           : "-35%",
    //                       transformOrigin: compare?.includes(`${index}-center`)
    //                         ? "top center"
    //                         : "top right",

    //                       zIndex: compare?.includes(`${index}-center`)
    //                         ? 999
    //                         : 4,
    //                       transform: compare?.includes(`${index}-center`)
    //                         ? "scale(0.8,0.8) translate(0%,0%)"
    //                         : "scale(0.6,0.6) translate(0%,0%)",

    //                       minWidth: "100%",
    //                       width: `${contentHeight[index]}px`,
    //                       height: "max-content",
    //                       aspectRatio: "1 / 1",
    //                       borderRadius: "50%",
    //                       transition: "1s",
    //                       "@media only screen and (max-width:600px)": {
    //                         marginTop: "unset !important",
    //                         transform: "scale(1,1) translate(0%,0%)",
    //                       },
    //                       // "&:hover":{"&::before": {opacity:"100%"}}
    //                     }}
    //                   >
    //                     <Box
    //                       className={`${index}-center`}
    //                       ref={contentRefThree}
    //                       sx={{
    //                         backdropFilter: "saturate(0)",
    //                         backgroundColor: "rgba(0,0,0,0.1)",
    //                         width: "100%",
    //                         minHeight: "100%",
    //                         height: "fit-content",
    //                         padding: "15%",
    //                         borderRadius: "50%",
    //                         display: "flex",
    //                         alignItems: "center",
    //                       }}
    //                     >
    //                       <Container
    //                         className={`${index}-center`}
    //                         maxWidth="xl"
    //                         sx={{ maxWidth: "100vw" }}
    //                       >
    //                         <Box
    //                           className={`${index}-center`}
    //                         >
    //                           <Typography
    //                             className={`${index}-center`}
    //                             variant="h1"
    //                             sx={{
    //                               color: "header.text",
    //                               fontSize: "35px",
    //                               letterSpacing: "30px",
    //                               textTransform: "uppercase",
    //                               fontWeight: "700",
    //                               wordBreak: "break-all",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 fontSize: "2.19vw",
    //                                 letterSpacing: "2.04vw",
    //                               },
    //                             }}
    //                           >
    //                             <span
    //                               className={`${index}-center`}
    //                               style={{ color: "#c61d20" }}
    //                             >
    //                               +
    //                             </span>
    //                             {item?.Service_post_title}
    //                           </Typography>
    //                         </Box>

    //                         {item?.custom_data?.format_with_headings?.length >
    //                           0 &&
    //                           item?.custom_data?.format_with_headings?.map(
    //                             (text, i) => (
    //                               <Box
    //                                 className={`${index}-center`}
    //                                 key={i}
    //                                 sx={{
    //                                   marginTop: "35px",
    //                                   "@media only screen and (max-width:1600px)":
    //                                     {
    //                                       marginTop: "2.37vw",
    //                                     },
    //                                 }}
    //                               >
    //                                 <Typography
    //                                   className={`${index}-center`}
    //                                   variant="body2"
    //                                   sx={{
    //                                     fontSize: "15px",
    //                                     color: "header.text",
    //                                     fontWeight: "400",
    //                                     wordBreak: "break-word",
    //                                     "@media only screen and (max-width:1600px)":
    //                                       {
    //                                         fontSize: "1.2vw",
    //                                       },
    //                                   }}
    //                                 >
    //                                   <Typography
    //                                     className={`${index}-center`}
    //                                     variant="body1"
    //                                     component="span"
    //                                     sx={{
    //                                       fontSize: "15px",
    //                                       letterSpacing: "8px",
    //                                       textTransform: "uppercase",
    //                                       color: "header.text",
    //                                       fontWeight: "700",
    //                                       wordBreak: "break-word",
    //                                       "@media only screen and (max-width:1600px)":
    //                                         {
    //                                           fontSize: "1.2vw",
    //                                           letterSpacing: "0.543vw",
    //                                         },
    //                                     }}
    //                                   >
    //                                     {text?.heading}
    //                                     <span
    //                                       className={`${index}-center`}
    //                                       style={{
    //                                         color: "#c61d20",
    //                                         paddingLeft: "2px",
    //                                       }}
    //                                     >
    //                                       /
    //                                     </span>
    //                                   </Typography>
    //                                   {text?.content}
    //                                   {/* STRATEGIC COMMUNICATIONS CONSULTING/The compass guiding your brand through the intricate landscape of messaging and outreach. It's the art and science of crafting a roadmap that aligns your objectives with a tailored communication strategy, amplifying your voice in a crowded digital arena. This consultancy dives deep into understanding your brand's essence, audience nuances, and market trends, translating them into a cohesive narrative. From defining your unique story to selecting the right channels for dissemination, strategic communications consulting empowers your brand to resonate authentically, fostering meaningful connections and driving impactful results. AI Consulting/to weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}

    //                                   {/* AI CONSULTING/To weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}
    //                                 </Typography>
    //                               </Box>
    //                             )
    //                           )}

    //                         {item?.custom_data?.format_with_bullets?.length >
    //                           0 && (
    //                           <Box
    //                             className={`${index}-center`}
    //                             sx={{
    //                               display: "flex",
    //                               flexDirection: "column",
    //                               gap: "6px",
    //                               marginTop: "35px",
    //                               paddingBottom: "2rem",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 gap: "0.40628vw",
    //                                 marginTop: "2.37vw",
    //                                 paddingBottom: "2.166vw",
    //                               },
    //                             }}
    //                           >
    //                             {item?.custom_data?.format_with_bullets?.map(
    //                               (text, i) => (
    //                                 <Typography
    //                                   className={`${index}-center`}
    //                                   key={i}
    //                                   variant="body1"
    //                                   sx={{
    //                                     fontSize: "15px",
    //                                     letterSpacing: "8px",
    //                                     textTransform: "uppercase",
    //                                     color: "header.text",
    //                                     fontWeight: "700",
    //                                     wordBreak: "break-word",
    //                                     "@media only screen and (max-width:1600px)":
    //                                       {
    //                                         fontSize: "1.2vw",
    //                                         letterSpacing: "0.585vw",
    //                                       },
    //                                   }}
    //                                 >
    //                                   + {text?.bullet_heading}
    //                                 </Typography>
    //                               )
    //                             )}
    //                           </Box>
    //                         )}
    //                         {item?.Service_post_content && (
    //                           <Box
    //                             className={`${index}-center`}
    //                             sx={{
    //                               paddingTop: "1rem",
    //                               fontSize: "15px",
    //                               color: "header.text",
    //                               fontWeight: "400",
    //                               wordBreak: "break-word",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 fontSize: "1.2vw",
    //                                 paddingTop: "1.098vw",
    //                               },
    //                             }}
    //                           >
    //                             <div
    //                               className={`${index}-center`}
    //                               dangerouslySetInnerHTML={{
    //                                 __html: item?.Service_post_content,
    //                               }}
    //                             ></div>
    //                           </Box>
    //                         )}
    //                       </Container>
    //                     </Box>
    //                   </Box>
    //                 )}
    //                 {index === 3 && (
    //                   <Box
    //                     className={`${index}-center`}
    //                     key={`${index}_${item?.Service_post_title?.toLowerCase()}`}
    //                     id={item?.Service_post_title?.toLowerCase()}
    //                     sx={{
    //                       "&::before": {
    //                         content: '""',
    //                         position: "absolute",
    //                         top: "0",
    //                         left: "0",
    //                         width: "100%",
    //                         height: "100%",
    //                         zIndex: -1,
    //                         backgroundImage: `url(${item.Service_post_featured_image_data.url})`,
    //                         backgroundSize: "cover",
    //                         backgroundPosition: "center",
    //                         backgroundRepeat: "no-repeat",
    //                         opacity: item?.custom_data?.featured_image_opacity != null ? `${item?.custom_data?.featured_image_opacity}%` : "50%",
    //                         transition: "all 0.75s ease-in-out",
    //                         borderRadius: "50%",
    //                       },
    //                       backgroundColor: "#0c0c0c",
    //                       position:"relative",
    //                       marginTop:
    //                         contentHeight[index] != 0
    //                           ? `-${contentHeight[index] / 3}px`
    //                           : "-35%",
    //                       transformOrigin: compare?.includes(`${index}-center`)
    //                         ? "top center"
    //                         : "top left",

    //                       zIndex: compare?.includes(`${index}-center`)
    //                         ? 999
    //                         : 4,
    //                       transform: compare?.includes(`${index}-center`)
    //                         ? "scale(0.8,0.8) translate(0%,0%)"
    //                         : "scale(0.6,0.6) translate(0%,0%)",
    //                       minWidth: "100%",
    //                       width: `${contentHeight[index]}px`,
    //                       height: "max-content",
    //                       aspectRatio: "1 / 1",
    //                       borderRadius: "50%",
    //                       transition: "1s",
    //                       "@media only screen and (max-width:600px)": {
    //                         marginTop: "unset !important",
    //                         transform: "scale(1,1) translate(0%,0%)",
    //                       },
    //                       // "&:hover":{"&::before": {opacity:"100%"}}
    //                     }}
    //                   >
    //                     <Box
    //                       className={`${index}-center`}
    //                       ref={contentRefFour}
    //                       sx={{
    //                         backdropFilter: "saturate(0)",
    //                         backgroundColor: "rgba(0,0,0,0.1)",
    //                         width: "100%",
    //                         minHeight: "100%",
    //                         height: "fit-content",
    //                         padding: "15%",
    //                         borderRadius: "50%",
    //                         display: "flex",
    //                         alignItems: "center",
    //                       }}
    //                     >
    //                       <Container
    //                         className={`${index}-center`}
    //                         maxWidth="xl"
    //                         sx={{ maxWidth: "100vw" }}
    //                       >
    //                         <Box
    //                           className={`${index}-center`}
    //                         >
    //                           <Typography
    //                             className={`${index}-center`}
    //                             variant="h1"
    //                             sx={{
    //                               color: "header.text",
    //                               fontSize: "35px",
    //                               letterSpacing: "30px",
    //                               textTransform: "uppercase",
    //                               fontWeight: "700",
    //                               wordBreak: "break-all",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 fontSize: "2.19vw",
    //                                 letterSpacing: "2.04vw",
    //                               },
    //                             }}
    //                           >
    //                             <span
    //                               className={`${index}-center`}
    //                               style={{ color: "#c61d20" }}
    //                             >
    //                               +
    //                             </span>
    //                             {item?.Service_post_title}
    //                           </Typography>
    //                         </Box>

    //                         {item?.custom_data?.format_with_headings?.length >
    //                           0 &&
    //                           item?.custom_data?.format_with_headings?.map(
    //                             (text, i) => (
    //                               <Box
    //                                 className={`${index}-center`}
    //                                 key={i}
    //                                 sx={{
    //                                   marginTop: "35px",
    //                                   "@media only screen and (max-width:1600px)":
    //                                     {
    //                                       marginTop: "2.37vw",
    //                                     },
    //                                 }}
    //                               >
    //                                 <Typography
    //                                   className={`${index}-center`}
    //                                   variant="body2"
    //                                   sx={{
    //                                     fontSize: "15px",
    //                                     color: "header.text",
    //                                     fontWeight: "400",
    //                                     wordBreak: "break-word",
    //                                     "@media only screen and (max-width:1600px)":
    //                                       {
    //                                         fontSize: "1.2vw",
    //                                       },
    //                                   }}
    //                                 >
    //                                   <Typography
    //                                     className={`${index}-center`}
    //                                     variant="body1"
    //                                     component="span"
    //                                     sx={{
    //                                       fontSize: "15px",
    //                                       letterSpacing: "8px",
    //                                       textTransform: "uppercase",
    //                                       color: "header.text",
    //                                       fontWeight: "700",
    //                                       wordBreak: "break-word",
    //                                       "@media only screen and (max-width:1600px)":
    //                                         {
    //                                           fontSize: "1.2vw",
    //                                           letterSpacing: "0.543vw",
    //                                         },
    //                                     }}
    //                                   >
    //                                     {text?.heading}
    //                                     <span
    //                                       className={`${index}-center`}
    //                                       style={{
    //                                         color: "#c61d20",
    //                                         paddingLeft: "2px",
    //                                       }}
    //                                     >
    //                                       /
    //                                     </span>
    //                                   </Typography>
    //                                   {text?.content}
    //                                   {/* STRATEGIC COMMUNICATIONS CONSULTING/The compass guiding your brand through the intricate landscape of messaging and outreach. It's the art and science of crafting a roadmap that aligns your objectives with a tailored communication strategy, amplifying your voice in a crowded digital arena. This consultancy dives deep into understanding your brand's essence, audience nuances, and market trends, translating them into a cohesive narrative. From defining your unique story to selecting the right channels for dissemination, strategic communications consulting empowers your brand to resonate authentically, fostering meaningful connections and driving impactful results. AI Consulting/to weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}

    //                                   {/* AI CONSULTING/To weave into the above - Huntley will probably have specifics for this but for now: Leveraging cutting-edge AI technologies to analyze data, predict trends, and optimize messaging strategies, ensuring a forward-looking and adaptive approach to communication in a rapidly evolving digital landscape. */}
    //                                 </Typography>
    //                               </Box>
    //                             )
    //                           )}

    //                         {item?.custom_data?.format_with_bullets?.length >
    //                           0 && (
    //                           <Box
    //                             className={`${index}-center`}
    //                             sx={{
    //                               display: "flex",
    //                               flexDirection: "column",
    //                               gap: "6px",
    //                               marginTop: "35px",
    //                               paddingBottom: "2rem",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 gap: "0.40628vw",
    //                                 marginTop: "2.37vw",
    //                                 paddingBottom: "2.166vw",
    //                               },
    //                             }}
    //                           >
    //                             {item?.custom_data?.format_with_bullets?.map(
    //                               (text, i) => (
    //                                 <Typography
    //                                   className={`${index}-center`}
    //                                   key={i}
    //                                   variant="body1"
    //                                   sx={{
    //                                     fontSize: "15px",
    //                                     letterSpacing: "8px",
    //                                     textTransform: "uppercase",
    //                                     color: "header.text",
    //                                     fontWeight: "700",
    //                                     wordBreak: "break-word",
    //                                     "@media only screen and (max-width:1600px)":
    //                                       {
    //                                         fontSize: "1.2vw",
    //                                         letterSpacing: "0.585vw",
    //                                       },
    //                                   }}
    //                                 >
    //                                   + {text?.bullet_heading}
    //                                 </Typography>
    //                               )
    //                             )}
    //                           </Box>
    //                         )}
    //                         {item?.Service_post_content && (
    //                           <Box
    //                             className={`${index}-center`}
    //                             sx={{
    //                               paddingTop: "1rem",
    //                               fontSize: "15px",
    //                               color: "header.text",
    //                               fontWeight: "400",
    //                               wordBreak: "break-word",
    //                               "@media only screen and (max-width:1600px)": {
    //                                 fontSize: "1.2vw",
    //                                 paddingTop: "1.098vw",
    //                               },
    //                             }}
    //                           >
    //                             <div
    //                               className={`${index}-center`}
    //                               dangerouslySetInnerHTML={{
    //                                 __html: item?.Service_post_content,
    //                               }}
    //                             ></div>
    //                           </Box>
    //                         )}
    //                       </Container>
    //                     </Box>
    //                   </Box>
    //                 )}
    //               </React.Fragment>
    //             ))}
    //           </>
    //         )}
    //       </Box>
    //     </Container>
    //   )}
    //   {focus < 600 && (
    //     <Box>
    //       {data?.Services_data?.map((item, index) => (
    //         <Box
    //           key={`${index}_${item?.Service_post_title?.toLowerCase()}`}
    //           id={item?.Service_post_title?.toLowerCase()}
    //           con
    //           sx={{
    //             position: "relative",
    //             width: "100%",
    //             height: "100%",
    //             overflow: "hidden",
    //             "&::before": {
    //               content: "''",
    //               position: "absolute",
    //               top: 0,
    //               left: 0,
    //               width: "100%",
    //               height: "100%",
    //               backgroundImage: `url(${item.Service_post_featured_image_data.url})`,
    //               backgroundSize: "cover",
    //               backgroundColor: "rgba(12, 12, 12, 0.5)",
    //               backgroundOrigin: "content-box",
    //               backgroundPosition: "center",
    //               backgroundRepeat: "no-repeat",
    //               transition: "opacity 1s ease",
    //               opacity: item?.custom_data?.featured_image_opacity != null ? `${item?.custom_data?.featured_image_opacity}%` : "50%",
    //             },
    //             // "&:hover::before": {
    //             //   opacity: "100%",
    //             // },
    //             "@media only screen and (max-width:600px)": {
    //               display: "block",
    //               backgroundSize: "cover",
    //               backgroundPosition: "center",
    //             },
    //           }}
    //         >
    //           <Box
    //             sx={{
    //               backdropFilter: "saturate(0)",
    //               backgroundColor: "rgba(0,0,0,0.1)",
    //               width: "100%",
    //               height: "fit-content",
    //             }}
    //           >
    //             <Container
    //               maxWidth="xl"
    //               sx={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    //             >
    //               <Typography
    //                 variant="h1"
    //                 sx={{
    //                   color: "header.text",
    //                   fontSize: "35px",
    //                   letterSpacing: "30px",
    //                   lineHeight: "80px",
    //                   textTransform: "uppercase",
    //                   fontWeight: "700",
    //                   "@media only screen and (max-width:800px)": {
    //                     fontSize: "30px",
    //                     letterSpacing: "25px",
    //                     lineHeight: "60px",
    //                   },
    //                   "@media only screen and (max-width:600px)": {
    //                     fontSize: "20px",
    //                     letterSpacing: "15px",
    //                     lineHeight: "45px",
    //                     wordBreak: "break-all",
    //                     paddingTop: "1rem",
    //                   },
    //                 }}
    //               >
    //                 <span style={{ color: "#c61d20" }}>+</span>
    //                 {item?.Service_post_title}
    //               </Typography>
    //               {item?.custom_data?.format_with_headings?.length > 0 &&
    //                 item?.custom_data?.format_with_headings?.map(
    //                   (text, index) => (
    //                     <Box
    //                       key={index}
    //                       sx={{
    //                         marginTop: "35px",
    //                         "@media only screen and (max-width:650px)": {
    //                           marginTop: "10px",
    //                         },
    //                       }}
    //                     >
    //                       <Typography
    //                         variant="body2"
    //                         sx={{
    //                           fontSize: "15px",
    //                           paddingRight: "75px",
    //                           color: "header.text",
    //                           fontWeight: "400",
    //                           "@media only screen and (max-width:650px)": {
    //                             fontSize: "13px",
    //                             wordBreak: "break-word",
    //                             paddingRight: "10px",
    //                           },
    //                           "@media only screen and (max-width:1056px)": {
    //                             fontSize: "11px",
    //                           },
    //                         }}
    //                       >
    //                         <Typography
    //                           variant="body1"
    //                           component="span"
    //                           sx={{
    //                             fontSize: "15px",
    //                             letterSpacing: "8px",
    //                             textTransform: "uppercase",
    //                             color: "header.text",
    //                             fontWeight: "700",
    //                             "@media only screen and (max-width:600px)": {
    //                               fontSize: "13px",
    //                               letterSpacing: "2px",
    //                               wordBreak: "break-word",
    //                               pr: 0.3,
    //                             },
    //                           }}
    //                         >
    //                           {text?.heading}
    //                           <span
    //                             style={{ color: "#c61d20", paddingLeft: "2px" }}
    //                           >
    //                             /
    //                           </span>
    //                         </Typography>
    //                         {text?.content}
    //                       </Typography>
    //                     </Box>
    //                   )
    //                 )}
    //               {item?.custom_data?.format_with_bullets?.length > 0 && (
    //                 <Box
    //                   sx={{
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     gap: "6px",
    //                     marginTop: "15px",
    //                     paddingBottom: "2rem",
    //                   }}
    //                 >
    //                   {item?.custom_data?.format_with_bullets?.map(
    //                     (text, index) => (
    //                       <Typography
    //                         key={index}
    //                         variant="body1"
    //                         sx={{
    //                           fontSize: "15px",
    //                           letterSpacing: "8px",
    //                           textTransform: "uppercase",
    //                           color: "header.text",
    //                           fontWeight: "700",
    //                           "@media only screen and (max-width:1056px)": {
    //                             fontSize: "13px",
    //                           },
    //                           "@media only screen and (max-width:550px)": {
    //                             fontSize: "11px",
    //                             letterSpacing: "6px",
    //                             wordBreak: "break-word",
    //                           },
    //                         }}
    //                       >
    //                         + {text?.bullet_heading}
    //                       </Typography>
    //                     )
    //                   )}
    //                 </Box>
    //               )}
    //               {item?.Service_post_content && (
    //                 <Box
    //                   sx={{
    //                     paddingTop: "1rem",
    //                     fontSize: "15px",
    //                     paddingRight: "70px",
    //                     color: "header.text",
    //                     fontWeight: "400",
    //                     "@media only screen and (max-width:650px)": {
    //                       fontSize: "11px",
    //                       wordBreak: "break-word",
    //                       paddingRight: "15px",
    //                     },
    //                     "@media only screen and (max-width:1056px)": {
    //                       fontSize: "13px",
    //                     },
    //                   }}
    //                 >
    //                   <div
    //                     dangerouslySetInnerHTML={{
    //                       __html: item?.Service_post_content,
    //                     }}
    //                   ></div>
    //                 </Box>
    //               )}
    //             </Container>
    //           </Box>
    //         </Box>
    //       ))}
    //     </Box>
    //   )}
    // </>
  );
}

export default ServiceMain;
