import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "./Store";

const initStore = store => {
  return store.reduce((acc, item) => {
    let cat = item.cat;
    item.section = acc[cat]
      ? (acc[cat] = [...acc[cat], item])
      : (acc[cat] = [item]);
    acc.sections
      ? acc.sections.find(item => item === cat)
        ? null
        : (acc.sections = [...acc.sections, cat])
      : (acc.sections = [cat]);
    return acc;
  }, {});
};

class App extends Component {
  state = initStore(store);
  render() {
    const { sections } = this.state;
    return <div>gggg</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
