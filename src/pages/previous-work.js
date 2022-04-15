import * as React from "react"
import { Typography, Grid } from "@mui/material";
import Layout from "../components/layout"
import Seo from "../components/seo"

const PreviousWork = () => (
  <Layout>
    <Seo title="Previous work" />
    <Grid item xs={12}>
    <Typography variant="h1">Look at what we've done!</Typography>
    </Grid>
  </Layout>
)

export default PreviousWork
