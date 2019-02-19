import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import SwipeableTemporaryDrawer from './shared/SwipableNav'
// import ErrorBox from './shared/ErrorBoxContainer';
import HomePage from './home/HomePageContainer'
import Draftboard from './draftboard/DraftboardContainer'

const StyledTemplate = styled.div`
  min-height: 100vh;
  background-color: #212F3D;
`

export default function Template(props) {
  return (
    <Router>
      <StyledTemplate>
        <SwipeableTemporaryDrawer />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/draftboard' component={Draftboard} />
      </StyledTemplate>
    </Router>
  )
}
