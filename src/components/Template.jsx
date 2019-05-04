import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import SwipeableTemporaryDrawer from './shared/SwipableNav'
// import ErrorBox from './shared/ErrorBoxContainer';
import HomePage from './home/HomePageContainer'
import Draftboard from './draftboard/DraftboardContainer'
import Draftboard2 from './draftboard/Draftboard2'
import APIDataFetch from './draftboard/APIDataFetch'
import Signup from './account/SignupContainer'

export default function Template(props) {
  return (
    <Router>
      <StyledTemplate>
        <SwipeableTemporaryDrawer />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/draftboard' component={Draftboard} />
        <Route exact path='/draftboard2' component={Draftboard2} />
        <Route exact path='/APIDataFetch' component={APIDataFetch} />
        <Route exact path='/signup' component={Signup} />
      </StyledTemplate>
    </Router>
  )
}

// STYLED COMPONENTS
const StyledTemplate = styled.div`
  min-height: 100vh;
  background-color: #2e3131;
`
