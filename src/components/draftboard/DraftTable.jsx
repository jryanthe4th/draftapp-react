import React from 'react'
import styled from 'styled-components'

const draftSelections = [
  {round:'Round1', draftPick:[
    {pickNumber: '1.01', ownerName: 'Mack', playerSelected: 'Nick Bosa', playerPosition: 'RB'},
    {pickNumber: '1.02', ownerName: 'Canaan', playerSelected: 'Josh Allen', playerPosition: 'WR'},
    {pickNumber: '1.03', ownerName: 'Jensen', playerSelected: 'Quinnen Williams', playerPosition: 'TE'},
    {pickNumber: '1.04', ownerName: 'Riley', playerSelected: 'Rashan Gary', playerPosition: 'QB'},
    {pickNumber: '1.05', ownerName: 'Jensen', playerSelected: 'Josh Jacobs', playerPosition: 'DST'},
    {pickNumber: '1.06', ownerName: 'Mack', playerSelected: 'Dwayne Haskins', playerPosition: 'RB'},
    {pickNumber: '1.07', ownerName: 'Riley', playerSelected: 'Drew Lock', playerPosition: 'WR'},
    {pickNumber: '1.08', ownerName: 'Jordan', playerSelected: 'Clelin Ferrell', playerPosition: 'TE'},
    {pickNumber: '1.09', ownerName: 'Canaan', playerSelected: 'Jawaan Taylor', playerPosition: 'QB'},
    {pickNumber: '1.10', ownerName: 'Mack', playerSelected: 'Kyler Murray', playerPosition: 'DST'},
    {pickNumber: '1.11', ownerName: 'Riley', playerSelected: 'Greedy Williams', playerPosition: 'WR'},
    {pickNumber: '1.12', ownerName: 'Danny', playerSelected: 'Montez Sweat', playerPosition: 'RB'},
  ]},
  {round:'Round2', draftPick:[
    {pickNumber: '2.01', ownerName: 'Mack', playerSelected: 'Nick Bosa 2', playerPosition: 'RB'},
    {pickNumber: '2.02', ownerName: 'Canaan', playerSelected: 'Josh Allen 2', playerPosition: 'WR'},
    {pickNumber: '2.03', ownerName: 'Jensen', playerSelected: 'Quinnen William 2', playerPosition: 'TE'},
    {pickNumber: '2.04', ownerName: 'Riley', playerSelected: 'Rashan Gary 2', playerPosition: 'QB'},
    {pickNumber: '2.05', ownerName: 'Jensen', playerSelected: 'Josh Jacobs 2', playerPosition: 'DST'},
    {pickNumber: '2.06', ownerName: 'Mack', playerSelected: 'Dwayne Haskins 2', playerPosition: 'RB'},
    {pickNumber: '2.07', ownerName: 'Riley', playerSelected: 'Drew Lock 2', playerPosition: 'WR'},
    {pickNumber: '2.08', ownerName: 'Jordan', playerSelected: 'Clelin Ferrell 2', playerPosition: 'TE'},
    {pickNumber: '2.09', ownerName: 'Canaan', playerSelected: 'Jawaan Taylor 2', playerPosition: 'QB'},
    {pickNumber: '2.10', ownerName: 'Mack', playerSelected: 'Kyler Murray 2', playerPosition: 'DST'},
    {pickNumber: '2.11', ownerName: 'Riley', playerSelected: 'Greedy Williams 2', playerPosition: 'WR'},
    {pickNumber: '2.12', ownerName: 'Danny', playerSelected: 'Montez Sweat 2', playerPosition: 'RB'},
  ]},
  {round:'Round3', draftPick:[
    {pickNumber: '3.01', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.02', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.03', ownerName: 'Jensen', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.04', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.05', ownerName: 'Jensen', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.06', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.07', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.08', ownerName: 'Jordan', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.09', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.10', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.11', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.12', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
  ]},
  {round:'Round4', draftPick:[
    {pickNumber: '4.01', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.02', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.03', ownerName: 'Jensen', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.04', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.05', ownerName: 'Jensen', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.06', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.07', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.08', ownerName: 'Jordan', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.09', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.10', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.11', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.12', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
  ]},

  {round:'Round5', draftPick:[
    {pickNumber: '5.01', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.02', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.03', ownerName: 'Jensen', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.04', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.05', ownerName: 'Jensen', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.06', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.07', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.08', ownerName: 'Jordan', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.09', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.10', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.11', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.12', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
  ]},
]

const DraftTable = () =>
  <StyledTableContainer className='table-container'>
    {draftSelections.map((round, i) => {
      return (
        <StyledTableRow className='Rtable Rtable--4cols Rtable--collapse row' key={i}>
          {
            round.draftPick.map((draftPick, i) => {
              return (
                <StyledTableColumn className='Rtable-cell column' key={i}>
                  <DraftSelection
                    ownerName={draftPick.ownerName}
                    pickNumber={draftPick.pickNumber}
                    playerSelected={draftPick.playerSelected}
                    playerPosition={draftPick.playerPosition}
                  />
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
    <StyledDraftPick>{props.playerSelected}</StyledDraftPick>
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
  color: ${props => (props.playerPosition === 'WR' ? '#f973bc' : '#44bccc')};
  font-weight: bold;
`

export default DraftTable