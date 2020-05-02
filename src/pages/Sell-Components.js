import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby-theme-material-ui"

// css
import "../App.css"

// images
import Background from "../images/background1.jpg"
import parts from "../images/parts.jpg"
import mitsubishiParts from "../images/mitsubishi-parts.jpg"

//logos
import allenBradley from "../images/logos/allen-bradley.png"
import abb from "../images/logos/abb.png"
import baldor from "../images/logos/baldor.jpg"
import eaton from "../images/logos/eaton.png"
import fanuc from "../images/logos/fanuc.png"
import lenze from "../images/logos/lenze.png"
import mitsubishi from "../images/logos/mitsubishi.png"
import omron from "../images/logos/omron.png"
import rockwell from "../images/logos/rockwell.png"
import schneiderElectric from "../images/logos/schneider-electric.jpg"
import siemens from "../images/logos/siemens.png"
import yaskawa from "../images/logos/yaskawa.png"

// parts images
import servo from "../images/partsImages/servo.png"
import plc from "../images/partsImages/plc.png"
import powerFlex from "../images/partsImages/powerflex.jpg"
import dcDrive from "../images/partsImages/dcdrive.jpg"
import robot from "../images/partsImages/ROBOT.png"
import panelview from "../images/partsImages/panelview.jpg"

// icons
import faceIcon from "../images/Icons/faceiconBlack.png"
import handshake from "../images/Icons/handshake.png"

//MUI
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"

import Layout from "../components/layout"

//styles
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
    margin: 25,
    textDecoration: "none",
    "&:hover": {
      opacity: ".99",
      cursor: "pointer",
      borderStyle: "solid",
      borderWidth: "2px",
      borderColor: "grey",
    },
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    backgroundColor: "#454545",
    textDecoration: "none",
  },
  paper: {
    fontSize: "calc(.6rem + 2vw)",
    maxWidth: 400,
    width: "20vw",
    color: "#282828",
    opacity: ".7",
  },
  pos: {
    textDecoration: "none",
  },
  control: {
    padding: theme.spacing(2),
  },

  header1: {
    backgroundImage: `url(${Background})`,
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

  h1: {
    paddingTop: 25,
    fontSize: "calc(1.1rem + 4vw)",
    lineHeight: 1.2,
  },

  divider: {
    backgroundColor: "#454545",
    height: 5,
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  div: {
    fontSize: 45,
  },
  img: {
    marginTop: 20,
    maxWidth: 120,
    width: "15vw",
    opacity: ".7",
  },
  left: {
    width: "100%",
    marginRight: 0,
  },
  reUse: {
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontWeight: 200,
    fontSize: "calc(1rem + 2.5vw)",
    color: "#454545",
  },
  logos: {
    width: "80%",
    padding: "2%",
    paddingLeft: "10%",
    paddingRight: "10%",
    opacity: ".8",
    "&:hover": {
      opacity: ".99",
      cursor: "pointer",
    },
  },
})

