import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

class Pokecard extends Component {
    render() {
        let imgsrc = `${POKE_API}`;
        if(this.props.id < 10) {
            imgsrc += `00${this.props.id}.png`;
        } else if (this.props.id < 100) {
            imgsrc += `0${this.props.id}.png`;
        } else {
            imgsrc += `${this.props.id}.png`;
        }
        return (
            <div className="Pokecard">
               <h1 className="Pokecard-title">Name: {this.props.name}</h1>
               <img src={imgsrc} alt={this.props.name}/>
               {/* <h2 className="Pokecard-data">ID:{this.props.id}</h2> */}
               <h2 className="Pokecard-data">Type: {this.props.type}</h2>
               <h2 className="Pokecard-data">Exp: {this.props.exp}</h2>
            </div>
        )
    }
}

export default Pokecard;