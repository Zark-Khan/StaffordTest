import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";

function AboutSectionTwo({ data }) {
  const [focus, setFocus] = React.useState([]);

  useEffect(() => {
    setFocus(
      data?.Home_page_data?.section_title_content_two.map((item) => false)
    );
  }, [data]);
  return (
    <Box sx={{ width: "100%", paddingTop: "7rem" }}>
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
        {data?.Home_page_data?.section_title_two}
      </Typography>
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
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
          {!!data?.Home_page_data?.section_title_content_two.length &&
            data?.Home_page_data?.section_title_content_two?.map(
              (item, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                  <VisibilitySensor
                    key={index}
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus((prevFocus) => {
                          const newFocus = [...prevFocus];
                          newFocus[index] = true;
                          return newFocus;
                        });
                      }
                    }}
                  >
                    <Box
                      className={`imageBoxAbout ${
                        focus[index] ? "imageBoxAnimation" : ""
                      }`}
                      sx={{
                        filter: "grayscale(1)",
                        position: "relative",
                        visibility: focus[index] ? "visible" : "hidden",
                        transition: "all 1s ease-in-out",
                        animationDelay: focus[index]
                          ? `${index * 300}ms`
                          : "0ms",
                        "@media only screen and (max-width:500px)": {
                          animationDelay: "0ms",
                        },
                        "&:hover": {
                          filter: "grayscale(0)",
                          "& img":{
                            opacity: "100%",
                          }
                        },
                        "& img":{
                          transition: "all 1s ease-in-out",
                          opacity: item?.image_opacity != null ? `${item.image_opacity}%` : '50%'
                        }
                      }}
                    >
                      <img
                        alt={item?.image?.alt}
                        src={item?.image?.url}
                        width={640}
                        height={250}
                      />
                      <Box
                        sx={{
                          backgroundColor: "rgba(0,0,0,0.5)",
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
                            backgroundColor: "transparent",
                            "& p": {
                              // color: "#c61d20 !important",
                              fontWeight: "700",
                            },
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            textAlign: "center",
                            width: "70%",
                            fontSize: "14px",
                            letterSpacing: "8px",
                            color: "#fff",
                            fontWeight: "700",
                            textTransform: "uppercase",
                          }}
                        >
                          {item?.title}
                        </Typography>
                      </Box>
                    </Box>
                  </VisibilitySensor>
                </Grid>
              )
            )}
        </Grid>
      </Box>
    </Box>
  );
}

export default AboutSectionTwo;
