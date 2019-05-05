import React, {Component} from 'react';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() {
        let imgsrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className="Pokecard">
               <h1>Name: {this.props.name}</h1>
               <h2>ID:{this.props.id}</h2>
               <h2>Type:{this.props.type}</h2>
               <h2>Exp:{this.props.exp}</h2>
               <img src={imgsrc} alt={this.props.name}/>
            </div>
        )
    }
}

export default Pokecard;