import React, { Component } from 'react'
import { Films } from '../../shared/ListOfFilms';
import FilmsPRE from './FilmsPRE';
export class Main extends Component {
    constructor(){
        super();
        this.state = {
            films : Films
        }
    }
  render() {
    return (
        <FilmsPRE films = {this.state.films}/>
    )
  }
}
export default Main;

