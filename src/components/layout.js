import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import Footer from "./footer"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#343434",
    },
    secondary: {
      main: "#6d6d6d",
    },
  },
  home: {
    color: "#343434",
  },
})

const Layout = ({ children }) => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            padding: 0,
          }}
        >
          <main>{children}</main>
          <Footer></Footer>
        </div>
      </MuiThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
