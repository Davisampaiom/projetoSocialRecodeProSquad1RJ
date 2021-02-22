import React from "react";
import { Card, CardContent } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styled from "styled-components";

import styles from "./style.css";

const Grid = styled.div`
  width: 40vh;
  height: 10vh;
  display: flex;
  flex-direction: row;

  justify-content: center !important;
`

const Texto = styled.text`


`;

const CardComponent = ({ className, cardTitle, value }) => (
  <Grid
    item
    xs={2}
    md={5}
    component={Card}
    className={cx(styles.card, className)}
  >
    <CardContent>
      <Texto >
        <center>{cardTitle}</center>
      </Texto>
      <Texto >
        <center>
          {" "}
          <br />
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </center>{" "} <hr />
      </Texto>
    </CardContent>
  </Grid>
);

export default CardComponent;
