/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import "./layout.css"
// import { Link } from "gatsby-material-ui-components"
import { StaticImage } from "gatsby-plugin-image"
import ConstructionIcon from '@mui/icons-material/Construction';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AssistantIcon from '@mui/icons-material/Assistant';
import theme from "../gatsby-theme-material-ui-top-layout/theme";
import { Link } from "gatsby-material-ui-components";
import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles({
  header: {
    background: theme.palette.secondary.lightest,
    padding: '12px 0 12px 0'
  },
  main: {
    minHeight: 'calc(100vh - 80px)',
    maxWidth: '1024px',
    margin: '0 auto 75px',
    padding: '0 16px 0 16px'
  },
  footer: {
    background: theme.palette.secondary.lightest,
    padding: '12px 0 12px 0'
  },
  nav: {
    display: 'flex',
    gap: 30,
    float: "right",
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none !important',
    alignItems: 'center',
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
      transition: 'color 1s ease'
   },
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header className={classes.header}>
      <Grid container  direction="row"
  justifyContent="space-around"
  alignItems="center">
      <Grid item xs={2}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
    <StaticImage
      src="../images/hireahubby-house-2.png"
      width={40}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt={data.site.siteMetadata?.title || `Title`}
      />
        </Link>
      </h1>
      </Grid>
      <Grid item xs={6}>
      <nav className={classes.nav}>
      <Link className={classes.link} to="/services"><ConstructionIcon /><span><Typography variant="span" sx={{ display: { xs: 'none', md: 'block' } }}>Services</Typography></span></Link>
      <Link className={classes.link}  target='_blank' href='https://www.facebook.com/hireahubbymn/photos'><AutoFixHighIcon /><span><Typography variant="span" sx={{ display: { xs: 'none', md: 'block' } }}>Previous work</Typography></span></Link>
      <Link className={classes.link} target='_blank' href="https://fb.com/book/hireahubbymn/"><AssistantIcon /><span><Typography variant="span" sx={{ display: { xs: 'none', md: 'block' } }}>Book a service</Typography></span></Link>
      
      </nav>
      </Grid>
      </Grid>
  </header>
        <main className={classes.main}>
          <Grid container direction="row" justifyContent="space-around" alignItems="center" sx={{ mt: 3 }}>
          {children}
          </Grid>
        </main>
        <footer
        className={classes.footer}>
           <Grid container  direction="row"
  justifyContent="space-around"
  alignItems="center">
      <Grid item xs={8} md={2}>
          © {new Date().getFullYear()} hireahubbymn.com
          </Grid>
          <Grid item xs={2}>
          <Link href='https://www.facebook.com/hireahubbymn' target='_blank'><FacebookIcon /></Link>
          </Grid>
          </Grid>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
