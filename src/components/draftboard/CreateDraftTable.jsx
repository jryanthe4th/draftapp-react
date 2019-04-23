import React from 'react'
import styled from 'styled-components'

const draft = [
  {round:'Round1', draftPicks:[
    {pickNumber: '1.01', ownerName: 'Mack', playerSelected: 'Nick Bosa', playerPosition: 'RB'},
    {pickNumber: '1.02', ownerName: 'Brayden', playerSelected: 'Josh Allen', playerPosition: 'WR'},
    {pickNumber: '1.03', ownerName: 'Jensen', playerSelected: 'Quinnen Williams', playerPosition: 'RB'},
    {pickNumber: '1.04', ownerName: 'Riley', playerSelected: 'Rashan Gary', playerPosition: 'WR'},
    {pickNumber: '1.05', ownerName: 'Jensen', playerSelected: 'Josh Jacobs', playerPosition: 'RB'},
    {pickNumber: '1.06', ownerName: 'Danny', playerSelected: 'Dwayne Haskins', playerPosition: 'WR'},
    {pickNumber: '1.07', ownerName: 'Mack', playerSelected: 'Drew Lock', playerPosition: 'WR'},
    {pickNumber: '1.08', ownerName: 'Jordan', playerSelected: 'Clelin Ferrell', playerPosition: 'TE'},
    {pickNumber: '1.09', ownerName: 'Jordan', playerSelected: 'Jawaan Taylor', playerPosition: 'QB'},
    {pickNumber: '1.10', ownerName: 'Austin', playerSelected: 'Kyler Murray', playerPosition: 'DST'},
    {pickNumber: '1.11', ownerName: 'Riley', playerSelected: 'Greedy Williams', playerPosition: 'WR'},
    {pickNumber: '1.12', ownerName: 'Joe', playerSelected: 'Montez Sweat', playerPosition: 'RB'},
  ]},
  {round:'Round2', draftPicks:[
    {pickNumber: '2.01', ownerName: 'Joe', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.02', ownerName: 'Brayden', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.03', ownerName: 'Joe', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.04', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.05', ownerName: 'Austin', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.06', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.07', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.08', ownerName: 'Joe', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.09', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.10', ownerName: 'Joe', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.11', ownerName: 'Brayden', playerSelected: '', playerPosition: ''},
    {pickNumber: '2.12', ownerName: 'Jake', playerSelected: '', playerPosition: ''},
  ]},
  {round:'Round3', draftPicks:[
    {pickNumber: '3.01', ownerName: 'Jake', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.02', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.03', ownerName: 'Nick', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.04', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.05', ownerName: 'Jordan', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.06', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.07', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.08', ownerName: 'Joe', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.09', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.10', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.11', ownerName: 'Brayden', playerSelected: '', playerPosition: ''},
    {pickNumber: '3.12', ownerName: 'Jake', playerSelected: '', playerPosition: ''},
  ]},
  {round:'Round4', draftPicks:[
    {pickNumber: '4.01', ownerName: 'Jake', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.02', ownerName: 'Jake', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.03', ownerName: 'Austin', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.04', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.05', ownerName: 'Nick', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.06', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.07', ownerName: 'Nick', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.08', ownerName: 'Jordan', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.09', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.10', ownerName: 'Joe', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.11', ownerName: 'Brayden', playerSelected: '', playerPosition: ''},
    {pickNumber: '4.12', ownerName: 'Jake', playerSelected: '', playerPosition: ''},
  ]},

  {round:'Round5', draftPicks:[
    {pickNumber: '5.01', ownerName: 'Austin', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.02', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.03', ownerName: 'Austin', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.04', ownerName: 'Riley', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.05', ownerName: 'Nick', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.06', ownerName: 'Danny', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.07', ownerName: 'Mack', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.08', ownerName: 'Jordan', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.09', ownerName: 'Canaan', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.10', ownerName: 'Joe', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.11', ownerName: 'Brayden', playerSelected: '', playerPosition: ''},
    {pickNumber: '5.12', ownerName: 'Jake', playerSelected: '', playerPosition: ''},
  ]},
]

const CreateDraftTable = () => (
  <StyledTableContainer className='table-container'>
    {draft.map((round, i) => {
      return (
        <StyledTableRow className='Rtable Rtable--4cols Rtable--collapse row' key={i}>
          {
            round.draftPicks.map((draftPick, i) => {
              return (
                <StyledTableColumn className='Rtable-cell column' key={i}>
                  <DraftPick
                    ownerName={draftPick.ownerName}
                    pickNumber={draftPick.pickNumber}
                    playerSelected={draftPick.playerSelected}
                    playerPosition={draftPick.playerPosition}
                    // key={i}
                    // {...getPositionColor()}
                  />
                </StyledTableColumn>
              )
            })
          }
        </StyledTableRow>
      )
    })}
  </StyledTableContainer>
)

const DraftPick = props =>
  <React.Fragment>
    <StyledOwnerName>{props.ownerName}</StyledOwnerName>
    <StyledDraftPickNumber>{props.pickNumber}</StyledDraftPickNumber>
    <StyledDraftPick playerPosition={props.playerPosition}>{props.playerSelected}</StyledDraftPick>
    <StyledDraftPickPosition playerPosition={props.playerPosition}>{props.playerPosition}</StyledDraftPickPosition>
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
  background-color: #212121;
  margin: 1px;
  text-align: center;
  /* color: #7befb2; */
`

const StyledDraftPick = styled.span`
  color: ${props => (props.playerPosition === 'WR' ? '#69F0AE' :
                      (props.playerPosition === 'RB' ? '#18FFFF' :
                       (props.playerPosition === 'TE' ? '#CCFF90' :
                        (props.playerPosition === 'QB' ? '#EA80FC' :
                          (props.playerPosition === 'DST' ? '#e57373' :
                            (props.playerPosition === 'K' ? '#e57373' :
                              '#fff'
                            ))))))
  };
  margin-top: 2px;
  font-weight: bold;
  /* margin: auto; */
  /* color: #fff; */
`

const StyledDraftPickPosition = styled.span`
  color: ${props => (props.playerPosition === 'WR' ? '#69F0AE' :
                      (props.playerPosition === 'RB' ? '#18FFFF' :
                       (props.playerPosition === 'TE' ? '#CCFF90' :
                        (props.playerPosition === 'QB' ? '#EA80FC' :
                          (props.playerPosition === 'DST' ? '#e57373' :
                            (props.playerPosition === 'K' ? '#e57373' :
                              '#fff'
                            ))))))
  };
  font-weight: bold;
  margin-top: auto;
  margin-bottom: 6px;
`

const StyledOwnerName = styled.span`
  flex-direction: column;
  display: inline-flex;
  text-align: left;
  padding-left: 1px;
  font-size: 0.75em;
  color: #9E9E9E;
  /* font-weight: bold; */
`

const StyledDraftPickNumber = styled.span`
  display: inline-flex;
  text-align: right;
  padding-left: 1px;
  font-size: 0.75em;
  color: #9E9E9E;
  /* font-weight: bold; */
`

export default CreateDraftTable