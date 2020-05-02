import React from "react"
import { withStyles } from "@material-ui/styles"

//MUI
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"

// Mui Icons
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded"
import MessageIcon from "@material-ui/icons/Message"
import EmailIcon from "@material-ui/icons/Email"

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: 30,
  },

  title: {
    flexGrow: 1,
    fontSize: "2rem",
  },
  Toolbar: {
    maxWidth: 1400,
    width: "100%",
    margin: "auto",
  },
  logoHeader: {
    fontFamily: "Arial",
    fontSize: "1.2rem",
    display: "inline-block",
    color: "#959595",
    letterSpacing: 0,
    paddingLeft: 8,
  },
  icons: {
    fontSize: "3rem",
    color: "#959595",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
})

class icons extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Typography variant="h4" className={classes.title}>
          <Tooltip title="Call NJT">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              href="tel:+1-414-331-5954"
            >
              <PhoneForwardedIcon className={classes.icons} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Send Text Message">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              href="sms:+1-414-331-5954"
            >
              <MessageIcon className={classes.icons} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Email NJT">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              href="mailto:nathan@njtautomation.com?Subject=NJT%20INQUIRY"
            >
              <EmailIcon className={classes.icons} />
            </IconButton>
          </Tooltip>
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(icons)
