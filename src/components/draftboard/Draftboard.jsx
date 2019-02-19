import React, {Component} from 'react'
import {ModalContainer} from './ModalContainer'
import styled from 'styled-components'
// import ExpansionPanel from '@material-ui/core/ExpansionPanel'
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import Typography from '@material-ui/core/Typography'
// import MediaQuery from 'react-responsive';

/* eslint react/prefer-stateless-function: 0 */
/* eslint no-useless-constructor: 0 */

const StyledTableContainer = styled.div`
  text-align: center;
  margin: 0 10 0 10;
  overflow-x: scroll;
`

const StyledTableRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
`

const StyledTableColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 80px;
  min-width: 80px;
  border: solid transparent;
  border-width: 2px;
  border-radius: 1px;
  // background-color: #333;
  background-color: #18222c;
  // border-color: #EF5350;
  margin: 1px;
  color: #7befb2;
`

const StyledOwnerName = styled.span`
  display: inline-flex;
  text-align: left;
  padding-left: 1px;
  font-size: 0.75em;
  /* font-weight: bold; */
`

const StyledDraftPickNumber = styled.span`
  text-align: left;
  padding-left: 1px;
  font-size: 0.75em;
  /* font-weight: bold; */
`

const StyledDraftPick = styled.span`
  margin-top: 4px;
  font-weight: bold;
`

const StyledDraftPickPosition = styled.span`
  color: ${props => (props.position === 'RB' ? '#44bccc' : '#f973bc')};
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
      <ModalContainer triggerText={triggerText} onSubmit={onSubmit} />
        <StyledTableContainer className='table-container'>

              {/* ROW 1 */}
              <StyledTableRow className='Rtable Rtable--4cols Rtable--collapse row'>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Mack</StyledOwnerName>
                    <StyledDraftPickNumber>1.01</StyledDraftPickNumber>
                    <StyledDraftPick>Nick Bosa</StyledDraftPick>
                    <StyledDraftPickPosition>{'RB'}</StyledDraftPickPosition>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Canaan</StyledOwnerName>
                    <StyledDraftPickNumber>1.02</StyledDraftPickNumber>
                    <StyledDraftPick>Josh Allen</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Jensen</StyledOwnerName>
                    <StyledDraftPickNumber>1.03</StyledDraftPickNumber>
                    <StyledDraftPick>Quinnen Williams</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>1.04</StyledDraftPickNumber>
                    <StyledDraftPick>Rashan Gary</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Jensen</StyledOwnerName>
                    <StyledDraftPickNumber>1.05</StyledDraftPickNumber>
                    <StyledDraftPick>Josh Jacobs</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Mack</StyledOwnerName>
                    <StyledDraftPickNumber>1.06</StyledDraftPickNumber>
                    <StyledDraftPick>Dwayne Haskins</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>1.07</StyledDraftPickNumber>
                    <StyledDraftPick>Drew Lock</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Jordan</StyledOwnerName>
                    <StyledDraftPickNumber>1.08</StyledDraftPickNumber>
                    <StyledDraftPick>Clelin Ferrell</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Canaan</StyledOwnerName>
                    <StyledDraftPickNumber>1.09</StyledDraftPickNumber>
                    <StyledDraftPick>Jawaan Taylor</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Mack</StyledOwnerName>
                    <StyledDraftPickNumber>1.10</StyledDraftPickNumber>
                    <StyledDraftPick>Kyler Murray</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>1.11</StyledDraftPickNumber>
                    <StyledDraftPick>Greedy Williams</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell Rtable-cell--foot column'>
                    <StyledOwnerName>Danny</StyledOwnerName>
                    <StyledDraftPickNumber>1.12</StyledDraftPickNumber>
                    <StyledDraftPick>Montez Sweat</StyledDraftPick>
                </StyledTableColumn>
              </StyledTableRow>

              {/* ROW 2 */}
              <StyledTableRow className='Rtable Rtable--4cols Rtable--collapse row'>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Mack</StyledOwnerName>
                    <StyledDraftPickNumber>2.01</StyledDraftPickNumber>
                    <StyledDraftPick>Daniel Jones</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.02</StyledDraftPickNumber>
                    <StyledDraftPick>Jeffery Simmons</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.03</StyledDraftPickNumber>
                    <StyledDraftPick>Jonah Williams</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                  <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.04</StyledDraftPickNumber>
                    <StyledDraftPick>Devin White</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.05</StyledDraftPickNumber>
                    <StyledDraftPick>Christian Wilkins</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.06</StyledDraftPickNumber>
                    <StyledDraftPick>Ed Oliver</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.07</StyledDraftPickNumber>
                    <StyledDraftPick>TJ Hockensen</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.08</StyledDraftPickNumber>
                    <StyledDraftPick>Marquise Brown</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.09</StyledDraftPickNumber>
                    <StyledDraftPick>Trayvon Mullen</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.10</StyledDraftPickNumber>
                    <StyledDraftPick>Jonathan Abram</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.11</StyledDraftPickNumber>
                    <StyledDraftPick>Andre Dillard</StyledDraftPick>
                </StyledTableColumn>
                <StyledTableColumn className='Rtable-cell Rtable-cell--foot column'>
                    <StyledOwnerName>Riley</StyledOwnerName>
                    <StyledDraftPickNumber>2.12</StyledDraftPickNumber>
                    <StyledDraftPick>Deandre Baker</StyledDraftPick>
                </StyledTableColumn>
              </StyledTableRow>

        </StyledTableContainer>
      </div>
    )
  }
}
