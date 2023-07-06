import React  from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";
import {  IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";


    const useStyles = makeStyles((t) => ({
      sideBar: {
        position: "absolute",
        backgroundColor: "#10265ddc !important",
        boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.5)",
        height: "fit-content",
        color: "white",
        padding: "2rem" ,
        zIndex: 99,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "110%",
      },
      navMenu: {
        fontSize: "2.5rem",
        color: "white",
        cursor: "pointer",
        transform: "translateY(-10px)",
        transition: "color 0.3s",
        "&:hover": {
          color: "#32CD30",
        },
        [t.breakpoints.down("sm")]: {
          fontSize: "2.5rem",
        },
        [t.breakpoints.down("xs")]: {
          fontSize: "2rem",
        },
      },
      MuiDrawer: {
        padding: ".7em 1.8em",
        width: "14em",

        fontStyle: " normal",
        fontWeight: " normal",
        fontSize: " 24px",
        background: "#10265ddc !important",
        overflow: "hidden",
        borderTopRightRadius: "40px",
        borderBottomRightRadius: "40px",
        [t.breakpoints.down("sm")]: {
          width: "12em",
        },
      },
      closebtn: {
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        color: "white",
        position: "absolute",
        backgroundColor: "#10265ddc",
        borderRadius: "50%",
        padding: ".7rem",
        boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.5) !important",
        right: 20,
        top: 20,
        transition: "color 0.2s",
        "&:hover": {
          backgroundColor: "#32CD30",
        },
        [t.breakpoints.down("sm")]: {
          right: 15,
          top: 8,
        },
      },
      closebtnIcon: {
        fontSize: "2rem",
        "&:hover": {
          color: "#F2F2F2",
          transition: "color 0.2s",
        },
      },
      drawerItem: {
        margin: "2rem auto",
        borderRadius: "78.8418px",
        background: "#152b61",
        color: "white",
        width: "85%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "0 30px",
        boxSizing: "border-box",
        border: "3px solid",
        borderColor: "white",
        transition: "background-color 0.2s, color 0.2s",
        "&:hover": {
          background: "#10265ddc",
          color: "#32CD30",
          border: "none ",
          boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.5)",
        },
        [t.breakpoints.down("sm")]: {
          width: "100%",
          padding: "0 25px",
          height: "55px",
        },
      },
      drawerLinks: {
        fontFamily: "var(--primaryFont)",
        width: "50%",
        fontSize: "1.3rem",
        fontWeight: 600,
        [t.breakpoints.down("sm")]: {
          fontSize: "1.125rem",
        },
      },
      drawerIcon: {
        fontSize: "1.6rem",
        [t.breakpoints.down("sm")]: {
          fontSize: "1.385rem",
        },
      },
    }));

const Sidebar = ({ isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar} >
      <Drawer
        variant="temporary"
        classes={{ paper: classes.MuiDrawer }}
        className="drawer"
        disableScrollLock={true}
        open={isOpen}
        onClose={onClose}
      >
        <div className={classes.closebtn}>
          <CloseIcon
            className={classes.closebtnIcon}
            onClick={onClose}
            role="button"
            tabIndex="0"
            aria-label="Close"
          />
        </div>
        <br />

        <div>
          <div className="navLink--container">
            <Fade left>
              <NavLink to="/" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <IoHomeSharp className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Home</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#resume" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <HiDocumentText className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Resume</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#services" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <BsFillGearFill className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Services</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/about" smooth={true} spy={true} duration={2000}>
                <div className={classes.drawerItem}>
                  <FaUser className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>About</span>
                </div>
              </NavLink>
            </Fade>
            <Fade left>
              <NavLink to="/#blog" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <FaFolderOpen className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Blog</span>
                </div>
              </NavLink>
            </Fade>

            <Fade left>
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <div className={classes.drawerItem}>
                  <MdPhone className={classes.drawerIcon} />
                  <span className={classes.drawerLinks}>Contact</span>
                </div>
              </NavLink>
            </Fade>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
