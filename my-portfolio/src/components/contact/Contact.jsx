
import React, { useState } from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import isEmail from "validator/lib/isEmail";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFreeCodeCamp,
  FaHackerrank,
  FaWhatsapp,
} from "react-icons/fa";
import { SiLeetcode, SiHashnode } from "react-icons/si";

import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import contactsGreen from "../../assets/contactsGreen.svg";


import { socialsData } from "./SocialData";
import { contactsData } from "./ContactData";
import "./Contacts.css";
import emailjs from "emailjs-com";
import { PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID } from "../../../../SECURE.JS";

  const useStyles = makeStyles((t) => ({
    input: {
      border: `4px solid white`,
      backgroundColor: "#152b61",

      color: `white`,

      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid #32CD30`,
      },
    },
    message: {
      border: `4px solid white`,
      backgroundColor: "#152b61",
      color: `white`,
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid #32CD30`,
      },
    },
    label: {
      backgroundColor: "#152b61",
      color: `#32CD30`,
      fontWeight: 600,
      fontSize: "1rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "flex",
      alignItems: "flex-start",
      width: "fit-content",
      justifyContent: "center",
    },
    socialIcon: {
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "21px",

      backgroundColor: "#10265ddc",
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
      color: `white`,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
        border: `4px solid #f2f2f2`,
        backgroundColor: "#f2f2f2",
        color: `white`,
      },
    },
    freecodecamp: {
      "&:hover": {
        color: "black !important",
      },
    },
    detailsIcon: {
      border: `4px solid #10265ddc`,
      backgroundColor: "#10265ddc",
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
      color: `white`,
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "23px",
      transition: "250ms ease-in-out",
      flexShrink: 0,
      "&:hover": {
        transform: "scale(1.1)",

        border: `4px solid #32CD30`,
        backgroundColor: "#32CD30",
        color: `white`,
      },
    },
    submitBtn: {
      border: `4px solid green`,
      backgroundColor: "#10265ddc",
      padding: "0 1rem",
      color: `white`,
      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",

        backgroundColor: "#32CD30",
        color: `white`,
      },
    },
  }));

