import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby-theme-material-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"

// images
import eBackground from "../images/ebackground.jpg"
import junk from "../images/junk.jpg"
import junkpile from "../images/junkpile.jpg"
import crane from "../images/crane.jpg"

// icons
import faceIcon from "../images/Icons/faceiconBlack.png"
import recycle from "../images/Icons/recycle.png"

//MUI
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"

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
    backgroundImage: `url(${eBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80vw",
    maxHeight: "500px",
    minHeight: "200px",
    textAlign: "center",
    color: "#454545",
    fontFamily: "Copperplate",
    opacity: ".7",
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
  fire: {
    width: "100%",
  },
  container1: {
    position: "relative",
    width: "80%",
    height: 0,
    paddingBottom: "56.25%",
    color: "red",
  },
})


class Template extends Component {

  render() {
    const { classes } = this.props
    return (<Layout>
   the city
      </Layout>)
  }
}

export default withStyles(styles)(Template)