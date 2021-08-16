import React, { Component } from 'react'
import style from './Form.module.css'
import contactPic from './../../assets/images/foto1.jpg'

export default class Form extends Component {
  render() {
    return (
      <main className={`${style.gridInterno} content`}>
        <h3 className={style.titulo}>Faça um happy hour inesquecível!</h3>
        
        <img src={contactPic} className={style.col2img} alt="Typewriter"></img>
        <form className={style.form}>
          <label>Nome</label>
          
          <input className={style.meuInput}
           />
          <label>Email</label>
          <input className={style.meuInput} />
          <label>Telefone</label>
          <input className={style.meuInput} />
          <button className={style.meuBotao}>Enviar</button>
        </form>
      </main>
    );
  }
}