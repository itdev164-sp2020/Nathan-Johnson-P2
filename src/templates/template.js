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
import Picture from "../images/ewaste-pic.jpg"

// icons
import faceIcon from "../images/Icons/faceiconBlack.png"
import recycle from "../images/Icons/recycle.png"

//MUI
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

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
  city: {
    fontSize: "calc(.3rem + 2vw)",
  },
  wanted1: {
    width: 1200,
    position: "relative",
    textAlign: "center",
  },
  wantedPic: {
    width: 800,
    margin: "0 auto",
    display: "block",
  },
  form: {
    width: "50%",
    margin: "0 auto",
  },
  centered: {
    margin: 20,
    textAlign: "center",
  },
  njt: {
    color: "gray",
    fontFamily: "FunCity",
  },
})

class Template extends Component {
  render() {
    const { city } = this.props.pageContext
    const { classes } = this.props
    return (
      <Layout>
        <SEO
          title={`Electronics and E-Waste Recycling ${city.name}, ${city.state}`}
          description={`Computer, server, desktop, controllers, PLC, E Waste, Electronics Recycling ${city.name}, ${city.state}`}
          placename={city.name}
          position={`${city.lat};${city.lng}`}
          keywords={`Electronics Recycling ${city.name}`}
        />

        <div className={classes.header1}>
          <div className={classes.wanted}>
            <h3>Industrial Electronics and Computer Removal and Recycling</h3>
          </div>
          <div className={classes.wanted}>
            <h2>
              E-Waste {city.name}, {city.state}
            </h2>
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
                    alt="Recycle, Industrial, Electronics, E Waste"
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
                <div className={classes.city}>{city.name}</div>
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

          <div className="wanted1">
            <Link
              to="/contact"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <h1> RECYCLE ELECTRONICS PROPERLY</h1>
              <h4>Serving {city.county} County</h4>

              <img
                src={Picture}
                className={classes.wantedPic}
                alt={`Computer recycling ${city.name}, ${city.state}`}
              ></img>
            </Link>
          </div>
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
                    circuit boards, manufacturing e-waste, electrical machinery,
                    automation components and equipment to be recycled.{" "}
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
                    Waste electronics, obsolete or broken electrical machinery,
                    production scrap metals and plastics resulting from
                    manufacturing, can easily be fully recycled 99% of the time.
                    Saving costs while reducing waste and harm to the
                    environment.
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
          <h1>
            {" "}
            <span className={classes.njt}>NJT</span> Electronics Recycling{" "}
            {city.name}
          </h1>
          {city.info}
          <div>
            <form
              action={`mailto:nathan@njtautomation.com?subject=E-Waste - ${city.name}`}
              method="post"
              enctype="text/plain"
              className={classes.form}
            >
              <h2> Submit An E-Waste Request: </h2>
              <TextField
                name="Name"
                type="text"
                label="Name / Company"
                multiline
                rows="2"
                className={classes.textField}
                placeholder="Name"
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="Description"
                type="text"
                label="Description of Items to Be Recycled"
                multiline
                rows="2"
                className={classes.textField}
                placeholder="Description"
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="Email Address"
                type="text"
                label="Email Address"
                placeholder="Email"
                multiline
                rows="2"
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="Location"
                type="text"
                label="Location"
                placeholder="Location"
                multiline
                rows="2"
                className={classes.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <div className={classes.centered}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.Button}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withStyles(styles)(Template)
