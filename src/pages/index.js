import * as React from "react"
import { Typography, Grid } from "@mui/material";
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby-material-ui-components";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Grid item sm={4}>
    <StaticImage
      src="../images/hireahubby-logo-header-2.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt={'hire a hubby'}
      />
      </Grid>
    <Grid item sm={8}>
    <Typography variant="h1">We're here to help</Typography>
    </Grid>
    <Grid item sm={12}>
    <Typography sx={{ mt: 3 }} variant="p">Let's be honest, over the years our lifestyles have evolved into <strong>digital chaos</strong>. Some of us weren't taught the <em>"handy"</em> skills of keeping up or changing a home... and some of us just don't have the <em>time</em> to complete home maintenance needs. 
    </Typography>
    <Typography variant="h4">That's where we come in! </Typography>
    <Typography variant="p">Hire a Hubby is here to help you with your <Link to='/services'>home maintenance and remodeling needs</Link> in the metro and central areas of Minnesota.</Typography>
    <Typography variant="p">Check out <Link target='_blank' href='https://www.facebook.com/hireahubbymn/photos'>what we have done</Link> so far! And then <Link target='_blank' href='https://fb.com/book/hireahubbymn/'>tell us about</Link> your needs and timeline. </Typography>
    <Typography variant="p">How are we different than your neighborhood handyman?</Typography>
    <ul>
      <li>We are efficient with timeline (in other words, we are super speedy!)</li>
      <li>We build great relationships (sometimes even friendships) with our customers. Bonus points if we can get a laugh from our jokes.</li>
      <li>We pay attention to detail, no cutting corners here.</li>
      <li>We will give our honest professional opinion (when it's asked for).</li>
      <li>Reasonable rates, we aren't going to rip you off.</li>
      </ul>
    </Grid>
  </Layout>
)

export default IndexPage
