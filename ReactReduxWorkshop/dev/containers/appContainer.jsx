import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import LoginForm from "../components/app/loginForm.jsx";
import Home from "../components/home/home.jsx";
import CharacterList from "../components/characters/characterList.jsx";

const NavBar = props => (
  <ul className="list-inline navMenu">
    <li role="presentation">
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
    </li>
    <li role="presentation">
      <NavLink to="/characters" exact activeClassName="active">
        Characters
      </NavLink>
    </li>
  </ul>
);

export default class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div className="icaAndFireBody">
            <LoginForm />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/characters" exact component={CharacterList} />
              <Route
                render={props => (
                  <div className="spacerTop alert alert-danger">
                    Sorry, the resource you requested ({props.match.path}) does
                    not exist
                  </div>
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
