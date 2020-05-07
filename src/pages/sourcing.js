import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby-theme-material-ui"
import SEO from "../components/seo"
// css
import "../App.css"

// images
import wasteLand from "../images/wasteland.jpg"

//parts images
import circuit from "../images/parts/circuitboard.png"
import contactor from "../images/parts/contactor.png"
import drive from "../images/parts/drive.jpg"
import kuka from "../images/parts/kuka.png"
import panelview from "../images/parts/panelview.jpg"
import servomechanism from "../images/parts/servomechanism.png"

// industry images
import autofactory from "../images/industryImages/autofactory.jpg"
import bottlefactory from "../images/industryImages/bottlefactory.jpg"
import factory from "../images/industryImages/factory.jpg"
import machine from "../images/industryImages/machine.jpg"
import rollercoaster from "../images/industryImages/rollercoaster.jpg"
import steelfactory from "../images/industryImages/steelfactory.jpg"
import wirefactory from "../images/industryImages/wirefactory.jpg"

// icons
import faceIcon from "../images/Icons/faceiconBlack.png"
import plcIcon from "../images/Icons/plcIconwhite.png"

//Components
import Layout from "../components/layout"

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
    backgroundImage: `url(${wasteLand})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80vw",
    maxHeight: "500px",
    minHeight: "200px",
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Helvetica Neue",
    opacity: ".7",
    fontWeight: 100,
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
})

export class sourcing extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Layout>
         <SEO title="We will source parts for your industrial manufacturing machines" description="Source rare automation electronics" />  
          <div className={classes.header1}>
            <div className={classes.headerText}>
              <div>
                <img
                  src={plcIcon}
                  className={classes.plcIcon}
                  alt="Automation NJT"
                ></img>
              </div>
              ANY PART FOR A PRICE
            </div>
          </div>
          <div className="section">
            <div className="section1">
              <div className="firstchilds">
                <h1>
                  Rare
                  <div> Parts </div>
                  Sourcing
                </h1>
              </div>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid
                  item
                  sm={4}
                  xs={12}
                  component={Link}
                  to="/contact"
                  style={{ textDecoration: "none", zIndex: 3 }}
                >
                  <div className="block1">
                    <img src={faceIcon} alt="Automation NJT"></img>
                    <div className="text">
                      Contact
                      <div>NJT </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>

          <div className="body">
            <div className="wanted1">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <h1> SPARE AND REPLACEMENT PARTS</h1>
              </Link>
            </div>

            <Grid container spacing={2} direction="row">
              <Grid item sm={4} xs={6}>
                <img
                  src={circuit}
                  className={classes.partsImages}
                  alt="Automation parts"
                ></img>
              </Grid>
              <Grid item sm={4} xs={6}>
                <img
                  src={contactor}
                  className={classes.partsImages}
                  alt="Automation Parts"
                ></img>
              </Grid>
              <Grid item sm={4} xs={6}>
                <img
                  src={drive}
                  className={classes.partsImages}
                  alt="Automation parts"
                ></img>
              </Grid>

              <Grid item sm={4} xs={6}>
                <img
                  src={kuka}
                  className={classes.partsImages}
                  alt="Automation robotics"
                ></img>
              </Grid>

              <Grid item sm={4} xs={6}>
                <img
                  src={panelview}
                  className={classes.partsImages}
                  alt="Automation screen"
                ></img>
              </Grid>
              <Grid item sm={4}>
                <img
                  src={servomechanism}
                  className={classes.partsImages}
                  alt="Automation Servo Controller"
                ></img>
              </Grid>
            </Grid>

            <div className="wanted1">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <h1> SEND US: MAKE / MODEL + Part No.</h1>
              </Link>
            </div>

            <Grid
              container
              justify="center"
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <div></div>

              <Grid item sm={12}>
                <img
                  src={autofactory}
                  className={classes.partsImages}
                  alt="Automotive Factory"
                ></img>
                <div className={classes.infoContainer}>
                  <div className={classes.info}>Automotive Manufacturing</div>
                </div>
              </Grid>

              <Grid item sm={12}>
                <img
                  src={bottlefactory}
                  className={classes.partsImages}
                  alt="Bottle Factory"
                ></img>
                <div className={classes.infoContainer}>
                  <div className={classes.info}>Food and Beverage Plastics</div>
                </div>
              </Grid>

              <Grid item sm={12}>
                <img
                  src={wirefactory}
                  className={classes.partsImages}
                  alt="Wire Factory"
                ></img>
                <div className={classes.infoContainer}>
                  <div className={classes.info}>Textile Machinery </div>
                </div>
              </Grid>

              <Grid item sm={12}>
                <img
                  src={machine}
                  className={classes.partsImages}
                  alt="Machinery Factory"
                ></img>
                <div className={classes.infoContainer}>
                  <div className={classes.info}>Paper and Packaging </div>
                </div>
              </Grid>

              <Grid item sm={12}>
                <img
                  src={steelfactory}
                  className={classes.partsImages}
                  alt="Steel Factory"
                ></img>
                <div className={classes.infoContainer}>
                  <div className={classes.info}>STEEL AND IRON </div>
                </div>
              </Grid>

              <Grid item sm={12}>
                <img
                  src={factory}
                  className={classes.partsImages}
                  alt="Factory"
                ></img>
                <div className={classes.infoContainer}>
                  <div className={classes.info}>Power Plants </div>
                </div>
              </Grid>

              <Grid item sm={12}>
                <img
                  src={rollercoaster}
                  className={classes.partsImages}
                  alt="Parts"
                ></img>
                <div className={classes.infoContainer}>
                  <div className={classes.info}>AND ROLLERCOASTERS! </div>
                </div>
              </Grid>
            </Grid>

            <div className="wanted1">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <h1> NJT will source parts for aging industrial-machines</h1>
              </Link>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default withStyles(styles)(sourcing)
