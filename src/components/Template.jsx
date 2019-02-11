import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DashboardPage from './dashboard/DashboardPageContainer';
import ErrorBox from './shared/ErrorBoxContainer';
import HeaderContainer from './shared/HeaderContainer';
import HomePage from './home/HomePageContainer';

export default function Template(props) {
  const { progress } = props;
  return (
    <Router>
      <div className='template-wrapper'>
        <HeaderContainer username='anonymous' />
        <div className='page-content container-fluid'>
          <ErrorBox />
          <Route exact path='/' component={HomePage} />
          <Route path='/dashboard' component={DashboardPage} />
          <div className='loader-wrapper' style={progress > 0 ? { display: 'block' } : { display: 'none' }}>
            <div className='loader-box'>
              <div className='loader'>Loading...</div>
            </div>
          </div>
        </div>
        <footer>&copy; 2018, DynastyDraftBoard, Inc.</footer>
      </div>
    </Router>
  );
}
