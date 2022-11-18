import React, { Component } from 'react';
import "./style.css"

export default class card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      img: "#",
      height: "",
      weight: "",
    }

  }

  fetchApi = async () => {
    let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
    let data = await resp.json();
    console.log(data);

    this.setState({
      img: data.sprites.other["official-artwork"].front_default,
      weight: data.weight,
      height: data.height,
      type: data.types[0].type.name,

    })
  }


  handlerName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handlerSubmit = event => {
    let aux = this.state.name
    console.log(aux);
    event.preventDefault();
    this.fetchApi();
  }

  render() {
    return (
      <nav className="navbar bg-dark">
        <div className="navbardiv">
          <a className="navbar-brand">
            <img className='pokeimg' src='https://assets.website-files.com/62c1627eee0defc3a1256898/62cf234679dbabe18fa50a1e_pokeapi_256%201.svg' alt='' width='220px' height='220px'></img>
          </a>
          <form onSubmit={this.handlerSubmit} className="input" role="search">
            <input
              className="inputtt"
              type="search"
              aria-label="Search"
              placeholder="Ingrese el nombre del pokemón"
              value={this.state.name}
              onChange={this.handlerName}
            ></input>
            <br />
            <br />
            <button className="botoncito" type="submit">Search</button>
            <br />
            <br />
            <div className="a-box">
              <div className="img-container">
                <div className="img-inner">
                  <div className="inner-skew">
                    <img src={this.state.img} alt="" />
                  </div>
                </div>
              </div>
              <div className="text-container">
                <h3>{this.state.name}</h3>
                <div>
                  <p className="parrafo">Weight: {this.state.weight}Kg</p>
                  <p className="parrafo">Height: {this.state.height}m</p>
                  <p className="parrafo">Type:   {this.state.type}</p>


                </div>
              </div>
            </div>


          </form>
        </div>
      </nav>

    )
  }
}
