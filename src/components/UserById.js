import React, { Component } from "react";

const UserById = ({ match, content }) => {
  const id = match.params.id;
  console.log(content.store);
  return <div> {content.store[id].name} </div>;
};

export default UserById;
