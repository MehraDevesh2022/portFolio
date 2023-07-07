import React from "react";
import { socialsData } from "../contact/SocialData";
import { makeStyles } from "@material-ui/core/styles";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import {SiHashnode} from "react-icons/si"
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#152b61 !important",
    color: "white",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "2rem",
       boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.6)",
    padding: "2rem 0",
  },
  socialmedia: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },

  socialIcon: {
    margin: "0 0.5rem",
    fontSize: "1.5rem",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.socialmedia}>
        {socialsData.whatsapp && (
          <a
            href={socialsData.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaWhatsapp aria-label="WhatsApp" style={{ color: "#25D366" }} />
          </a>
        )}
        {socialsData.twitter && (
          <a
            href={socialsData.twitter}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaTwitter aria-label="Twitter" style={{ color: "#00acee " }} />
          </a>
        )}
        {socialsData.github && (
          <a
            href={socialsData.github}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaGithub aria-label="GitHub" style={{ color: "##1d1a1a" }} />
          </a>
        )}
        {socialsData.linkedIn && (
          <a
            href={socialsData.linkedIn}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaLinkedinIn aria-label="LinkedIn" style={{ color: "#0C63BC" }} />
          </a>
        )}
        {socialsData.instagram && (
          <a
            href={socialsData.instagram}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <FaInstagram aria-label="Instagram" style={{ color: "#d62976 " }} />
          </a>
        )}
        {socialsData.medium && (
          <a
            href={socialsData.medium}
            target="_blank"
            rel="noreferrer"
            className={classes.socialIcon}
          >
            <SiHashnode aria-label="hashnode" style={{ color: "#2962FF" }} />
          </a>
        )}
      </div>
      <div
        className={`${classes.footerText} text-sm text-gray-500 sm:text-center dark:text-gray-400 footer-left-text`}
      >
        Developed by Devesh Mehra
      </div>
    </footer>
  );
};

export default Footer;
