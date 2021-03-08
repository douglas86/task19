import React from "react";
import useStyles from "./Styles";

const Left = () => {
  const classes = useStyles();
  let lab = [
    "e books",
    "Movies",
    "podcasts",
    "music",
    "audiobook",
    "short film",
    "TV shows",
    "software",
    "all",
  ];
  return (
    <div>
      <h1 className={classes.left}>Itunes search API</h1>
      <input
        className={classes.input}
        type="text"
        placeholder="Search"
        required
      />
      {lab.map((i) => (
        <div>
          <input type="radio" name="rad" className={classes.radio} />
          <label>{i}</label>
        </div>
      ))}
    </div>
  );
};

export default Left;
