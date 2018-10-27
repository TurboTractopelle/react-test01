import React, { Component } from "react";
import User from "./User";

const Section = ({ sectionContent }) => {
  console.log(sectionContent);
  return (
    <article>
      {sectionContent.map(item => (
        <User name={item.name} id={item.id} key={item.id} />
      ))}
    </article>
  );
};

export default Section;
