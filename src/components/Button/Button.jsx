import React, { Component } from 'react'
import style from './Button.module.css'

class Button extends Component {
    constructor(props) {
        console.log('Fui inicializado');
        super(props)
        this.state = {
            disabled: false
        }
        this.meuClique = this.meuClique.bind(this)
    }

    meuClique() {
        console.log('Fui clicado!')
        this.setState({ disabled: true })

        setTimeout(() => {
            this.setState({ disabled: false })
        }, 3000)
    }

    render() {
        console.log('Renderizei')
        return (
            <button disabled={this.state.disabled}
                className={style.btn}
                onClick={this.meuClique}>
                {this.props.texto}
            </button>
        )
    }

    componentDidMount() {
        console.log('Fui montado');
    }

    componentDidUpdate() {
        console.log('Fui atualizado!');
    }
}

export default Button