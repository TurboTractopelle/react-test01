import React, { Component } from "react";
import User from "./User";

const Id = ({ contenu }) => {
  console.log(contenu);
  return (
    <section>
      {contenu.map((item, i) => (
        <User name={item.name} id={item.id} key={item.id} />
      ))}
    </section>
  );
};

export default Id;
