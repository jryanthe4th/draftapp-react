import React from 'react'
import styled from 'styled-components'

const draftSelections = [
  {value:'Round1', list:[
    {pickNumber: '1.01', ownerName: 'Mack', draftPick: 'Nick Bosa', playerPosition: 'RB'},
    {pickNumber: '1.02', ownerName: 'Canaan', draftPick: 'Josh Allen', playerPosition: 'WR'},
    {pickNumber: '1.03', ownerName: 'Jensen', draftPick: 'Quinnen Williams', playerPosition: 'TE'},
    {pickNumber: '1.04', ownerName: 'Riley', draftPick: 'Rashan Gary', playerPosition: 'QB'},
    {pickNumber: '1.05', ownerName: 'Jensen', draftPick: 'Josh Jacobs', playerPosition: 'DST'},
    {pickNumber: '1.06', ownerName: 'Mack', draftPick: 'Dwayne Haskins', playerPosition: 'RB'},
    {pickNumber: '1.07', ownerName: 'Riley', draftPick: 'Drew Lock', playerPosition: 'WR'},
    {pickNumber: '1.08', ownerName: 'Jordan', draftPick: 'Clelin Ferrell', playerPosition: 'TE'},
    {pickNumber: '1.09', ownerName: 'Canaan', draftPick: 'Jawaan Taylor', playerPosition: 'QB'},
    {pickNumber: '1.10', ownerName: 'Mack', draftPick: 'Kyler Murray', playerPosition: 'DST'},
    {pickNumber: '1.11', ownerName: 'Riley', draftPick: 'Greedy Williams', playerPosition: 'WR'},
    {pickNumber: '1.12', ownerName: 'Danny', draftPick: 'Montez Sweat', playerPosition: 'RB'},
  ]},
  {value:'Round2', list:[
    {pickNumber: '2.01', ownerName: 'Mack', draftPick: 'Nick Bosa 2', playerPosition: 'RB'},
    {pickNumber: '2.02', ownerName: 'Canaan', draftPick: 'Josh Allen 2', playerPosition: 'WR'},
    {pickNumber: '2.03', ownerName: 'Jensen', draftPick: 'Quinnen William 2', playerPosition: 'TE'},
    {pickNumber: '2.04', ownerName: 'Riley', draftPick: 'Rashan Gary 2', playerPosition: 'QB'},
    {pickNumber: '2.05', ownerName: 'Jensen', draftPick: 'Josh Jacobs 2', playerPosition: 'DST'},
    {pickNumber: '2.06', ownerName: 'Mack', draftPick: 'Dwayne Haskins 2', playerPosition: 'RB'},
    {pickNumber: '2.07', ownerName: 'Riley', draftPick: 'Drew Lock 2', playerPosition: 'WR'},
    {pickNumber: '2.08', ownerName: 'Jordan', draftPick: 'Clelin Ferrell 2', playerPosition: 'TE'},
    {pickNumber: '2.09', ownerName: 'Canaan', draftPick: 'Jawaan Taylor 2', playerPosition: 'QB'},
    {pickNumber: '2.10', ownerName: 'Mack', draftPick: 'Kyler Murray 2', playerPosition: 'DST'},
    {pickNumber: '2.11', ownerName: 'Riley', draftPick: 'Greedy Williams 2', playerPosition: 'WR'},
    {pickNumber: '2.12', ownerName: 'Danny', draftPick: 'Montez Sweat 2', playerPosition: 'RB'},
  ]},
]

const DraftTable = () =>
  <StyledTableContainer className='table-container'>
    {draftSelections.map((round, i) => {
      return (
        <StyledTableRow className='Rtable Rtable--4cols Rtable--collapse row' key={i}>
          {
            round.list.map((draftSelection, i) => {
              return (
                <StyledTableColumn className='Rtable-cell column'>
                  <DraftSelection ownerName={draftSelection.ownerName} pickNumber={draftSelection.pickNumber} draftPick={draftSelection.draftPick} playerPosition={draftSelection.playerPosition} />
                </StyledTableColumn>
              )
            })
          }
        </StyledTableRow>
      )
    })}
  </StyledTableContainer>

const DraftSelection = props =>
  <React.Fragment>
    <StyledOwnerName>{props.ownerName}</StyledOwnerName>
    <StyledDraftPickNumber>{props.pickNumber}</StyledDraftPickNumber>
    <StyledDraftPick>{props.draftPick}</StyledDraftPick>
    <StyledDraftPickPosition>{props.playerPosition}</StyledDraftPickPosition>
  </React.Fragment>

const StyledTableContainer = styled.div`
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
  min-height: 80px;
  min-width: 80px;
  border: solid transparent;
  border-width: 2px;
  border-radius: 1px;
  background-color: #18222c;
  margin: 1px;
  text-align: center;
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
  color: ${props => (props.playerPosition === 'RB' ? '#f973bc' : '#44bccc')};
  font-weight: bold;
`

export default DraftTable