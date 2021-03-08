import React from "react";
import useStyles from "./Styles";

const Left = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.left}>Itunes search API</h1>
    </div>
  );
};

export default Left;
