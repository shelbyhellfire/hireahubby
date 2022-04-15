import * as React from "react"
import { Typography, Grid } from "@mui/material";
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <Grid item xs={12}>
    <Typography variant="h1">Talk to us!</Typography>
    </Grid>
  </Layout>
)

export default Contact
