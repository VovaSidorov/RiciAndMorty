import React, {Component, Fragment} from 'react';
import './App.css';
import Header from "./components/Header";
import HeroList from "./components/HeroList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
          <Fragment>
        <Header title="THE RICK AND MORTY API" subTitle="Hey, did you ever want to hald a terry fold " subTitleHiden="&nbsp;&nbsp;&nbsp; I GOT ONE RIGHT HERE, GRAB MY TERRY FLAP"/>
        <Route path="/" component={HeroList}/>
          </Fragment>
      </Router>
    );
  }
}

export default App;
