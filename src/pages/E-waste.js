import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby-theme-material-ui"

// css
import "../App.css"
import SEO from "../components/seo"

//componenets
import Layout from "../components/layout"

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
  videoContainer: {
    position: "relative",
    "& > h1": {
      textShadow: "0 0 3px black",
      position: "absolute",
      color: "white",
      zIndex: 100,
      bottom: "20%",
      left: "5%",
      fontSize: "calc(.6rem + 3vw)",
      fontFamily: "Helvetica Neue",
      fontWeight: 100,
      opacity: ".8",
      "&:hover": {
        cursor: "pointer",
        opacity: ".99",
      },
    },
    "&:hover": {
      cursor: "pointer",
      fontWeight: 200,
      opacity: ".99",
    },
  },
  container1: {
    position: "relative",
    width: "80%",
    height: 0,
    paddingBottom: "56.25%",
    color: "red",
  },
  video1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: "red",
    marginBottom: 25,
  },
  sendPics: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: "2rem",
  },
})

class eWaste extends Component {
  handleClick() {
    var x = document.getElementById("video")
    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }

    var y = document.getElementById("videoText")
    if (y.style.display === "none") {
      y.style.display = "block"
    } else {
      y.style.display = "none"
    }
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Layout>

 <SEO title="Electronics and E-Waste Recycling and Removal" 
              description="Industrial, commercial, and manufacturing electronics waste wanted, E-WASTE WANTED"/>

          <div className={classes.header1}>
            <div className={classes.wanted}>
              Industrial E-Waste Removal and Recycling
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
                  <Grid item></Grid>
                  <Grid item>
                    <img
                      className={classes.img}
                      src={recycle}
                      alt="Recycle Industrial Electronics"
                    />
                  </Grid>
                  <Grid item></Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>

          <div className="section">
            <div className="section1">
              <div className="firstchilds">
                <h1>
                  E-waste
                  <div> Removal&nbsp;& </div>
                  Recycling
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
                    <img src={faceIcon} alt="NJT Automation Equipment"></img>
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
            <div className="divider"></div>
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item sm={4} xs={12} className={classes.cards}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      INDUSTRIAL E-WASTE
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      NJT industrial e-waste disposal service includes: the
                      collection and recycling of non-working electronics, scrap
                      circuit boards, manufacturing e-waste, electrical
                      machinery, automation components and equipment to be
                      recycled.{" "}
                    </Typography>

                    <img
                      src={junkpile}
                      className={classes.wasteImages}
                      alt="Automation Junk"
                    ></img>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={4} xs={12} className={classes.cards}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      OUT-DATED AUTOMATION
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Waste electronics, obsolete or broken electrical
                      machinery, production scrap metals and plastics resulting
                      from manufacturing, can easily be fully recycled 99% of
                      the time. Saving costs while reducing waste and harm to
                      the environment.
                    </Typography>
                    <img
                      src={junk}
                      className={classes.wasteImages}
                      alt="Sell Electronic E Waste"
                    ></img>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item sm={4} xs={12} className={classes.cards}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      REMOVAL SERVICE
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      E-Waste is a world-wide issue and can be toxic to the
                      environment if not handled properly. NJT is partners with
                      several environmentally-conscious recycling centers. Items
                      will be disposed of to the proper establishment.
                    </Typography>
                    <img
                      src={crane}
                      className={classes.wasteImages}
                      alt="Sell Electronic E Waste"
                    ></img>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <div className="wanted1">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <h1> RECYCLE ELECTRONICS PROPERLY</h1>
            </Link>
          </div>

          <div className={classes.items}>
            Individual Items,
            <div> By The Pallet </div>
            or
            <div> Truckload </div>
          </div>
          <div className="wanted1">
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <h1>
                {" "}
                Low-Cost Service Available
                <div>Entire Midwest USA</div>
              </h1>
            </Link>
          </div>
        </Layout>
      </div>
    )
  }
}

export default withStyles(styles)(eWaste)
