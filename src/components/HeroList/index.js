import React, {Component, Fragment} from 'react';
import './style.css';
import HeroListElement from "../HeroListElement";
import Pagination from "../Pagination";

import fetchPersonagesData from "../../services/index";

class HeroList extends Component {

    state = {
        heros: [],
        info: {}
    };

    createHerosListHTML = () => {
        const {heros} = this.state;

        if(heros.length){
            return heros.map(hero => <HeroListElement key={hero.id} hero={hero}/>)
        }
        return <div className="Home__SubTitle">No hero yet</div>
    };

    render() {
        console.log("render");
        const {page} = this.props.match.params;
        return(
            <Fragment>
                <section className="Home__ShowcaseWrapper">
                    <div className="Home__ShowcaseInner">

                        {this.createHerosListHTML()}

                    </div>
                </section>
                <section className="Pagination__Wrapper">
                 <Pagination page={page} info={this.state.info}/>
                </section>
            </Fragment>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");

        const {page} = this.props.match.params;

        fetchPersonagesData(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(res => {
                console.log(res);
                this.setState({
                    heros: res.results,
                    info: res.info,
                })
            })
    }
}

export default HeroList;