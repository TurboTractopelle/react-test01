import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => (
  <section>
    Display users by <Link to="/ids">id</Link> or{" "}
    <Link to="/sections">sector</Link>
  </section>
);

export default Home;
