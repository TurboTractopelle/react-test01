import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "./Store";
import Home from "./components/Home";
import Sections from "./components/Sections";
import Id from "./components/Id";
import UserById from "./components/UserById";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const UserId = ({ match }) => {
  console.log(match.params.id);
  return <UserById id={match.params.id} />;
};

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

  handleEditById = (id, value) => {
    this.setState(prevState => {
      let perso = (prevState.store[id].name = value);
      return { ...prevState, perso };
    });
  };

  state = { store: store };
  render() {
    const { store } = this.state.store;
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sections">Sections</Link>
          <Link to="/ids">Users by id</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/sections"
            render={() => <Sections contenu={this.state.store} />}
          />
          <Route
            exact
            path="/ids"
            render={() => <Id contenu={this.state.store} />}
          />
          <Route
            path="/id/:id"
            render={props => (
              <UserById
                content={this.state}
                {...props}
                handleEditById={this.handleEditById}
              />
            )}
          />
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
