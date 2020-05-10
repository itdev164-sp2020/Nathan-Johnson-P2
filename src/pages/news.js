import React from "react"
//componenets
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby-theme-material-ui"

// jpeg icons
import handshake from "../images/Icons/handshake.jpg"
import recycle from "../images/Icons/recycleicon.jpg"
import plcIcon from "../images/Icons/plcIcon.jpg"

//MUI
import Grid from "@material-ui/core/Grid"
import CardMedia from "@material-ui/core/CardMedia"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"

import Typography from "@material-ui/core/Typography"

const News = ({ data }) => (
  <Layout>
    <SEO
      title="NJT Automation Salvage"
      placename="Milwaukee"
      keywords="Milwaukee, automation, industrial, electronics, manufacturing, buy, sell"
      position="43.057806;-88.1075137"
    />

    <div className="header">
      <h1>
        <div className="logo">NJT</div>
      </h1>
    </div>
    <div className="section">
      <div className="section1">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item sm={3} xs={12}>
            <div className="firstchild">
              <h1>
                Services
                <div> For&nbsp;Your </div>
                Business
              </h1>
            </div>
          </Grid>
          <Grid
            item
            sm={3}
            xs={12}
            component={Link}
            to="/Sell-Components"
            style={{ textDecoration: "none" }}
          >
            <div className="block">
              <img src={handshake} alt="Sell Electronic E Waste"></img>
              <div>Sell Surplus Automation Components</div>
            </div>
          </Grid>
          <Grid
            item
            sm={3}
            xs={12}
            component={Link}
            to="/E-waste"
            style={{ textDecoration: "none" }}
          >
            <div className="block">
              <img
                src={recycle}
                alt="Recycle Electronic E Waste Milwaukee"
              ></img>
              <div>
                E-Waste
                <section>Removal and Recycling</section>
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={3}
            xs={12}
            component={Link}
            to="/sourcing"
            style={{ textDecoration: "none" }}
          >
            <div className="block">
              <img src={plcIcon} alt="Recycle Electronic PLC  Milwaukee"></img>
              <div>
                Rare
                <section>Parts</section>
                Sourcing
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
    <div style={{ textDecoration: "none" }} className="wanted">
      <h1>NEWS</h1>
    </div>

    <div className="blogBody">
      <p>&nbsp;</p>
      <div>
        {data.allContentfulBlogPost.edges.map(edge => (
          <Card style={{ margin: "5%" }}>
            <CardContent>
              <Link to={edge.node.slug} key={edge.node.id}>
                <Typography gutterBottom>
                  <h1 style={{ textDecoration: "none" }}>{edge.node.title}</h1>
                </Typography>
              </Link>
              <Typography variant="body2" component="p">
                <p>{edge.node.body.childMarkdownRemark.excerpt}</p>
              </Typography>
            </CardContent>
            <CardMedia src={edge.node.heroImage.fluid.src}>
              <Link to={edge.node.slug} key={edge.node.id}>
                <img
                  style={{ width: "98%", borderRadius: "5px", margin: "1%" }}
                  src={edge.node.heroImage.fluid.src}
                  alt="Hero"
                />
              </Link>
            </CardMedia>
          </Card>
        ))}
      </div>
      <p>&nbsp;</p>
    </div>
  </Layout>
)

export default News

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          slug
          title
          id
          heroImage {
            fluid(maxWidth: 1400) {
              src
            }
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
