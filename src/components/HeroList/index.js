import React, {Component} from 'react';
import './style.css';
import HeroListElement from "../HeroListElement";

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
        return(

            <section className="Home__ShowcaseWrapper">
                <div className="Home__ShowcaseInner">

                    {this.createHerosListHTML()}
                </div>
            </section>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");

        fetch("https://rickandmortyapi.com/api/character/?page=2")
            .then(res => res.json())
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

