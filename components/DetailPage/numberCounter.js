// "use client";
import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function NumberCounter({ data }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <Container maxWidth="xl" style={{ marginTop: "4rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "1px",
          "@media only screen and (max-width:650px)": {
            flexDirection: "column",
            gap: "50px",
          },
        }}
      >
        {data !== null && data?.statistics_1 ? (
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: "header.text",
                fontSize: "45px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontWeight: "700",
                height: "55px",
              }}
            >
              {data?.statistics_1?.prefix}
              <CountUp
                start={focus ? 0 : null}
                end={data?.statistics_1?.value}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      } else {
                        setFocus(false);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span style={{ color: "#c61d20" }}>
                {data?.statistics_1?.post_fix}
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
              {data?.statistics_1?.label}
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: "header.text",
                fontSize: "45px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontWeight: "700",
                height: "55px",
              }}
            >
              <CountUp
                start={focus ? 0 : null}
                end={150}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }else{
                        setFocus(false)
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span style={{ color: "#c61d20" }}>M</span>
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
              IMPRESSIONS
            </Typography>
          </Box>
        )}
        {data !== null && data?.statistics_2 ? (
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: "header.text",
                fontSize: "45px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontWeight: "700",
                height: "55px",
              }}
            >
              {data?.statistics_2?.prefix}
              <CountUp
                start={focus ? 0 : null}
                end={data?.statistics_2?.value}
                decimals={1}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span style={{ color: "#c61d20" }}>
                {data?.statistics_2?.post_fix}
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
              {data?.statistics_2?.label}
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: "header.text",
                fontSize: "45px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontWeight: "700",
                height: "55px",
              }}
            >
              <CountUp
                start={focus ? 0 : null}
                end={12.2}
                decimals={1}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      } else {
                        setFocus(false);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span style={{ color: "#c61d20" }}>M</span>
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
              VIEWS
            </Typography>
          </Box>
        )}
        {data !== null && data?.statistics_3 ? (
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: "header.text",
                fontSize: "45px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontWeight: "700",
                height: "55px",
              }}
            >
              {data?.statistics_3?.prefix}
              <CountUp
                start={focus ? 0 : null}
                end={data?.statistics_3?.value}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span style={{ color: "#c61d20" }}>
                {data?.statistics_3?.post_fix}
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
              {data?.statistics_3?.label}
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: "header.text",
                fontSize: "45px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontWeight: "700",
                height: "55px",
              }}
            >
              $
              <CountUp
                start={focus ? 0 : null}
                end={72}
                duration={4}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <span style={{ color: "#c61d20" }}>M</span>
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
              EARNED MEDIA
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          mt: 7,
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          "@media only screen and (max-width:650px)": {
            width: "100%",
          },
        }}
      >
        {data?.project_post_media?.type === "video" ? (
          <video
            autoPlay
            muted
            controls
            loop
            preload="auto"
            playsInline
            style={{
              width: "100%",
              height: "auto",
              margin: "unset",
              objectFit: "cover",
            }}
          >
            <source
              src={
                data !== null && data?.project_post_media
                  ? data?.project_post_media?.url
                  : "/videos/home-hero-video.mp4"
              }
            />
          </video>
        ) : (
          <Image
            alt="Random image"
            src={
              data !== null && data?.project_post_media
                ? data?.project_post_media?.url
                : "/images/virginDance.png"
            }
            width={640}
            height={480}
            style={{
              width: "100%",
              margin: "unset",
              height: "auto",
              objectFit: "contain",
            }}
          />
        )}
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: "16px",
          letterSpacing: "8px",
          color: "header.text",
          fontWeight: "700",
          textTransform: "uppercase",
          paddingBottom: "3rem",
          mt: 7,
        }}
      >
        Press
      </Typography>
      <Box
        sx={{
          width: "100%",
          "@media only screen and (max-width:900px)": {
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        {data !== null && data?.project_post_press_item?.length > 0 ? (
          <Grid
            container
            rowSpacing={10}
            columnSpacing={{ xs: 1, sm: 2, md: 15 }}
          >
            {data?.project_post_press_item?.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                md={4}
                sx={{
                  "& a": {
                    "& img": { transition: "all 0.5s ease-in-out" },
                    "&:hover": { "& img": { transform: "scale(1.1)" } },
                  },
                }}
              >
                <a
                  key={index}
                  href={item.project_post_item_url}
                  target="_blank"
                  style={{ width: "100%" }}
                >
                  <Image
                    alt="Random image"
                    src={item?.project_post_?.url}
                    width={640}
                    height={480}
                    style={{
                      width: "100%",
                      margin: "unset",
                      height: "auto",
                    }}
                  />
                </a>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            container
            rowSpacing={10}
            columnSpacing={{ xs: 1, sm: 2, md: 15 }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                "& a": {
                  "& img": { transition: "all 0.5s ease-in-out" },
                  "&:hover": { "& img": { transform: "scale(1.1)" } },
                },
              }}
            >
              <a
                href="https://www.google.com/"
                target="_blank"
                style={{ width: "100%", transform: "scale(1.1)" }}
              >
                <Image
                  alt="Random image"
                  src="/images/pressA.png"
                  width={640}
                  height={480}
                  style={{
                    width: "100%",
                    margin: "unset",
                    height: "auto",
                  }}
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={12} md={4}
            sx={{
              "& a": {
                "& img": { transition: "all 0.5s ease-in-out" },
                "&:hover": { "& img": { transform: "scale(1.1)" } },
              },
            }}
            >
              <a
                href="https://www.google.com/"
                target="_blank"
                style={{ width: "100%" }}
              >
                <Image
                  alt="Random image"
                  src="/images/pressB.png"
                  width={640}
                  height={480}
                  style={{
                    width: "100%",
                    margin: "unset",
                    height: "auto",
                  }}
                />
              </a>
            </Grid>
            <Grid item xs={12} sm={12} md={4}
              sx={{
                "& a": {
                  "& img": { transition: "all 0.5s ease-in-out" },
                  "&:hover": { "& img": { transform: "scale(1.1)" } },
                },
              }}
            >
              <a
                href="https://www.google.com/"
                target="_blank"
                style={{ width: "100%" }}
              
              >
                <Image
                  alt="Random image"
                  src="/images/pressC.png"
                  width={640}
                  height={480}
                  style={{
                    width: "100%",
                    margin: "unset",
                    height: "auto",
                  }}
                />
              </a>
            </Grid>
          </Grid>
        )}
      </Box>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={{ xs: 1, sm: 2, md: 15 }}
        sx={{ mt: 7, mb: 4 }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              letterSpacing: "8px",
              color: "header.text",
              fontWeight: "700",
              paddingBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            The Problem
          </Typography>
          {data !== null && data?.project_post_problem_content ? (
            <div
              style={{
                fontSize: "14px",
                color: "#B8B8B8",
                paddingBottom: "3rem",
              }}
              dangerouslySetInnerHTML={{
                __html: data.project_post_problem_content,
              }}
            ></div>
          ) : (
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                color: "#B8B8B8",
                paddingBottom: "3rem",
              }}
            >
              When Virgin America needed a new safety video we went through the
              challenges and problems of the business first. They wanted to
              engage with their Elevate users who were not active, while
              creating noise through the boring part of airline travel... THE
              SAFETY BRIEF! With no media budget, the campaign would have to
              live solely on earned media, building brand affection to garner
              more sales.
            </Typography>
          )}
          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              letterSpacing: "8px",
              color: "header.text",
              fontWeight: "700",
              paddingBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            The Solution
          </Typography>
          {data !== null && data?.project_post_solution_content ? (
            <div
              style={{
                fontSize: "14px",
                color: "#B8B8B8",
                paddingBottom: "3rem",
              }}
              dangerouslySetInnerHTML={{
                __html: data.project_post_solution_content,
              }}
            ></div>
          ) : (
            <>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  color: "#B8B8B8",
                  paddingBottom: "1rem",
                }}
              >
                Virgin America had mandates for several small “viral” projects
                running at the same time, each with budgets of less than $100k.
                We suggested combining the multiple projects into one quality
                campaign that achieved the same goals.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "14px",
                  color: "#B8B8B8",
                }}
              >
                Given their brand and customer demographic, we knew that music
                and dance would resonate with their customers, and set Virgin
                apart from their competitors. The Stafford team, which at the
                time was integrated into the Virgin Produced team, collectively
                created the Virgin America Safety Dance, a music video which
                doubled as a major advertising campaign as well as the inflight
                safety video. We strategically cast dancers with strong social
                media followings and influencer networks. We achieved our goal
                by generating enough social buzz to trigger a large-scale earned
                media syndication.
              </Typography>
            </>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          {data !== null && data?.solution_and_problem_image ? (
            <Image
              alt="Random image"
              src={data?.solution_and_problem_image.url}
              width={640}
              height={480}
              style={{
                width: "100%",
                margin: "unset",
                height: "auto",
              }}
            />
          ) : (
            <Image
              alt="Random image"
              src="/images/detailTrain.png"
              width={640}
              height={480}
              style={{
                width: "100%",
                margin: "unset",
                height: "auto",
              }}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
