import React from "react";
import useStyles from "./Styles";

const Left = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.left}>Itunes search API</h1>
      <input
        className={classes.input}
        type="text"
        placeholder="Search"
        required
      />
      <input type="radio" className={classes.radio} />
      <label>e books</label>
    </div>
  );
};

export default Left;
