import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginForm from "../components/app/loginForm.jsx";
import Home from "../components/home/home.jsx";
import CharacterList from "../components/characters/characterList.jsx";

export default class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
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
      </BrowserRouter>
    );
  }
}
