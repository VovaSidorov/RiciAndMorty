import React, {Component, Fragment} from 'react';

import './App.css';
import Header from "./components/Header";

import SingleHeroPage from "./components/SingleHeroPage";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeroList from "./components/HeroList";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header
                        title="The Rick and Morty API"
                        sub_title="Hey, did you ever want to hold a Terry fold?"
                        sub_title_hidden="&nbsp;&nbsp;&nbsp;I got one right here, grab my terry flap&nbsp;&nbsp;&nbsp;"
                    />
                    <Route path="/" exact component={HeroList}/>
                    <Route path="/page/:page" exact component={HeroList}/>
                    <Route path="/personage/:id" component={SingleHeroPage}/>
                </Fragment>
            </Router>
        );
    }
}

export default App;