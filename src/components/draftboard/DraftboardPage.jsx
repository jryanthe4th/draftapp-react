import React from 'react'
import {Container} from './Container'
import styled from 'styled-components'
// import ExpansionPanel from '@material-ui/core/ExpansionPanel'
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import Typography from '@material-ui/core/Typography'
// import MediaQuery from 'react-responsive';

/* eslint react/prefer-stateless-function: 0 */
/* eslint no-useless-constructor: 0 */

const StyledOwnerName = styled.span`
  display: inline-flex;
  text-align: left;
  padding-left: 1px;
  font-size: 0.75em;
`

const StyledDraftPickNumber = styled.span`
  text-align: left;
  padding-left: 1px;
  font-size: 0.75em;
`

const StyledDraftPick = styled.span`
  margin: auto;
  font-weight: bold;
  margin-top: 0px;
`





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
                    <StyledOwnerName>Mack</StyledOwnerName>
                    <StyledDraftPickNumber>1.01</StyledDraftPickNumber>
                    <StyledDraftPick>Nick Bosa</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Canaan</span>
                    <span className='draft-pick-number'>1.02</span>
                    <span className='draft-pick'>Josh Allen</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Jensen</span>
                    <span className='draft-pick-number'>1.03</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>1.04</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Jensen</span>
                    <span className='draft-pick-number'>1.05</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Mack</span>
                    <span className='draft-pick-number'>1.06</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>1.07</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Jordan</span>
                    <span className='draft-pick-number'>1.08</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Canaan</span>
                    <span className='draft-pick-number'>1.09</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Mack</span>
                    <span className='draft-pick-number'>1.10</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>1.11</span>
                </div>
                <div className='Rtable-cell Rtable-cell--foot column'>
                    <span className='owner-name'>Danny</span>
                    <span className='draft-pick-number'>1.12</span>
                </div>
              </div>

              {/* ROW 2 */}
              <div className='Rtable Rtable--4cols Rtable--collapse row'>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Mack</span>
                    <span className='draft-pick-number'>2.01</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.02</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.03</span>
                </div>
                <div className='Rtable-cell column'>
                  <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.04</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.05</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.06</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.07</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.08</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.09</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.10</span>
                </div>
                <div className='Rtable-cell column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.11</span>
                </div>
                <div className='Rtable-cell Rtable-cell--foot column'>
                    <span className='owner-name'>Riley</span>
                    <span className='draft-pick-number'>2.12</span>
                </div>
              </div>

        </div>
      </div>
    )
  }
}
