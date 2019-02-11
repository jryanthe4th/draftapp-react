import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import SwipeableTemporaryDrawer from './shared/SwipableNav'
// import ErrorBox from './shared/ErrorBoxContainer';
import HomePage from './home/HomePageContainer'
import DraftboardPage from './draftboard/DraftboardContainer'

const StyledTemplate = styled.div`
  min-height: 100vh;
  background-color: #282c34;
`

const StyledFooter = styled.div`
  text-align: center;
`

export default function Template(props) {
  return (
    <Router>
      <StyledTemplate>
        <SwipeableTemporaryDrawer />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/draftboard' component={DraftboardPage} />
        <StyledFooter>&copy; 2018, DynastyDraftBoard, Inc.</StyledFooter>
      </StyledTemplate>
    </Router>
  )
}
