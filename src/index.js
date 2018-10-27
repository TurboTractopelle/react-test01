import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "./Store";
import Home from "./components/Home";
import Sections from "./components/Sections";
import Id from "./components/Id";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  initStore = store => {
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

  state = this.initStore(store);

  render() {
    console.log(this.state);
    const { sections } = this.state;
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sections">Sections</Link>
          <Link to="/id">User by id</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/sections"
            render={() => (
              <Sections sectionList={sections} contenu={this.state} />
            )}
          />
          <Route exact path="/id" component={Id} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
