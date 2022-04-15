import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Typography, Grid, ListItem, List, ListItemIcon, ListItemText } from "@mui/material";
import ConstructionIcon from '@mui/icons-material/Construction';

const Services = () => (
  <Layout>
    <Seo title="Services" />
    <Grid item xs={12}>
    <Typography variant="h1">What we can do</Typography>
    <List>
                <ListItem>
                  <ListItemIcon>
                  <ConstructionIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Everything bathroom (we love bathrooms!)"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                  <ConstructionIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Everything kitchen"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                  <ConstructionIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Flooring - vinyl, bamboo, wood, tile"
                  />
                  </ListItem>
                  <ListItem>
                  <ListItemIcon>
                  <ConstructionIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Drywall - tape, mud, sand, paint"
                  />
                  </ListItem>
                  <ListItem>
                  <ListItemIcon>
                  <ConstructionIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Accent wall - brick, wood, etc"
                  />
                  </ListItem>
                  <ListItem>
                  <ListItemIcon>
                  <ConstructionIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Painting - interior and exterior"
                  />
                  </ListItem>
                  <ListItem>
                  <ListItemIcon>
                  <ConstructionIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Deck"
                  />
                </ListItem>

            </List>
    </Grid>
  </Layout>
)

export default Services
