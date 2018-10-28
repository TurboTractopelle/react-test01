import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const User = ({ id, name, section = false }) => {
  let url = "/id/" + id;
  return (
    <article>
      <span>
        <Link to={url}>{id}</Link>
        {name}
      </span>{" "}
      {section && <span className="section">{section}</span>}
    </article>
  );
};

export default User;
