import React, {Component} from 'react'
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
  margin-top: 4px;
  font-weight: bold;
`


const triggerText = 'DRAFT PLAYER'
   const onSubmit = (event) => {
   event.preventDefault(event)
   console.log(event.target.name.value)
   console.log(event.target.email.value)
 }

export default class Draftboard extends Component {
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
                    <StyledOwnerName>Canaan</StyledOwnerName>
                    <StyledDraftPickNumber>1.02</StyledDraftPickNumber>
                    <StyledDraftPick>Josh Allen</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Jensen</StyledOwnerName>
                    <StyledDraftPickNumber>1.03</StyledDraftPickNumber>
                    <StyledDraftPick>Quinnen Williams</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>1.04</StyledDraftPickNumber>
                    <StyledDraftPick>Rashan Gary</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Jensen</StyledOwnerName>
                    <StyledDraftPickNumber>1.05</StyledDraftPickNumber>
                    <StyledDraftPick>Josh Jacobs</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Mack</StyledOwnerName>
                    <StyledDraftPickNumber>1.06</StyledDraftPickNumber>
                    <StyledDraftPick>Dwayne Haskins</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>1.07</StyledDraftPickNumber>
                    <StyledDraftPick>Drew Lock</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Jordan</StyledOwnerName>
                    <StyledDraftPickNumber>1.08</StyledDraftPickNumber>
                    <StyledDraftPick>Clelin Ferrell</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Canaan</StyledOwnerName>
                    <StyledDraftPickNumber>1.09</StyledDraftPickNumber>
                    <StyledDraftPick>Jawaan Taylor</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Mack</StyledOwnerName>
                    <StyledDraftPickNumber>1.10</StyledDraftPickNumber>
                    <StyledDraftPick>Kyler Murray</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>1.11</StyledDraftPickNumber>
                    <StyledDraftPick>Greedy Williams</StyledDraftPick>
                </div>
                <div className='Rtable-cell Rtable-cell--foot column'>
                    <StyledOwnerName>Danny</StyledOwnerName>
                    <StyledDraftPickNumber>1.12</StyledDraftPickNumber>
                    <StyledDraftPick>Montez Sweat</StyledDraftPick>
                </div>
              </div>

              {/* ROW 2 */}
              <div className='Rtable Rtable--4cols Rtable--collapse row'>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Mack</StyledOwnerName>
                    <StyledDraftPickNumber>2.01</StyledDraftPickNumber>
                    <StyledDraftPick>Daniel Jones</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.02</StyledDraftPickNumber>
                    <StyledDraftPick>Jeffery Simmons</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.03</StyledDraftPickNumber>
                    <StyledDraftPick>Jonah Williams</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                  <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.04</StyledDraftPickNumber>
                    <StyledDraftPick>Devin White</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.05</StyledDraftPickNumber>
                    <StyledDraftPick>Christian Wilkins</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.06</StyledDraftPickNumber>
                    <StyledDraftPick>Ed Oliver</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.07</StyledDraftPickNumber>
                    <StyledDraftPick>TJ Hockensen</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.08</StyledDraftPickNumber>
                    <StyledDraftPick>Marquise Brown</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.09</StyledDraftPickNumber>
                    <StyledDraftPick>Trayvon Mullen</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.10</StyledDraftPickNumber>
                    <StyledDraftPick>Jonathan Abram</StyledDraftPick>
                </div>
                <div className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.11</StyledDraftPickNumber>
                    <StyledDraftPick>Andre Dillard</StyledDraftPick>
                </div>
                <div className='Rtable-cell Rtable-cell--foot column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.12</StyledDraftPickNumber>
                    <StyledDraftPick>Deandre Baker</StyledDraftPick>
                </div>
              </div>

        </div>
      </div>
    )
  }
}
