import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

function TrustedBy({ data }) {
  const arrayToMap = [
    "SoCalGas",
    "VirginAmerica",
    "VirginAtlantic",
    "Poet",
    "VH1",
    "TMobile",
    "Subaru",
    "Didi",
    "MustaeV",
    "ESPN",
    "Clarus",
    "CocaCola",
  ];
  return (
    <Box
      sx={{
        marginTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            fontSize: "16px",
            letterSpacing: "8px",
            color: "#c61d20",
            textAlign:'center',
            fontWeight: "700",
            paddingBottom: "3rem",
            textTransform: "uppercase",
          }}
        >
          trusted by:
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
              "@media only screen and (max-width:800px)": {
                width: "85%",
              },
            }}
          >
            {data !== null && data?.Featured_clients_data?.length > 0 ? (
              <Grid
                container
                columnSpacing={15}
                rowSpacing={5}
                sx={{ overflow: "hidden" }}
              >
                {data?.Featured_clients_data?.map((item, index) => (
                  <Grid key={index} item xs={6} md={4} lg={3}>
                    <Slide direction="up" triggerOnce duration={1000}>
                      <Fade direction="up" triggerOnce duration={1500}>
                        <Image
                          alt={item?.Client_data?.additional_metadata?.image_alt_text}
                          src={item?.Client_data?.Client_logo_url}
                          width={640}
                          height={300}
                          style={{
                            width: "100%",
                            height: "auto",
                            filter: "grayscale(1)",
                          }}
                        />
                      </Fade>
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid container columnSpacing={15} rowSpacing={5}>
                {arrayToMap.map((item, index) => (
                  <Grid key={index} item xs={6} md={4} lg={3}>
                    <Image
                      alt="Random image"
                      src={`/images/${item}.svg`}
                      width={640}
                      height={300}
                      style={{
                        width: "100%",
                        height: "auto",
                        filter: "grayscale(1)",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TrustedBy;
