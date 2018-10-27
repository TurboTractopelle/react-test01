import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const User = ({ id, name }) => {
  let url = "/id/" + id;
  console.log(url);
  return (
    <article>
      <b>
        <Link to={url}>{id}</Link>
      </b>{" "}
      - {name}
    </article>
  );
};

export default User;