class Sell extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Layout>
          <div className={classes.header1}>
            <div className={classes.wanted}>
              <div className={classes.h1}>WANTED</div>
              <div className={classes.divider}></div>
              <div className={classes.div}>OLD + NEW PARTS</div>
              <div className={classes.divider}></div>
            </div>

            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <div className={classes.paper}>
                      Cash Paid
                      <div>Today</div>
                    </div>
                  </Grid>
                  <Grid item>
                    <img
                      className={classes.img}
                      src={handshake}
                      alt="Recycle Electronic E Waste Milwaukee"
                    />
                  </Grid>
                  <Grid item>
                    <div className={classes.paper}>
                      Automation
                      <div>Components</div>{" "}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>

          <div className="section">
            <div className="section1">
              <div className="firstchilds">
                <h1>
                  Sell&nbsp;Surplus
                  <div> Automation </div>
                  Components
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
                  style={{ textDecoration: "none" }}
                >
                  <div className="block1">
                    <img
                      src={faceIcon}
                      alt="Recycle Electronic E Waste Milwaukee"
                    ></img>
                    <div className="text">
                      Contact
                      <div>NJT </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>

          <img
            className="partsImage1"
            src={parts}
            alt="Automation Parts + E waste"
          ></img>

          <div className="body">
            <section>
              <div className={classes.reUse}>
                {" "}
                Re-use Is The Most Efficient Form Of Recycling
              </div>

              <Link to="/contact" style={{ textDecoration: "none" }}>
                <div className="wanted1">
                  <h1> IMMEDIATE PURCHASE CONSIDERATION:</h1>
                  <div></div>
                </div>
              </Link>
            </section>

            <Grid container spacing={2} direction="row">
              <Grid item sm={6} xs={12}>
                <div className="parts">
                  <h1>
                    Items:
                    <section></section>
                    Programmable Logic Controllers (PLC)
                    <section>Servo Controllers</section>
                    <section>Panel View Screens</section>
                    <section>HMI and Touch Screens</section>
                    <section>Variable Frequency Drives (VFD)</section>
                    and similar industrial controls
                  </h1>
                  <h2>
                    Brands:
                    <br></br>
                    Rockwell Automation, Allen Bradley, Siemens, Lenze, ABB,
                    Banner, Schneider Electric, Omron, Mitsubishi, GE, Rockwell,
                    Bosch, Danfoss, Baldor, Fuji, Reliant Electric, and more!
                  </h2>
                  NJT WILL PURCHASE ALL OF THE FOLLOWING:
                  <br></br>
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <a
                      href="https://en.wikipedia.org/wiki/Automation"
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        className="partsImage"
                        src={mitsubishiParts}
                        alt="Mitsubishi Automation"
                      ></img>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        style={{ textDecoration: "none" }}
                      >
                        INDUSTRIAL ELECTRONICS
                      </Typography>
                      <Typography
                        className={classes.pos}
                        color="textSecondary"
                        style={{ textDecoration: "none" }}
                      >
                        Industrial electronics is a branch of electronics that
                        deals with power electronic devices such as thyristors,
                        SCRs, AC/DC drives, meters, sensors, analyzers, load
                        sells automatic test equipment, multimeters, data
                        recorders, relays, resistors, semiconductors,
                        transistors, waveguides, scopes, amplifiers, radio
                        frequency (RF) circuit boards, timers, counters, etc.
                      </Typography>
                    </a>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={12} xs={12}>
                <a
                  href="https://ab.rockwellautomation.com/allenbradley/productdirectory.page?"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    className={classes.logos}
                    src={allenBradley}
                    alt="Allen Bradley Automation Surplus"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a href="https://new.abb.com/offerings">
                  <img
                    className={classes.logos}
                    src={abb}
                    alt="Recycle Electronic E Waste ABB"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a
                  href="https://www.eaton.com/us/en-us/products/controls-drives-automation-sensors.html"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    className={classes.logos}
                    src={eaton}
                    alt="Easton Automation Logo"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a
                  href="https://new.abb.com/about/history/heritage-brands/baldor-electric-company"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    className={classes.logos}
                    src={baldor}
                    alt="Baldor Automation Logo"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a
                  href="https://www.fanucamerica.com/industrial-solutions/manufacturing-applications"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    className={classes.logos}
                    src={fanuc}
                    alt="GE FANUC Automation Logo"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a href="https://www.lenze.com/en-us/products/inverters/">
                  <img
                    className={classes.logos}
                    src={lenze}
                    alt="Lenze Automation Logo"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a href="https://us.mitsubishielectric.com/fa/en/">
                  <img
                    className={classes.logos}
                    src={mitsubishi}
                    alt="Mitsubishi Automation Logo"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a href="https://www.se.com/us/en/work/products/industrial-automation-control/">
                  <img
                    className={classes.logos}
                    src={schneiderElectric}
                    alt="Automation Logo"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a href="https://www.rockwellautomation.com/en_NA/products/overview.page">
                  <img
                    className={classes.logos}
                    src={rockwell}
                    alt="Rockwell Automation Logo"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a href="https://www.yaskawa.com/products/drives/industrial-ac-drives">
                  <img
                    className={classes.logos}
                    src={yaskawa}
                    alt="yaskawa Automation Logo"
                  ></img>
                </a>
              </Grid>

              <Grid item sm={6} xs={12}>
                <a href="https://www.omron.com/media/press/iab/">
                  <img
                    className={classes.logos}
                    src={omron}
                    alt="Omron Automation Logo"
                  ></img>
                </a>
              </Grid>
            </Grid>
            <Grid item sm={12} xs={12}>
              <a
                href="https://new.siemens.com/global/en/products/automation.html"
                style={{ textDecoration: "none" }}
              >
                <img
                  className={classes.logos}
                  src={siemens}
                  alt="Siemens Automation Logo"
                ></img>
              </a>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  justify="center"
                  direction="row"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item sm={6} xs={12}>
                    <a
                      href="https://en.wikipedia.org/wiki/Programmable_logic_controller"
                      style={{ textDecoration: "none" }}
                    >
                      <Card className={classes.card}>
                        <CardContent>
                          <img
                            className="partsImage"
                            src={plc}
                            alt="PLC Parts Sell"
                          ></img>
                          <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            PLC
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          >
                            A programmable logic controller (PLC) or
                            programmable controller is an industrial digital
                            computer which has been ruggedized and adapted for
                            the control of manufacturing processes, such as
                            assembly lines, or robotic devices, or any activity
                            that requires high reliability control and ease of
                            programming and process fault diagnosis.{" "}
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
                  </Grid>
                </Grid>

                <Grid
                  container
                  justify="center"
                  direction="row"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item sm={6} xs={12}>
                    <a
                      href="https://en.wikipedia.org/wiki/Servo_control"
                      style={{ textDecoration: "none" }}
                    >
                      <Card className={classes.card}>
                        <CardContent>
                          <img
                            className="partsImage"
                            src={servo}
                            alt="Servo Controller"
                          ></img>
                          <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            Servo Drive / Controller
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          >
                            Servo control is achieved by sending a servo a PWM
                            (pulse-width modulation) signal, a series of
                            repeating pulses of variable width where either the
                            width of the pulse or the duty cycle of a pulse
                            train (less common today) determines the position to
                            be achieved by the servo.
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
                  </Grid>
                </Grid>

                <Grid
                  container
                  justify="center"
                  direction="row"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item sm={6} xs={12}>
                    <a
                      href="https://en.wikipedia.org/wiki/Variable-frequency_drive"
                      style={{ textDecoration: "none" }}
                    >
                      <Card className={classes.card}>
                        <CardContent>
                          <img
                            className="partsImage"
                            src={powerFlex}
                            alt="Powerflex Drive Allen Bradley"
                          ></img>
                          <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            AC Variable Frequency Drive
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          >
                            A variable-frequency drive (VFD) or
                            adjustable-frequency drive (AFD),
                            variable-voltage/variable-frequency (VVVF) drive,
                            variable speed drive (VSD), AC drive, micro drive or
                            inverter drive is a type of adjustable-speed drive
                            used in electro-mechanical drive systems to control
                            AC motor speed and torque by varying motor input
                            frequency and voltage.{" "}
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
                  </Grid>
                </Grid>

                <Grid
                  container
                  justify="center"
                  direction="row"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item sm={6} xs={12}>
                    <a
                      href="https://circuitglobe.com/dc-motor-drives.html"
                      style={{ textDecoration: "none" }}
                    >
                      <Card className={classes.card}>
                        <CardContent>
                          <img
                            className="partsImage"
                            src={dcDrive}
                            alt="DC Electric Motor Drive"
                          ></img>
                          <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            DC Electric Motor Drive
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          >
                            DC drives provide variable speed control for DC
                            motors, ideal for applications requiring low speed
                            control, torque and power. Speed adjustment is
                            simple, typically using a potentiometer or analog
                            input signal. IronHorse DC drives are available with
                            either DC or AC input voltage input, and in open
                            frame or NEMA 4/12 or 4X enclosed versions.{" "}
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
                  </Grid>
                </Grid>

                <Grid
                  container
                  justify="center"
                  direction="row"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item sm={6} xs={12}>
                    <a
                      href="https://ab.rockwellautomation.com/Graphic-Terminals"
                      style={{ textDecoration: "none" }}
                    >
                      <Card className={classes.card}>
                        <CardContent>
                          <img
                            className="partsImage"
                            src={panelview}
                            alt="Panelview Screen"
                          ></img>
                          <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            HMI and PANELVIEW SCREENS
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          >
                            The HMI (Human Machine Interface) provides a textual
                            or graphical view of system conditions and
                            operations, vital information absent with simple
                            pushbutton panels or switch banks. HMIs offer robust
                            monitoring, control, status reporting and many other
                            functions. Touch panels (including a headless
                            version), message displays and text panels are
                            available.{" "}
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
                  </Grid>
                </Grid>

                <Grid
                  container
                  justify="center"
                  direction="row"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item sm={6} xs={12}>
                    <a
                      href="https://en.wikipedia.org/wiki/Industrial_robot"
                      style={{ textDecoration: "none" }}
                    >
                      <Card className={classes.card}>
                        <CardContent>
                          <img
                            className="partsImage"
                            src={robot}
                            alt="Robot"
                          ></img>
                          <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                          >
                            ROBOTS + REPLACEMENT PARTS
                          </Typography>
                          <Typography
                            className={classes.pos}
                            color="textSecondary"
                          >
                            Robotic process automation (or RPA) is a form of
                            business process automation technology based on
                            metaphorical software robots (bots) or artificial
                            intelligence (AI) workers.{" "}
                          </Typography>
                        </CardContent>
                      </Card>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Layout>
      </div>
    )
  }
}

export default withStyles(styles)(Sell)
