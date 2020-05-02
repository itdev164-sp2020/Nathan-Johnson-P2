import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby-theme-material-ui"

import Layout from "../components/layout"
// css
import "../App.css"

// images
import machines from "../images/machines.jpg"

// icons

//MUI
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import FacebookIcon from "@material-ui/icons/Facebook"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"

//styles
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  paper: {
    fontSize: "calc(.6rem + 2vw)",
    maxWidth: 400,
    width: "20vw",
    color: "#282828",
    opacity: ".7",
  },
  control: {
    padding: theme.spacing(2),
  },

  header1: {
    backgroundImage: `url(${machines})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80vw",
    maxHeight: "500px",
    minHeight: "200px",
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Helvetica Neue",
    opacity: ".9",
    fontWeight: 100,
    textShadow: "0px -15px rgba(255, 255, 255, 0.15)",
  },
  headerText: {
    fontSize: "calc(1rem + 3vw)",
    fontWeight: 100,
    color: "white",
    margin: 0,
    paddingTop: "calc(5vw + 100px)",
  },
  img: {
    marginTop: 35,
    maxWidth: 320,
    width: "25vw",
  },
  wanted: {
    marginTop: 25,
    fontSize: 20,
  },
  cards: {
    textAlign: "center",
  },
  wasteImages: {
    width: "80%",
  },
  items: {
    textAlign: "center",
    color: "#939393",
    fontSize: "calc(.6rem + 2vw)",
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
  },
  plcIcon: {
    width: 120,
  },
  partsImages: {
    width: "100%",
    position: "relative",
  },
  info: {
    position: "absolute",
    left: "5%",
    bottom: 40,
    margin: 0,
    color: "white",
    fontSize: "calc(.6rem + 2vw)",
    fontFamily: "Helvetica Neue",
    textShadow: `1px 3px 1px black`,
  },
  infoContainer: {
    position: "relative",
  },
  contact: {
    textAlign: "center",
  },
  contactIcons: {
    width: "100%",
    fontSize: "calc(8rem + 2vw)",
    opacity: ".5",
    textAlign: "center",
    padding: "10%",
    "&:hover": {
      opacity: ".8",
      cursor: "pointer",
    },
  },
  contactText: {
    width: "100%",
    textAlign: "center",
    lineHeight: "1.5",
    display: "inline-block",
    verticalAlign: "middle",
    fontFamily: "Helvetica Neue",
    fontSize: "calc(1rem + 2vw)",
    fontWeight: 100,
    "&:hover": {
      fontWeight: 300,
      cursor: "pointer",
    },
  },
  url: {
    fontSize: "calc(.6rem + 2vw)",
    textDecoration: "underline",
  },
  spacer: {
    width: "100%",
    height: 50,
  },
})

export class contact extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Layout>
          <div className={classes.header1}>
            <div className="theHeader">
              <h1> Keeping The Machines Alive </h1>
              <h2> One part can hinge an entire operation </h2>
            </div>
          </div>
          <div className="section0">
            <div className="section0">
              <div className={classes.contact}>
                <h1>
                  <p></p>
                  Contact
                  <div> </div>
                  NJT
                </h1>
              </div>
            </div>
          </div>

          <div className="body">
            <div className={classes.spacer}></div>
            <Grid container direction="row" alignItems="center">
              <Tooltip title="Send Text Message" placement="right">
                <Grid item sm={2} xs={4}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    href="sms:+1-414-331-5954"
                  >
                    <PhoneIphoneIcon
                      className={classes.contactIcons}
                    ></PhoneIphoneIcon>
                  </IconButton>
                </Grid>
              </Tooltip>
              <Tooltip title="Send Text Message">
                <Grid item sm={10} xs={8}>
                  <a href="sms:+1-414-331-5954">
                    <div className={classes.contactText}>
                      TEXT: (414)331-5954
                    </div>
                  </a>
                </Grid>
              </Tooltip>

              <Tooltip title="Call NJT" placement="right">
                <Grid item sm={2} xs={4}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    href="tel:+1-414-331-5954"
                  >
                    <PhoneIphoneIcon
                      className={classes.contactIcons}
                    ></PhoneIphoneIcon>
                  </IconButton>
                </Grid>
              </Tooltip>
              <Tooltip title="Call NJT">
                <Grid item sm={10} xs={8}>
                  <a href="tel:+1-414-331-5954">
                    <div className={classes.contactText}>
                      CALL: (414)331-5954
                    </div>
                  </a>
                </Grid>
              </Tooltip>

              <Tooltip title="Send Email" placement="right">
                <Grid item sm={2} xs={4}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    href="mailto:nathan@njtautomation.com?Subject=NJT%20INQUIRY"
                  >
                    <MailOutlineIcon
                      className={classes.contactIcons}
                    ></MailOutlineIcon>
                  </IconButton>
                </Grid>
              </Tooltip>

              <Tooltip title="Send Email">
                <Grid item sm={10} xs={8}>
                  <div className={classes.contactText}>
                    <a href="mailto:nathan@njtautomation.com?Subject=NJT%20INQUIRY">
                      <div className={classes.url}>
                        Nathan@njtautomation.com
                      </div>
                    </a>
                  </div>
                </Grid>
              </Tooltip>

              <Tooltip title="Location Page" placement="right">
                <Grid item sm={2} xs={4}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    component={Link}
                    to="/location"
                  >
                    <LocationOnIcon
                      className={classes.contactIcons}
                    ></LocationOnIcon>
                  </IconButton>
                </Grid>
              </Tooltip>
              <Tooltip title="Get Directions">
                <Grid item sm={10} xs={8}>
                  <a href="https://www.google.com/maps/place/NJT+Automation+Salvage/@43.0574327,-87.8858043,15z/data=!4m5!3m4!1s0x0:0xe1cb639a25d061!8m2!3d43.0574327!4d-87.8858043">
                    <div className={classes.contactText}>
                      2122 N Prospect Ave Milwaukee, WI 53202
                    </div>
                  </a>
                </Grid>
              </Tooltip>

              <Tooltip title="Facebook Page" placement="right">
                <Grid item sm={2} xs={4}>
                  <a
                    style={{ color: "black" }}
                    href="https://www.google.com/maps/place/NJT+Automation+Salvage/@43.0574327,-87.8858043,15z/data=!4m5!3m4!1s0x0:0xe1cb639a25d061!8m2!3d43.0574327!4d-87.8858043"
                  >
                    <IconButton edge="start" color="inherit" aria-label="menu">
                      <FacebookIcon
                        className={classes.contactIcons}
                      ></FacebookIcon>
                    </IconButton>
                  </a>
                </Grid>
              </Tooltip>

              <Tooltip title="Facebook Page">
                <Grid item sm={10} xs={8}>
                  <div className={classes.contactText}>
                    <a href="https://www.facebook.com/njtautomation">
                      <div className={classes.url}>
                        {" "}
                        Facebook.com/njtautomation
                      </div>
                    </a>
                  </div>
                </Grid>
              </Tooltip>
            </Grid>
          </div>
          <div className={classes.spacer}></div>
        </Layout>
      </div>
    )
  }
}

export default withStyles(styles)(contact)
