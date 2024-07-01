"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

function AboutSectionFour({ data }) {
  const [height, setHeight] = useState(0);
  const oneSection = useRef();

  useEffect(() => {
    if (oneSection.current) {
      const { offsetWidth } = oneSection.current;
      setHeight(offsetWidth);
    }
  }, [data]);
console.log("four",data);

  return data?.Home_page_data?.about_section_4_visibility && (
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
       {data?.Home_page_data?.section_title_four}
      </Typography>
      <Box
        sx={{
          marginTop: "2.5rem",
          width: "100%",
        }}
      >
        {!!data?.Home_page_data?.section_title_four_content?.length && (
          <Grid container columnSpacing={5}>
            {data?.Home_page_data?.section_title_four_content.filter(
              (element, index) => index % 3 === 0
            ).length > 0 && (
              <Grid ref={oneSection} item xs={12} md={6} lg={4}>
                {data?.Home_page_data?.section_title_four_content
                  .filter((element, index) => index % 3 === 0)
                  .map((item, i) => {
                    const duration = (0 + i) * 1000;
                    return (
                      <Slide
                        key={i}
                        triggerOnce
                        direction="right"
                        duration={1000}
                        delay={duration}
                      >
                        <Fade triggerOnce duration={1000} delay={duration}>
                          <Box
                            key={i}
                            sx={{
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                zIndex: -1,
                                background: `url(${item.image.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                opacity: item?.image_opacity != null ? `${item?.image_opacity}%` : "50%",
                                transition: "all 1s ease-in-out",
                              },
                              position: "relative",
                              width: "100%",
                              filter: "grayscale(1)",
                              mb: "2rem",
                              transition: "all 1s ease-in-out",
                              minHeight: `${height - 40}px`,
                              "&:hover": {
                                filter: "grayscale(0)",
                                "&::before": {
                                  opacity: "100%",
                                },
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: "100%",
                                minHeight: `${height - 40}px`,
                                backgroundColor: "rgba(0,0,0,0.5)",
                                px: "30px",
                                py: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 1s ease-in-out",
                                "&:hover": {
                                  backgroundColor: "transparent",
                                },
                              }}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontSize: "12px",
                                  letterSpacing: "8px",
                                  color: "#fff",
                                  fontWeight: "700",
                                  textTransform: "uppercase",
                                  textAlign: "center",
                                }}
                              >
                                {item.title}
                              </Typography>
                            </Box>
                          </Box>
                        </Fade>
                      </Slide>
                    );
                  })}
              </Grid>
            )}
            {data?.Home_page_data?.section_title_four_content.filter(
              (element, index) => (index - 1) % 3 === 0
            ).length > 0 && (
              <Grid item xs={12} md={6} lg={4}>
                {data?.Home_page_data?.section_title_four_content
                  .filter((element, index) => (index - 1) % 3 === 0)
                  .map((item, i) => {
                    const duration = (1 + i) * 1000;
                    return (
                      <Slide
                        key={i}
                        triggerOnce
                        direction="right"
                        duration={1000}
                        delay={duration}
                      >
                        <Fade triggerOnce duration={1500} delay={duration}>
                          <Box
                            key={i}
                            sx={{
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                zIndex: -1,
                                background: `url(${item.image.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                opacity: item?.image_opacity != null ? `${item?.image_opacity}%` : "50%",
                                transition: "all 1s ease-in-out",
                              },
                              position: "relative",
                              width: "100%",
                              filter: "grayscale(1)",
                              mb: "2rem",
                              transition: "all 1s ease-in-out",
                              minHeight: `${height - 40}px`,
                              "&:hover": {
                                filter: "grayscale(0)",
                                "&::before": {
                                  opacity: "100%",
                                },
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: "100%",
                                minHeight: `${height - 40}px`,
                                backgroundColor: "rgba(0,0,0,0.5)",
                                px: "30px",
                                py: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 1s ease-in-out",
                                "&:hover": {
                                  backgroundColor: "transparent",
                                },
                              }}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontSize: "12px",
                                  letterSpacing: "8px",
                                  color: "#fff",
                                  fontWeight: "700",
                                  textTransform: "uppercase",
                                  textAlign: "center",
                                }}
                              >
                                {item.title}
                              </Typography>
                            </Box>
                          </Box>
                        </Fade>
                      </Slide>
                    );
                  })}
              </Grid>
            )}
            {data?.Home_page_data?.section_title_four_content.filter(
              (element, index) => (index - 2) % 3 === 0
            ).length > 0 && (
              <Grid item xs={12} md={6} lg={4}>
                {data?.Home_page_data?.section_title_four_content
                  .filter((element, index) => (index - 2) % 3 === 0)
                  .map((item, i) => {
                    const duration = (2 + i) * 1000;
                    return (
                      <Slide
                        key={i}
                        triggerOnce
                        direction="right"
                        duration={1000}
                        delay={duration}
                      >
                        <Fade triggerOnce duration={1500} delay={duration}>
                          <Box
                            key={i}
                            sx={{
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                                zIndex: -1,
                                background: `url(${item.image.url})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                opacity: item?.image_opacity != null ? `${item?.image_opacity}%` : "50%",
                                transition: "all 1s ease-in-out",
                              },
                              position: "relative",
                              width: "100%",
                              filter: "grayscale(1)",
                              mb: "2rem",
                              transition: "all 1s ease-in-out",
                              minHeight: `${height - 40}px`,
                              "&:hover": {
                                filter: "grayscale(0)",
                                "&::before": {
                                  opacity: "100%",
                                },
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: "100%",
                                minHeight: `${height - 40}px`,
                                backgroundColor: "rgba(0,0,0,0.5)",
                                px: "30px",
                                py: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 1s ease-in-out",
                                "&:hover": {
                                  backgroundColor: "transparent",
                                },
                              }}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontSize: "12px",
                                  letterSpacing: "8px",
                                  color: "#fff",
                                  fontWeight: "700",
                                  textTransform: "uppercase",
                                  textAlign: "center",
                                }}
                              >
                                {item.title}
                              </Typography>
                            </Box>
                          </Box>
                        </Fade>
                      </Slide>
                    );
                  })}
              </Grid>
            )}
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default AboutSectionFour;
