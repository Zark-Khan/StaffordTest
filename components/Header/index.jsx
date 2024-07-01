import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Message_data } from "@/context/context";
import { useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { pushRouter } from "@/util/routingPush";

export const HeaderMain = ({ setMode, setIsPageLoaded }) => {
  const existingPath = usePathname();
  const pages = ["SERVICES", "WORK", "CONTACT"];
  const router = useRouter();
  const { theme, setTheme } = useContext(Message_data);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    if (page) {
      handleClick(page);
    }
    setAnchorElNav(null);
  };
  useEffect(() => {
    setMode(theme);
  }, [theme]);
  const handleClick = (page) => {
    if (page === "Home" && existingPath !== "/") {
      setIsPageLoaded(false);
      pushRouter(() => router.push("/"));
    } else if (page === "SERVICES" && existingPath !== "/services") {
      setIsPageLoaded(false);
      pushRouter(() => router.push("/services"));
    } else if (page === "WORK" && existingPath !== "/work") {
      setIsPageLoaded(false);
      pushRouter(() => router.push("/work"));
    } else if (page === "CONTACT" && existingPath !== "/contact") {
      setIsPageLoaded(false);
      pushRouter(() => router.push("/contact"));
    }
  };
  const CustomMenuIcon = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
         d="M3 11H21"
        stroke="white"
        strokeWidth="1.35"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
      <path
        d="M3 7H21"
        stroke="white"
        strokeWidth="1.35"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
      <path
        d="M3 15H21"
        stroke="white"
        strokeWidth="1.35"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <Box
      sx={{
        "& .MuiAppBar-colorPrimary": {
          bgcolor: "background.paper",
          position: "relative",
          transition: "0.5s",
        },
      }}
    >
      <AppBar sx={{ boxShadow: "none" }}>
        <Container
          maxWidth="xl"
          sx={{
            "& img": {
              width: "108px",
              height: "107px",
              cursor: "pointer",
              "@media only screen and (max-width:800px)": {
                width: "92px",
                height: "91px",
              },
            },
          }}
        >
          <Toolbar disableGutters>
            <img
              onClick={() => handleClick("Home")}
              alt="Random image"
              src="/images/logos.png"
              // width={108}
              // height={107}
              // style={{
              //   width: "108px",
              //   height: "107px",
              //   cursor: "pointer",
              // }}
            />
            <Box
              sx={{
                flexGrow: 2,
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                id="demo-positioned-button"
                aria-controls={
                  Boolean(anchorElNav) ? "demo-positioned-menu" : undefined
                }
                aria-haspopup="true"
                aria-expanded={Boolean(anchorElNav) ? "true" : undefined}
              >
                {/* <MenuIcon sx={{ fontSize: "60px", color: "white",
                  "& path": {
                    strokeWidth: "0.7",
                  },
                 }} /> */}
                <CustomMenuIcon />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                MenuListProps={{
                  "aria-labelledby": "lock-button",
                  role: "listbox",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "@media only screen and (max-width:800px)": {
                    top:"-8px",
                  }
                }}
                PaperProps={{
                  elevation: 0,
                  style: {
                    width: "100%",
                  },
                  sx: {
                    overflow: "visible",
                    borderRadius: "0px !important",
                    mt: 1.4,
                    maxWidth: "100% !important",
                    width: "100% !important",
                    left: "0px !important ",
                    pb:8,
                    "@media only screen and (max-width:900px)": {
                      pb:9,
                    },
                    "@media only screen and (max-width:450px)": {
                      pb:5,
                    }
                  },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleCloseNavMenu(page);
                    }}
                    sx={{
                      display:"flex",
                      flexDirection:'column',
                      justifyContent:"flex-end",
                      pb:3,
                      // padding: "0",
                      "& p": {
                        fontSize: "13px",
                        fontWeight: "700",
                        color: existingPath?.includes(page.toLowerCase())
                          ? "#c61d20"
                          : "header.text",
                        whiteSpace: "nowrap",
                        letterSpacing: "16px",
                        transition: "0.3s",
                        textTransform: "uppercase",
                        width:"100%"
                      },
                    }}
                  >
                    <Typography textAlign="end">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                gap: 3,
              }}
            >
              {pages.map((page, index) => (
                <Box
                  key={page}
                  sx={{ display: "flex", gap: 1, alignItems: "center" }}
                >
                  <Button
                    onClick={() => {
                      handleCloseNavMenu();
                      handleClick(page);
                    }}
                    sx={{
                      // my: 2,
                      display: "block",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: existingPath?.includes(page.toLowerCase())
                        ? "#c61d20"
                        : "header.text",
                      whiteSpace: "nowrap",
                      letterSpacing: "12px",
                      transition: "0.3s",
                      textTransform: "uppercase",
                      "&:hover": {
                        color: "#c61d20",
                      },
                    }}
                  >
                    {page}
                  </Button>
                  {index < pages.length - 1 ? (
                    <span
                      key={index}
                      style={{
                        color: "#c61d20",
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      /
                    </span>
                  ) : null}
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
