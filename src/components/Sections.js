import React from "react";
import Section from "./Section";

const Sections = ({ contenu }) => {
  const initStore = contenu => {
    return contenu.reduce((acc, item) => {
      let cat = item.cat;
      acc[cat] ? (acc[cat] = [...acc[cat], item]) : (acc[cat] = [item]);
      acc.sections
        ? acc.sections.find(item => item === cat)
          ? null
          : (acc.sections = [...acc.sections, cat])
        : (acc.sections = [cat]);
      return acc;
    }, {});
  };

  //const tri = initStore(contenu);
  const tri = initStore(contenu);
  const sectionList = tri.sections;
  console.log(tri);

  return (
    <div>
      {sectionList ? (
        <div>
          {sectionList.map((item, i) => (
            <section key={i}>
              <h2>{item}</h2>
              <Section sectionContent={tri[item]} />
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
