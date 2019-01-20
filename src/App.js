import React, {Component, Fragment} from 'react';
import './App.css';
import Header from "./components/Header";
import HeroList from "./components/HeroList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <HeroList />
      </Fragment>
    );
  }
}

export default App;
