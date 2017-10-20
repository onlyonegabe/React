import * as IceAndFire from "../../iceAndFireRepository.js";
import React, { Component } from 'react';

export default class CharacterList extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            characters: []
        };
    }
    
    render () {
        return (
            <ul>
                {this.state.characters.map((c, ix) => <li key={ix}>{c.name}</li>)}
            </ul>
        );
    }

    componentDidMount () {
        IceAndFire
            .getCharacters(1, 25)
            .then(
                response => 
                    this.setState({
                        characters: response
                    }));
    }
}