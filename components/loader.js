import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate({ classes, circleShow }) {
  return (
    <Box
      className={classes}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "100vh",
        width: "100vw",
        zIndex: "999999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {!circleShow && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress style={{ color: "red" }} />
        </Box>
      )}
    </Box>
  );
}
