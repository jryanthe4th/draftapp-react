import React from 'react';

/* eslint react/prefer-stateless-function: 0 */
/* eslint no-useless-constructor: 0 */

export default class Draftboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='draftboard-container'>
        <div className='table-container'>
          <h1>This is the table-container</h1>

          {/* ROW 1 */}
          <h3>ROUND 1</h3>
          <div className='Rtable Rtable--4cols Rtable--collapse row'>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Mack</span>
                <span>1.01</span>
            </div>
            <div className='Rtable-cell column'>
              
                <span className='owner-name'>Canaan</span>
                <span>1.02</span>
              
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Jensen</span>
                <span>1.03</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>1.04</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Jensen</span>
                <span>1.05</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Mack</span>
                <span>1.06</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>1.07</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Jordan</span>
                <span>1.08</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Canaan</span>
                <span>1.09</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Mack</span>
                <span>1.10</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>1.11</span>
            </div>
            <div className='Rtable-cell Rtable-cell--foot column'>
                <span className='owner-name'>Danny</span>
                <span>1.12</span>
            </div>
          </div>

          {/* ROW 2 */}
          <div className='Rtable Rtable--4cols Rtable--collapse row'>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Mack</span>
                <span>2.01</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>2.02</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>2.03</span>
            </div>
            <div className='Rtable-cell column'>
              <span className='owner-name'>Riley</span>
                <span>2.04</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>2.05</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>2.06</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>2.07</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>2.08</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>2.09</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>2.10</span>
            </div>
            <div className='Rtable-cell column'>
                <span className='owner-name'>Riley</span>
                <span>2.11</span>
            </div>
            <div className='Rtable-cell Rtable-cell--foot column'>
                <span className='owner-name'>Riley</span>
                <span>2.12</span>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
