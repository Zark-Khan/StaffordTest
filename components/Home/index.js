"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Services from "@/components/Home/services";
import Typed from "react-typed";
import Projects from "@/components/Home/projects";
import TrustedBy from "@/components/Home/trustedBy";
import VisibilitySensor from "react-visibility-sensor";
import AboutSectionOne from "./aboutSectionOne";
import AboutSectionTwo from "./aboutSectionTwo";
import AboutSectionThree from "./aboutSectionThree";
import AboutSectionFour from "./aboutSectionFour";
import Image from "next/image";

function HomePage({ data }) {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [aboutHeading, setAboutHeading] = React.useState(null);
  const [videoUrl, setVideoUrl] = React.useState(null);
  React.useEffect(() => {
    if (data !== null && data?.Home_page_data?.home_page_about_section_title) {
      const title =
        data?.Home_page_data?.home_page_about_section_title?.split(" ");
      setAboutHeading(title[title.length - 1]);
    }
  }, [data]);

  React.useEffect(() => {
    if (window) {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  React.useEffect(() => {
    if(windowWidth != 0 && data !== null) {
      if(windowWidth < 500) {
        if(data?.Home_page_data?.home_page_hero_background_video_mobile) {
          setVideoUrl(data?.Home_page_data?.home_page_hero_background_video_mobile?.url);
        } else {
          if(data?.Home_page_data?.home_page_hero_background_video) {
            setVideoUrl(data?.Home_page_data?.home_page_hero_background_video?.url);
          } else {
            setVideoUrl("/videos/home-hero-video.mp4");
          }
        }
      } else {
        if(data?.Home_page_data?.home_page_hero_background_video) {
          setVideoUrl(data?.Home_page_data?.home_page_hero_background_video?.url);
        } else {
          setVideoUrl("/videos/home-hero-video.mp4");
        }
      }
    }
  }, [windowWidth, data]);

  const [focus, setFocus] = React.useState(false);
  console.log("check", data?.Home_page_data);
  
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
      {data !== null &&
        data?.Home_page_data?.home_page_hero_background_video?.type === "video" ? (
          <>
        <video
          key={videoUrl}
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100vh",
            margin: "unset",
            objectFit: "cover",
          }}
          preload="auto"
          playsInline
        >
          <source
            src={videoUrl}
          />
        </video>
        </>
        ) : (
          <Image
            alt="Random image"
            src={
              data !== null && windowWidth < 500
                ? data?.Home_page_data?.home_page_hero_background_video_mobile?.url
                : data?.Home_page_data?.home_page_hero_background_video?.url
            }
            width={640}
            height={480}
            style={{
              width: "100%",
              height: "100vh",
              margin: "unset",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
        <Box
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
                paddingTop: "3rem",
                color: "header.text",
                fontSize: "35px",
                letterSpacing: "30px",
                lineHeight: "80px",
                textTransform: "uppercase",
                fontWeight: "700",
                "@media only screen and (max-width:800px)": {
                  fontSize: "28px",
                  letterSpacing: "23px",
                  lineHeight: "60px",
                },
                "@media only screen and (max-width:655px)": {
                  fontSize: "25px",
                  letterSpacing: "20px",
                  lineHeight: "55px",
                },
                "@media only screen and (max-width:590px)": {
                  fontSize: "22px",
                  letterSpacing: "16px",
                  lineHeight: "50px",
                },
                "@media only screen and (max-width:455px)": {
                  fontSize: "16px",
                  letterSpacing: "9px",
                  lineHeight: "45px",
                },
              }}
            >
              {data !== null && data?.Home_page_data.home_page_hero_text
                ? data?.Home_page_data.home_page_hero_text
                : null}

              <br />

              {data !== null && data?.Home_page_data?.hero_pointer_cycle_text.length > 0 && (
                <span
                  style={{
                    color: "#c61d20",
                    fontWeight: "700",
                    // wordBreak: "break-all",
                  }}
                >
                  <Typed
                    strings={
                      data !== null &&
                      data?.Home_page_data?.hero_pointer_cycle_text.length > 0
                        ? data.Home_page_data.hero_pointer_cycle_text.map(
                            (item) => item.hero_pointer_cycle_text + "."
                          )
                        : ["actionable.", "relatable.", "understandable."]
                    }
                    typeSpeed={80}
                    loop
                  />
                </span>
              )}
            </Typography>
          </Container>
        </Box>
      </Box>
      <Services data={data} />

      <Container maxWidth="xl">
        <Box
          sx={{
            marginTop: "5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              "@media only screen and (max-width:800px)": {
                width: "95%",
              },
            }}
          >
            {/* {aboutHeading !== null ? (
              <VisibilitySensor
                onChange={(isVisible) => {
                  if (isVisible) {
                    setFocus(true);
                  } else {
                    setFocus(false);
                  }
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    letterSpacing: "8px",
                    color: "header.text",
                    fontWeight: "700",
                    paddingBottom: "3rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  {data?.Home_page_data?.home_page_about_section_title
                    ?.split(" ")
                    .slice(
                      0,
                      data?.Home_page_data?.home_page_about_section_title?.split(
                        " "
                      ).length - 1
                    )
                    .join(" ")}{" "}
                  <span
                    style={{
                      color: focus ? "#c61d20" : "#fff",
                      transition: "color 0.8s",
                    }}
                  >
                    {aboutHeading.slice(0, 2)}
                  </span>
                  {aboutHeading.slice(2, 3)}
                  <span
                    style={{
                      color: focus ? "#c61d20" : "#fff",
                      transition: "color 0.8s",
                    }}
                  >
                    {aboutHeading.slice(3, 4)}
                  </span>
                  {aboutHeading.slice(4, 6)}
                  <span
                    style={{
                      color: focus ? "#c61d20" : "#fff",
                      transition: "color 0.8s",
                    }}
                  >
                    {aboutHeading.slice(6, 8)}
                  </span>
                  {aboutHeading.slice(8, 9)}
                </Typography>
              </VisibilitySensor>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  letterSpacing: "8px",
                  color: "header.text",
                  fontWeight: "700",
                  paddingBottom: "3rem",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Who is <span style={{ color: "#c61d20" }}>St</span>a
                <span style={{ color: "#c61d20" }}>f</span>fo
                <span style={{ color: "#c61d20" }}>rd</span>?
              </Typography>
            )} */}
            <AboutSectionOne data={data} />
          </Box>
        </Box>
        {/* <AboutSectionTwo data={data} /> */}
        {/* <AboutSectionThree data={data} /> */}
        <AboutSectionFour data={data} />
      </Container>

      <Projects data={data} />
      <TrustedBy data={data} />
    </Box>
  );
}
export default HomePage;
