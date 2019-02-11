import React, {Component} from 'react'
import {AppContainer} from 'react-hot-loader';
import {hot} from 'react-hot-loader'

// Styles
import 'typeface-roboto'
import './css/App.scss'

// JSX Modules
import TemplateContainer from './components/TemplateContainer'

class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        <TemplateContainer />
      </AppContainer>
    );
  }
}

export default hot(module)(App)
