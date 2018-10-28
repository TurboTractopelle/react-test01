import React, { Component } from "react";
import User from "./User";

const Id = ({ contenu }) => {
  return (
    <section>
      {contenu.map((item, i) => {
        console.log(item.cat);
        return (
          <User
            name={item.name}
            id={item.id}
            section={item.cat}
            key={item.id}
          />
        );
      })}
    </section>
  );
};

export default Id;
