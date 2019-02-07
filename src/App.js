import React, { Component } from 'react'
// import logo from './logo.svg'
import lionhead from './images/lionhead2.svg'
// import Button from '@material-ui/core/Button'
import ReactSVG from 'react-svg';
import styled from 'styled-components'
import 'typeface-roboto'
import SwipeableTemporaryDrawer from './components/SwipableNav'
import './App.css'

const AppWrapper = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  /* text-align: center; */
  background-color: #282c34;
`

const Header = styled.div`
  /* flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white; */
`

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`

// const LearnReactLink = styled.a`
//   margin: 20px;
// `

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  /* background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px; */

  background-color: transparent !important;

  border-radius: 0px !important;
  border-color: #29B6F6 !important;
  color: #29B6F6 !important;
  min-width: 200px;
  font-weight: bold;

  &:hover {
  background-color: #29B6F6 !important;
  color: black !important;
  }
  &:focus {
  box-shadow: none !important;
  background-color: #29B6F6 !important;
  color: black !important;
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <SwipeableTemporaryDrawer />
        <ReactSVG
          className='HomePageLogo'
          src={lionhead}
          svgStyle={{height: '65vh', width: 'auto', backgroundSize: 'contain'}}
        />
        <Header>
          <Title>`DYNASTY DRAFT BOARD`</Title>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Button variant='contained' color='primary'>HELLO WORLD</Button> */}
        </Header>
        <StyledButton>Normal</StyledButton>
        <StyledButton primary>Primary</StyledButton>
      </AppWrapper>
    );
  }
}

export default App;
