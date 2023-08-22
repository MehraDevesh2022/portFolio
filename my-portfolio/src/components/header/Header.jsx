import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Sidebar from "./SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../assets/logo2.gif"; 
import { Link } from "react-router-dom";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { SiHashnode } from "react-icons/si";

const pages = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Projects", href: "/projects" },
  { text: "Contact", href: "/contact" },
  { text: "Blogs", href: "https://iam-dev.hashnode.dev/" },
];
const pageIcons = [
  HomeRoundedIcon,
  FaceRoundedIcon,
  FolderSharedRoundedIcon,
  CallRoundedIcon,
  SiHashnode,
];

const Header = () => {


 const [sideMenuOpen, setSideMenuOpen] = useState(false);

 const handleToggleSideMenu = () => {
   setSideMenuOpen(!sideMenuOpen);
 };

 const handleCloseSideMenu = () => {
   setSideMenuOpen(false);
 };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#152b61",
        boxShadow:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/">
            <img src={logo} alt="logo" className="logo-img" />
          </a>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".2rem",
              color: "inherit",
              fontSize: "1.5rem",
              textDecoration: "none",
              "&:hover": {
                color: "#32cd30",
              },
            }}
          >
            Devesh Mehra
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleSideMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {sideMenuOpen && (
              <Sidebar isOpen={sideMenuOpen} onClose={handleCloseSideMenu} />
            )}
          </Box>
          <a href="/"
          
          >
            <img src={logo} alt="logo" className="logo-img2" />
          </a>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: ".1rem",
              color: "inherit",
              fontSize: "1.5rem",
              textDecoration: "none",
              "&:hover": {
                color: "#32cd30",
              },
            }}
          >
            Devesh Mehra
          </Typography>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, index) => {
              const Icon = pageIcons[index];
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Link
                    to={page.href}
                    style={{ textDecoration: "none", color: "inherit" }}
                    target={page.href.includes("http") ? "_blank" : "_self"}
                  >
                    <Button
                      className="header-buttons"
                      key={page}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "flex",
                        fontFamily: "poppins",
                        fontSize: 12,
                        alignItems: "center",
                        marginRight: "1.5rem",
                      }}
                    >
                      <Icon style={{ marginRight: "0.9rem" }} />

                      <Typography color="white" style={{ fontSize: "16px" }}>
                        {page.text}
                      </Typography>
                    </Button>
                  </Link>
                </div>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
