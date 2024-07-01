import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

function AboutSectionOne({ data }) {
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          fontSize: "16px",
          letterSpacing: "8px",
          color: "#c61d20",
          fontWeight: "700",
          paddingBottom: "3rem",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {data?.Home_page_data?.section_title_one}
      </Typography>
      <Slide direction="up" duration={1000}>
        <Fade direction="up" duration={1500}>
          <Grid
            container
            spacing={{ xs: 4, sm: 5, md: 6 }}
            sx={{ justifyContent: "center" }}
          >
            {!!data?.Home_page_data?.press_section?.length &&
              data?.Home_page_data?.press_section?.map((item, index) => (
                <Grid key={index} item xs={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "& img": {
                        width: "100% !important",
                        height: "auto !important",
                      },
                    }}
                  >
                    <img
                      alt={item?.press_image?.alt}
                      src={item?.press_image?.url}
                      width={640}
                      height={400}
                    />
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Fade>
      </Slide>
    </>
  );
}

export default AboutSectionOne;
