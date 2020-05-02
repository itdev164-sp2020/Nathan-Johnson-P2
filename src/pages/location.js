import React, { Component } from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby-theme-material-ui"

// css
import "../App.css"

// images
import map from "../images/map.png"
// icons
import faceIcon from "../images/Icons/faceiconBlack.png"

//MUI
import LocationOnIcon from "@material-ui/icons/LocationOn"

//componenets
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
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80vw",
    maxHeight: "500px",
    minHeight: "200px",
    textAlign: "center",
    color: "#454545",
    fontFamily: "Copperplate",
    opacity: ".9",
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
  contact: {
    textAlign: "center",
  },
  contactIcons: {
    width: "100%",
    fontSize: "calc(5rem + 2vw)",
    opacity: ".5",
    textAlign: "center",
    padding: "20%",
    marginTop: 25,
  },
  contactText: {
    width: "100%",
    textAlign: "center",
    lineHeight: "1.5",
    display: "inline-block",
    verticalAlign: "middle",
    fontFamily: "Helvetica Neue",
    fontSize: "calc(1rem + 1vw)",
    fontWeight: 100,
    marginTop: 25,
  },
  locations: {
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontSize: "calc(1rem + 1vw)",
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 50,
    opacity: ".7",
  },
  map: {
    width: "100%",
  },
  shipments: {
    textAlign: "center",
    fontWeight: 100,
    "& > h2": {
      fontWeight: 100,
      color: "red",
    },
    contactAddress: {
      marginTop: 200,
    },
  },
})

export class location extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Layout>
          <div className={classes.header1}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2575180.955065438!2d-87.13096746863462!3d42.051377582574695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1cb639a25d061!2sNJT%20Automation!5e0!3m2!1sen!2sus!4v1579646585367!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
            ></iframe>{" "}
          </div>

          <div className="section">
            <div className="section1">
              <div className="firstchilds">
                <h1>
                  Areas
                  <div> Serviced / </div>
                  Locations
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

          <div className="body">
            <Grid
              container
              direction="row"
              alignItems="center"
              className={classes.contactAddress}
            >
              <Grid item sm={2} xs={4}>
                <LocationOnIcon
                  className={classes.contactIcons}
                ></LocationOnIcon>
              </Grid>

              <Grid item sm={10} xs={8}>
                <div className={classes.contactText}>
                  <a href="https://www.google.com/maps/place/NJT+Automation/@43.0571562,-87.9168635,17z/data=!3m1!4b1!4m5!3m4!1s0x8805195c7f83be51:0xe1cb639a25d061!8m2!3d43.0571523!4d-87.9146695">
                    2122 N Prospect Ave Milwaukee, WI 53202
                  </a>
                </div>
              </Grid>
            </Grid>

            <iframe
              title="Electronics Recycling Africa"
              src="https://www.google.com/maps/d/embed?mid=1IyBfiVdNJZacAlnG2AGNeu4vNW9lEQV3"
              width="100%"
              height="580"
            ></iframe>

            <div className={classes.locations}>
              <h1>Equipment pickups available:</h1>
              <div>Milwaukee, Wisconsin</div>
              <div>Madison, Wisconsin</div>
              <div>Green Bay, Wisconsin</div>
              <div>Sheboygan, Wisconsin</div>
              <div>Chicago, Illinois</div>
              <div>Rockford, Illinois</div>
              <div>Gran Rapids, Michigan</div>
              <div>Detroit, Michigan</div>
              <div>All midwest USA!</div>
            </div>
            <img
              src={map}
              className={classes.map}
              alt="Recycle Electronic E Waste Milwaukee"
            ></img>

            <div className={classes.shipments}>
              <h2> PARTS SHIPMENTS TO THE ENTIRE WORLD </h2>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default withStyles(styles)(location)
