import React, { Component } from 'react'
// import logo from './logo.svg'
import lionhead from './images/lionhead2.svg'
import Button from '@material-ui/core/Button'
import ReactSVG from 'react-svg';
import styled from 'styled-components'
import 'typeface-roboto'
import './App.css'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Header = styled.div`
  /* background-image: url('./images/lionhead2.svg'); */
  /* background-repeat: no-repeat; */
  /* background-size: 100px; */
  /* width: 200px; */
  /* height: 200px; */
  /* display: block; */
  /* background-position: center; */
  /* background-size: contain; */
  /* height: 65vh; */

  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const LearnReactLink = styled.a`
  margin: 20px;
`

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const StyledReactSVG = styled(ReactSVG)`
  /* .svg {
    viewBox: 0 0 100 100
  } */
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <Title>HELLO WORLD STYLED COMPONENT</Title>
          <ReactSVG
            className='HomePageLogo'
            src={lionhead}
            svgStyle={{width: '40vw', height: 'auto', backgroundRepeat: 'repeat'}}
          />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <LearnReactLink
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </LearnReactLink>
          <Button variant='contained' color='primary'>HELLO WORLD</Button>
          <StyledButton>Normal</StyledButton>
          <StyledButton primary>Primary</StyledButton>
        </Header>
      </div>
    );
  }
}

export default App;
