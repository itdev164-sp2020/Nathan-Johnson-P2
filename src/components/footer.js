import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby-theme-material-ui"

//MUI
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

// Mui Icons
import faceIcon from "../images/Icons/faceiconwhte.png"
import Tooltip from "@material-ui/core/Tooltip"

//icons
import Icons from "../components/icons"

//CSS
import "../App.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontSize: 30,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontSize: "3rem",
  },
  Toolbar: {
    maxWidth: 1400,
    width: "100%",
    margin: "auto",
  },

  icons: {
    fontSize: "3rem",
    color: "#959595",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
  footer: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 15,
    display: "flex",
    height: 180,
    overflow: "hidden",
  },
  centered1: {
    margin: "auto",
    height: 150,
  },

  footerImage: {
    height: 180,
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
    },
  },

  right: {
    position: "absolute",
    width: "45%",
    right: 0,
    top: "50%",
    transform: "translate(-0%, -50%)",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
      width: "20%",
      marginRight: 12,
    },
  },

  left: {
    position: "absolute",
    width: "45%",
    left: 0,
    textAlign: "right",
    top: "50%",
    transform: "translate(-0%, -50%)",
    fontFamily: "Helvetica Neue",
    fontSize: "1rem",
    color: "#707070",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
      width: "30%",
    },
  },
  njt: {
    fontFamily: "FunCity",
    paddingRight: 20,
    color: "white",
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar} centered="True">
          <div className={classes.footer}>
            <div className={classes.centered1}>
              <Link to="/contact">
                <Tooltip title="Contact Page">
                  <img
                    src={faceIcon}
                    className={classes.footerImage}
                    alt="NJT"
                  />
                </Tooltip>{" "}
              </Link>{" "}
            </div>{" "}
            <div className={classes.right}>
              <Icons />
            </div>
            <div className={classes.left}>
              <h1>
                {" "}
                CONTACT <div className={classes.njt}> NJT </div>{" "}
              </h1>{" "}
            </div>{" "}
          </div>{" "}
        </Toolbar>{" "}
      </AppBar>{" "}
    </div>
  )
}
