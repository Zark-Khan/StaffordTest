"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import SuccessModal from "./modal";

function ContactMain() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    companyName: "",
    website: ""
  };
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(true);
  const validateFormData = () => {
    if (
      formData.firstName === "" ||
      formData.firstName === null ||
      formData.lastName === "" ||
      formData.lastName === null ||
      formData.message === "" ||
      formData.message === null ||
      formData.companyName === "" ||
      formData.companyName === null ||
      formData.website === "" ||
      formData.website === null
    ) {
      setValidated(false);
      return false;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      setValidated(false);
      return false;
    }
    setValidated(true);
    return true;
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = () => {
    if (validateFormData()) {
      setIsSubmitting(true);
      let tempData = {
        "first-name": formData.firstName,
        "last-name": formData.lastName,
        "email": formData.email,
        "message": formData.message,
        "company-name": formData.companyName,
        "website": formData.website
      };
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}/wp-json/stafford/v1/email-submit`,
          tempData
        )
        .then((response) => {
          setIsSubmitting(false);
          handleOpen();
          setFormData(initialState);
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error("Error:", error);
        });
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          sx={{
            paddingTop: "5rem",
            color: "header.text",
            fontSize: "35px",
            letterSpacing: "30px",
            lineHeight: "50px",
            textTransform: "uppercase",
            fontWeight: "700",
            "@media only screen and (max-width:800px)": {
              paddingTop: "2.5rem",
              fontSize: "25px",
              letterSpacing: "20px",
              lineHeight: "60px",
            },
            "@media only screen and (max-width:450px)": {
              paddingTop: "2rem",
              fontSize: "19px",
              letterSpacing: "12px",
              lineHeight: "45px",
              wordBreak: "break-all",
            },
          }}
        >
          <p style={{ color: "#c61d20", fontWeight: "700", wordBreak: "normal", whiteSpace: "normal", overflowWrap: "break-word"  }}>
            YOUR MESSAGE MATTERS
          </p>
        </Typography>
        <Typography
          variant="h2"
          sx={{
            paddingTop: "2rem",
            color: "header.text",
            fontSize: "16px",
            letterSpacing: "11px",
            textTransform: "uppercase",
            fontWeight: "700",
            lineHeight: "28px",
            textTransform: "uppercase",
            "@media only screen and (max-width:450px)": {
              fontSize: "12px",
              letterSpacing: "9px",
              lineHeight: "28px",
            },
          }}
        >
          PLEASE COMPLETE THIS SHORT FORM FOR MORE INFORMATION ON HOW STAFFORD CAN AMPLIFY YOUR BRAND.
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "3rem", paddingBottom: "5rem" }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              placeholder="FIRST NAME"
              id="fullWidth"
              sx={{
                backgroundColor: "#fff",
                "& fieldset": {
                  borderColor: "#fff !important",
                  borderRadius: "unset !important",
                },
              }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                },
              }}
              value={formData.firstName}
              onChange={(e) => {
                const dupObj = { ...formData };
                dupObj.firstName = e.target.value;
                setFormData(dupObj);
              }}
            />

            {!validated &&
              (formData.firstName === null || formData.firstName === "") && (
                <div
                  style={{ color: "red", fontSize: "small", marginTop: "5px" }}
                >
                  Enter First Name
                </div>
              )}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              placeholder="LAST NAME"
              id="fullWidth"
              sx={{
                backgroundColor: "#fff",
                // "& fieldset": { },
                "& fieldset": {
                  borderColor: "#fff !important",
                  borderRadius: "unset !important",
                },
              }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                },
              }}
              value={formData.lastName}
              onChange={(e) => {
                const dupObj = { ...formData };
                dupObj.lastName = e.target.value;
                setFormData(dupObj);
              }}
            />

            {!validated &&
              (formData.lastName === null || formData.lastName === "") && (
                <div
                  style={{ color: "red", fontSize: "small", marginTop: "5px" }}
                >
                  Enter Last Name
                </div>
              )}
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              placeholder="EMAIL"
              id="fullWidth"
              sx={{
                backgroundColor: "#fff",
                "& fieldset": {
                  borderColor: "#fff !important",
                  borderRadius: "unset !important",
                },
              }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                },
              }}
              value={formData.email}
              onChange={(e) => {
                const dupObj = { ...formData };
                dupObj.email = e.target.value;
                setFormData(dupObj);
              }}
            />

            {!validated &&
              !formData.email.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
              ) && (
                <div
                  style={{ color: "red", fontSize: "small", marginTop: "5px" }}
                >
                  Enter An Email Address
                </div>
              )}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              placeholder="COMPANY NAME"
              id="fullWidth"
              sx={{
                backgroundColor: "#fff",
                "& fieldset": {
                  borderColor: "#fff !important",
                  borderRadius: "unset !important",
                },
              }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                },
              }}
              value={formData.companyName}
              onChange={(e) => {
                const dupObj = { ...formData };
                dupObj.companyName = e.target.value;
                setFormData(dupObj);
              }}
            />

            {!validated &&
              (formData.companyName === null || formData.companyName === "") && (
                <div
                  style={{ color: "red", fontSize: "small", marginTop: "5px" }}
                >
                  Enter Company Name
                </div>
              )}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              placeholder="WEBSITE"
              id="fullWidth"
              sx={{
                backgroundColor: "#fff",
                // "& fieldset": { },
                "& fieldset": {
                  borderColor: "#fff !important",
                  borderRadius: "unset !important",
                },
              }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                },
              }}
              value={formData.website}
              onChange={(e) => {
                const dupObj = { ...formData };
                dupObj.website = e.target.value;
                setFormData(dupObj);
              }}
            />

            {!validated &&
              (formData.website === null || formData.website === "") && (
                <div
                  style={{ color: "red", fontSize: "small", marginTop: "5px" }}
                >
                  Enter Website
                </div>
              )}
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              rows={5}
              multiline
              fullWidth
              placeholder="MESSAGE"
              id="fullWidth"
              sx={{
                backgroundColor: "#fff",
                "& fieldset": {
                  borderColor: "#fff !important",
                  borderRadius: "unset !important",
                },
              }}
              inputProps={{
                sx: {
                  "&::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                },
              }}
              value={formData.message}
              onChange={(e) => {
                const dupObj = { ...formData };
                dupObj.message = e.target.value;
                setFormData(dupObj);
              }}
            />
            {!validated &&
              (formData.message === null || formData.message === "") && (
                <div
                  style={{ color: "red", fontSize: "small", marginTop: "5px" }}
                >
                  Write A Message
                </div>
              )}
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#c61d20",
                borderRadius: "24px",
                "&:hover": { backgroundColor: "#c61d20" },
                float: "right",
                px: 10,
                fontWeight: "400",
              }}
              size="large"
              variant="contained"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
      <SuccessModal open={open} handleClose={handleClose} />
    </Box>
  );
}

export default ContactMain;
