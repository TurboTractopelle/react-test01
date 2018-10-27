import React, { Component } from "react";

const User = ({ id, name }) => (
  <article>
    <b>{id}</b> - {name}
  </article>
);

export default User;
