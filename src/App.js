import React, { Component } from 'react'
// import logo from './logo.svg'
import lionhead from './images/lionhead2.svg'
// import Button from '@material-ui/core/Button'
import ReactSVG from 'react-svg';
import styled from 'styled-components'
import 'typeface-roboto'
import SwipeableTemporaryDrawer from './components/shared/SwipableNav'
import './App.css'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  background-color: #282c34;
`

const SvgWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Header = styled.div`
  width: 100%;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`

const StyledButton = styled.button`
  background-color: transparent;
  height: 30px;
  border-radius: 0px;
  border-color: #29B6F6;
  color: #29B6F6;
  min-width: 200px;
  font-weight: bold;
  justify-content: center;
  margin: 10px auto 10px auto;

  &:hover {
    background-color: #29B6F6;
    color: black;
  }
  &:focus {
    box-shadow: none;
    background-color: #29B6F6;
    color: black;
  }
`

class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        <SwipeableTemporaryDrawer />
        <SvgWrapper className='SvgWrapper'>
          <ReactSVG
            className='HomePageLogo'
            src={lionhead}
            svgStyle={{height: '60vh', width: 'auto'}}
          />
        </SvgWrapper>
        <Header>
          <Title>`DYNASTY DRAFT BOARD`</Title>
        </Header>
        <StyledButton>Normal</StyledButton>
        <StyledButton primary>Primary</StyledButton>
      </AppContainer>
    );
  }
}

export default App;
