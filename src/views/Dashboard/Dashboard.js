import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

export default function Dashboard() {

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
         
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
         
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
         
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
         
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
         
        </GridItem>
      </GridContainer>
    </div>
  );
}
