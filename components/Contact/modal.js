"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: "-10px 5px 5px rgba(0, 0, 0, 0.45)",
  px: 3,
  py: 1,
  "@media only screen and (max-width:800px)": {        
    width:"90%"
},

};

export default function SuccessModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={true}
      >
        <Box sx={style}>
          <Box
            onClick={() => handleClose()}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "#000",
              fontWeight: "bold",
              cursor:"pointer"
            }}
          >
            X
          </Box>
          <Box sx={{ py: 10 }}>
            <Typography
              variant="h1"
              sx={{
                color: "black",
                fontSize: "15px",
                letterSpacing: "10px",
                lineHeight: "20px",
                textTransform: "uppercase",
                fontWeight: "600",
                textAlign: "center",
                // "@media only screen and (max-width:800px)": {
                //   
                //   fontSize: "13px",
                //   letterSpacing: "7px",
                //   lineHeight: "15px",
                // },
                // "@media only screen and (max-width:450px)": {
                //   
                //   fontSize: "12px",
                //   letterSpacing: "6px",
                //   lineHeight: "14px",
                //   wordBreak: "break-all",
                // },
              }}
            >
              Thank you for your message.
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: "15px",
                letterSpacing: "10px",
                lineHeight: "20px",
                textTransform: "uppercase",
                fontWeight: "600",
                textAlign: "center",
                mt: 2,
              }}
            >
              We will get back to you shortly.
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
