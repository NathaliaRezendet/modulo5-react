import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button'
import Drinks from './components/Drinks/Drinks'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>

            <Route path="/home" exact>
              <div className="content">
                <Button texto="Entrar!" />
              </div>
            </Route>

            <Route path="/contact">
              <Form />
            </Route>

            <Route path="/drinks">
              <Drinks />
            </Route>

            <Route path="*">
              <h1>Oops não encontramos o que você precisa :/</h1>
            </Route>

          </Switch>

        </Router>
        <Footer />
      </div>

    )
  }
}

export default App;