const Contact = () => {
   const [open, setOpen] = useState(false);
   const classes = useStyles();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

   const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

   const handleClose = (reason) => {
     if (reason === "clickaway") {
       return;
     }

     setOpen(false);
   };




    const handleContactForm = (e) => {
      e.preventDefault();

   if (name && email && message) {
     if (isEmail(email)) {
       const templateParams = {
         from_name: name,
         from_email: email,
         message: message,
         to_email: "mehra.devesh2022@gmail.com",
       };

       emailjs
         .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
         .then(
           (response) => {
             console.log("Email sent successfully!", response);
             setSuccess(true);
        
             setErrMsg("");
             setName("");
             setEmail("");
             setMessage("");
             setOpen(false);
           },
           (error) => {
             console.error("Failed to send email:", error);
             setErrMsg("Failed to send email");
             setOpen(true);
           }
         );
     } else {
       setErrMsg("Invalid email");
       setOpen(true);
     }
   } else {
     setErrMsg("Enter all the fields");
     setOpen(true);
   }
    };

     React.useEffect(() => {
       let timer;
       if (success) {
         timer = setTimeout(() => {
          setSuccess(false)
      
         }, 5000); // Change 5000 to the desired duration in milliseconds (5 seconds in this case)
       }
       return () => clearTimeout(timer);
     }, [success]);
  
  return (
    <>
      <div className="contact">
        <h1
          style={{
            marginTop: "3rem",
            fontFamily: "Fira Code",
            position: "static",
          }}
        >
          Have a <span style={{ color: "#32CD30" }}>Question</span> on your
          mind??
        </h1>
        <p style={{ textAlign: "center" }}>
          Or just want to discuss a project? Contact Me using any of the links!!
        </p>
      </div>

      <div className="contacts" id="contacts">
        <div className="contacts--container">
          <h1
            style={{
              marginTop: "3rem",
              fontFamily: "Fira Code",
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "#32CD30" }}>Hire</span> Me!
          </h1>
          <div className="contacts-body">
            <div className="contacts-form">
              <form onSubmit={handleContactForm}>
                <div className="input-container">
                  <label htmlFor="Name" className={classes.label}>
                    Name
                  </label>
                  <input
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    className={`form-input ${classes.input}`}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="email" className={classes.label}>
                    Email
                  </label>
                  <input
                    placeholder="John@doe.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="Email"
                    className={`form-input ${classes.input}`}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="message" className={classes.label}>
                    Message
                  </label>
                  <textarea
                    placeholder="Type your message...."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    name="Message"
                    className={`form-message ${classes.message}`}
                  />
                </div>

                <div className="submit-btn">
                  <button
                    type="submit"
                    className={classes.submitBtn}
                    onClick={handleContactForm}
                  >
                    <p style={{ alignSelf: "end" }}>
                      {!success ? "Send" : "Sent"}
                    </p>
                    <div className="submit-icon">
                      {!success ? (
                        <>
                          <AiOutlineSend className="send-icon" />
                        </>
                      ) : (
                        <>
                          <AiOutlineCheckCircle className="success-icon" />
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </form>
              <Snackbar
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
              >
                <SnackbarContent
                  action={
                    <React.Fragment>
                      <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
                  style={{
                    backgroundColor: errMsg
                      ? "#ff0000"
                      : success
                      ? "#32CD32"
                      : "#FFA500",
                    color: "white",
                  }}
                  message={
                    errMsg ||
                    (success
                      ? "Message sent successfully!"
                      : "Warning message here")
                  }
                />
              </Snackbar>
            </div>

            <div className="contacts-details">
              <a
                href={`mailto:${contactsData.email}`}
                className="personal-details"
              >
                <div className={classes.detailsIcon}>
                  <FiAtSign />
                </div>
                <p style={{ color: "white" }} className="email">
                  {contactsData.email}
                </p>
              </a>
              <a
                href={`tel:${contactsData.phone}`}
                className="personal-details"
              >
                <div className={classes.detailsIcon}>
                  <FiPhone />
                </div>
                <p style={{ color: "white" }}>{contactsData.phone}</p>
              </a>

              <a
                className="personal-details"
                href="https://goo.gl/maps/qAiPwH8RWxdhqUFU8"
                target="_blank" // Opens link in a new tab/window
                rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
              >
                <div className={classes.detailsIcon}>
                  <HiOutlineLocationMarker />
                </div>
                <p style={{ color: "white" }}>{contactsData.address}</p>
              </a>

              <div className="socialmedia-icons">
                {socialsData.whatsapp && (
                  <a
                    href={socialsData.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaWhatsapp
                      aria-label="WhatsApp"
                      style={{ color: "#25D366" }}
                    />
                  </a>
                )}
                {socialsData.twitter && (
                  <a
                    href={socialsData.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaTwitter
                      aria-label="Twitter"
                      style={{ color: "#00acee " }}
                    />
                  </a>
                )}
                {socialsData.github && (
                  <a
                    href={socialsData.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`${classes.socialIcon} socialIcon`}
                  >
                    <FaGithub
                      aria-label="GitHub"
                      style={{ color: "##1d1a1a" }}
                      className={`${classes.GitHub} GitHub`}
                    />
                  </a>
                )}
                {socialsData.linkedIn && (
                  <a
                    href={socialsData.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaLinkedinIn
                      aria-label="LinkedIn"
                      style={{ color: "#0C63BC" }}
                    />
                  </a>
                )}
                {socialsData.instagram && (
                  <a
                    href={socialsData.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaInstagram
                      aria-label="Instagram"
                      style={{ color: "#d62976 " }}
                    />
                  </a>
                )}
                {socialsData.hashnode && (
                  <a
                    href={socialsData.hashnode}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <SiHashnode
                      aria-label="hashnode"
                      style={{ color: "#2962FF" }}
                    />
                  </a>
                )}
                {socialsData.leetcode && (
                  <a
                    href={socialsData.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <SiLeetcode
                      aria-label="Leetcode"
                      style={{ color: "#FFD700" }}
                    />
                  </a>
                )}
                {socialsData.freecodecamp && (
                  <a
                    href={socialsData.freecodecamp}
                    target="_blank"
                    rel="noreferrer"
                    className={`${classes.socialIcon} socialIcon`}
                  >
                    <FaFreeCodeCamp
                      aria-label="freecodecamp"
                      style={{ color: "#f2f2f2" }}
                      className={`${classes.freecodecamp} freecodecamp`}
                    />
                  </a>
                )}

                {socialsData.hackerrank && (
                  <a
                    href={socialsData.hackerrank}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.socialIcon}
                  >
                    <FaHackerrank
                      aria-label="hackerrank"
                      style={{ color: "#008000" }}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <img src={contactsGreen} alt="contacts" className="contacts--img" />
      </div>
    </>
  );
};

export default Contact;
