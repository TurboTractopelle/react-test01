import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "./Store";
import Home from "./components/Home";
import Sections from "./components/Sections";
import Id from "./components/Id";
import UserById from "./components/UserById";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  handleEditById = (id, value) => {
    this.setState(prevState => {
      let perso = (prevState.store[id].name = value);
      return { ...prevState, perso };
    });
  };

  state = { store: store };

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/ids">Users by id</Link>
          <Link to="/sections">Users by sector</Link>
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
