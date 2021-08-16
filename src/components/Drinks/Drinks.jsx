import React, { Component } from 'react'

class Drinks extends Component {
    constructor(props) {
        super(props)
        this.url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
        this.state = {
            dados: [],
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Drinks</h1>
                <ul>
                {this.state.dados.map((item) => {
                    return <li key={item.idDrink}></li>
                })}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        fetch(this.url)
        .then(response => response.json())
        .then(json => {
            return this.setState({ dados: json.drinks })
        })
    }
}

export default Drinks