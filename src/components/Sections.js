import React from "react";
import Section from "./Section";

const Test = () => <p>Test</p>;

const Sections = ({ sectionList, contenu }) => {
  console.log(sectionList);
  return (
    <div>
      {sectionList ? (
        <div>
          {sectionList.map((item, i) => (
            <section key={i}>
              <h2>{item}</h2>
              <Section sectionContent={contenu[item]} />
            </section>
          ))}
        </div>
      ) : (
        <p>nope</p>
      )}
    </div>
  );
};

export default Sections;
