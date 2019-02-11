import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styling
import lionhead from '../css/images/lionhead2.svg'
import ReactSVG from 'react-svg'
import styled from 'styled-components'
import SwipeableTemporaryDrawer from './shared/SwipableNav'

// import DashboardPage from './dashboard/DashboardPageContainer';
// import ErrorBox from './shared/ErrorBoxContainer';
// import HeaderContainer from './shared/HeaderContainer';
// import HomePage from './home/HomePageContainer';

const TemplateWrapper = styled.div`
  width: 100%;
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

export default function Template(props) {
  // const { progress } = props;
  return (
    <Router>
      <TemplateWrapper>
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
        <footer>&copy; 2018, DynastyDraftBoard, Inc.</footer>
      </TemplateWrapper>
    </Router>
  );
}
