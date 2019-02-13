import React from 'react'
import {Container} from './Container'

/* eslint react/prefer-stateless-function: 0 */
/* eslint no-useless-constructor: 0 */

const triggerText = 'DRAFT PLAYER'
   const onSubmit = (event) => {
   event.preventDefault(event)
   console.log(event.target.name.value)
   console.log(event.target.email.value)
 }

export default class Draftboard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='draftboard-container'>
      <Container triggerText={triggerText} onSubmit={onSubmit} />
        <div className='table-container'>

          {/* ROW 1 */}
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
    )
  }
}
