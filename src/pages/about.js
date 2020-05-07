import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby-theme-material-ui"
import SEO from "../components/seo"


// jpeg icons
import handshake from "../images/Icons/handshake.jpg"
import recycle from "../images/Icons/recycleicon.jpg"
import plcIcon from "../images/Icons/plcIcon.jpg"

//Components
import Layout from "../components/layout"

//CSS
import "../App.css"

class about extends Component {
  render() {
    return (
      <div>
        <Layout>
         <SEO title="Industrial Salvage for Manufacturing Automation" 
              description="In 30 years, the cover of Time Magazine will very likely be a very expensive robot. It remembers better than you and it counts faster than you. In 40 years, it will be broken and you can’t get replacement parts or afford a new robot."/>
          <div className="header1"></div>
          <div className="quote">
            <div className="quoteText">
              <h1>
                {" "}
                “In 30 years, the cover of Time Magazine will very likely be a
                very expensive robot. It remembers better than you and it counts
                faster than you. In 40 years, it will be broken and you can’t
                get replacement parts or afford a new robot.”
                <div> - Nathan Johnson </div>
              </h1>
            </div>
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
                      About
                      <div> </div>
                      FAQ
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
                    <img src={handshake} alt="Sell Automation Equipment"></img>
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
                    <img src={recycle} alt="Recycle Automation Equipment"></img>
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
                    <img src={plcIcon} alt="Sell PLC Milwaukee"></img>
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

          <div className="body">
            <div className="body1">
              <h1>ABOUT</h1>
              <p>
                NJT’s business model is to source parts from scrapped machines,
                surplus inventory, or parts from failed machine installations
                and resell them to operating factories.
              </p>
              <p>
                In many situations, utilizing a used or surplus part as a
                replacement could be the only course of action able to keep a
                machine running. This is due to the original manufacturers
                ceasing production of replacement parts after approximately 15
                years. This situation happens often in the USA and other
                developed/industrialized countries but it is even far more
                common in developing countries where machines are kept running
                for longer with a lower budget. Machinery that is considered to
                be past its useful lifespan in one country, is often sold to
                another and used for years. NJT seeks to find those parts that
                keep the old machines running all over the world
              </p>
              <p>
                For example, a machine is upgraded in a factory in Green Bay,
                Wisconsin. The old electronics are removed and replaced with new
                versions. The company also has an inventory of replacement parts
                which were never used. Those old electronics and surplus parts
                are of no value now that the machine is updated and have to be
                recycled at a monetary expense or be disposed of to a landfill
                at an environmental expense in both situations. NJT offers an
                alternative where the parts can be sold and reused. This
                benefits the original factory and will likely save a factory is
                Mexico that can’t fix it’s machines without those parts.
              </p>

              <div className="divider"></div>
              <h1>FAQ</h1>

              <p>Q: Where is NJT Automation located?</p>
              <p>
                A: NJT is based out of Milwaukee, Wisconsin and services the
                surrounding areas. Items nearby will be picked up at your
                location. If you are not near Milwaukee or Chicago, NJT will
                still buy your items and have them shipped via Fedex or a
                similar shipping service.
              </p>
              <div className="divider"></div>
              <p>Q: How are the items picked up?</p>
              <p>
                A: After payment is received, NJT will come to your location and
                remove the items or arrange a shipping company to do so.
              </p>
              <div className="divider"></div>
              <p>Q: What types of Payment? </p>
              <p>
                A: Items are purchased with cash or check. Paypal payment is
                also available.
              </p>
              <div className="divider"></div>
              <p>Q: What does NJT Automation do with the items?</p>
              <p>
                A: They are re-purposed and resold to other companies. Items
                that are in damaged condition will be repaired if possible or
                recycled for scrap materials. NJT will do minor repairs in house
                and outsource larger repairs to specialized companies or sell
                those damaged parts to a refurbishing center.
              </p>
              <div className="divider"></div>
              <p>Q: Where do you normally get your parts?</p>
              <p>
                A: Spare and surplus parts are not uncommon. Machines are
                constantly being upgraded and replaced. The best parts are
                new-in-box. Every factory has a spare-parts inventory. The parts
                are only used as back-ups. Eventually a machine is replaced with
                a newer unit and the company is left with the old parts that
                cannot be used on the new machine.
              </p>
              <div className="divider"></div>
              <p></p>

              <div className="divider"></div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default about
