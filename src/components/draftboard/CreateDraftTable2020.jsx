import React from 'react'
import styled from 'styled-components'

const draft2020 = [
  {round:'Round1', draftPicks:[
    {pickNumber: '1.01', ownerName: 'Jensen', playerSelected: 'Jonathan Taylor', playerPosition: 'RB'},
    {pickNumber: '1.02', ownerName: 'Jordan', playerSelected: 'CEH', playerPosition: 'RB'},
    {pickNumber: '1.03', ownerName: 'Austin', playerSelected: 'J.K. Dobbins', playerPosition: 'RB'},
    {pickNumber: '1.04', ownerName: 'Austin', playerSelected: 'Jerry Jeudy', playerPosition: 'WR'},
    {pickNumber: '1.05', ownerName: 'Purk', playerSelected: 'D`Andre Swift', playerPosition: 'RB'},
    {pickNumber: '1.06', ownerName: 'Jensen', playerSelected: 'Cam Akers', playerPosition: 'RB'},
    {pickNumber: '1.07', ownerName: 'Austin', playerSelected: 'CeeDee Lamb', playerPosition: 'WR'},
    {pickNumber: '1.08', ownerName: 'Canaan', playerSelected: 'Justin Jefferson', playerPosition: 'WR'},
    {pickNumber: '1.09', ownerName: 'Purk', playerSelected: 'Jalen Reagor', playerPosition: 'WR'},
    {pickNumber: '1.10', ownerName: 'Jensen', playerSelected: 'Ke`Shawn Vaughan', playerPosition: 'RB'},
    {pickNumber: '1.11', ownerName: 'Danny', playerSelected: 'Henry Ruggs', playerPosition: 'WR'},
    {pickNumber: '1.12', ownerName: 'Danny', playerSelected: 'Michael Pittman', playerPosition: 'WR'},
  ]},
  {round:'Round2', draftPicks:[
    {pickNumber: '2.01', ownerName: 'Nick', playerSelected: 'Brandon Aiyuk', playerPosition: 'WR'},
    {pickNumber: '2.02', ownerName: 'Jordan', playerSelected: 'Denzel Mims', playerPosition: 'WR'},
    {pickNumber: '2.03', ownerName: 'Danny', playerSelected: 'Joe Burrow', playerPosition: 'QB'},
    {pickNumber: '2.04', ownerName: 'Canaan', playerSelected: 'Tee Higgins', playerPosition: 'WR'},
    {pickNumber: '2.05', ownerName: 'Mack', playerSelected: 'Antonio Gibson', playerPosition: 'WR'},
    {pickNumber: '2.06', ownerName: 'Cannan', playerSelected: 'Zack Moss', playerPosition: 'RB'},
    {pickNumber: '2.07', ownerName: 'Brayden', playerSelected: 'Tua Tagovailoa', playerPosition: 'QB'},
    {pickNumber: '2.08', ownerName: 'Jordan', playerSelected: 'Gronk', playerPosition: 'TE'},
    {pickNumber: '2.09', ownerName: 'Danny', playerSelected: 'Laviska Shenault', playerPosition: 'WR'},
    {pickNumber: '2.10', ownerName: 'Nick', playerSelected: 'AJ Dillon', playerPosition: 'RB'},
    {pickNumber: '2.11', ownerName: 'Riley', playerSelected: 'Chase Claypool', playerPosition: 'WR'},
    {pickNumber: '2.12', ownerName: 'Riley', playerSelected: 'Anthony McFarland', playerPosition: 'RB'},
  ]},
  {round:'Round3', draftPicks:[
    {pickNumber: '3.01', ownerName: 'Purk', playerSelected: 'Cole Kmet', playerPosition: 'TE'},
    {pickNumber: '3.02', ownerName: 'Austin', playerSelected: 'Bryan Edwards', playerPosition: 'WR'},
    {pickNumber: '3.03', ownerName: 'Jake', playerSelected: 'Josh Kelly', playerPosition: 'RB'},
    {pickNumber: '3.04', ownerName: 'Joe', playerSelected: 'Van Jefferson', playerPosition: 'WR'},
    {pickNumber: '3.05', ownerName: 'Mack', playerSelected: 'James Robinson', playerPosition: 'RB'},
    {pickNumber: '3.06', ownerName: 'Jensen', playerSelected: 'Lynn Bowden', playerPosition: 'RB'},
    {pickNumber: '3.07', ownerName: 'Canaan', playerSelected: 'Darrynton Evans', playerPosition: 'RB'},
    {pickNumber: '3.08', ownerName: 'Joe', playerSelected: 'Deejay Dallas', playerPosition: 'RB'},
    {pickNumber: '3.09', ownerName: 'Brayden', playerSelected: 'Lamical Perine', playerPosition: 'RB'},
    {pickNumber: '3.10', ownerName: 'Austin', playerSelected: 'Justin Herbert', playerPosition: 'QB'},
    {pickNumber: '3.11', ownerName: 'Danny', playerSelected: 'Antonio GG', playerPosition: 'WR'},
    {pickNumber: '3.12', ownerName: 'Danny', playerSelected: 'Tyler Johnson', playerPosition: 'WR'},
  ]},
  {round:'Round4', draftPicks:[
    {pickNumber: '4.01', ownerName: 'Nick', playerSelected: 'Breshad Perriman', playerPosition: 'WR'},
    {pickNumber: '4.02', ownerName: 'Jordan', playerSelected: 'Devin Duvernay', playerPosition: 'WR'},
    {pickNumber: '4.03', ownerName: 'Purk', playerSelected: 'Adam Trautman', playerPosition: 'TE'},
    {pickNumber: '4.04', ownerName: 'Danny', playerSelected: 'KJ Hamler', playerPosition: 'WR'},
    {pickNumber: '4.05', ownerName: 'Mack', playerSelected: 'Jordan Love', playerPosition: 'QB'},
    {pickNumber: '4.06', ownerName: 'Canaan', playerSelected: 'Jalen Hurts', playerPosition: 'QB'},
    {pickNumber: '4.07', ownerName: 'Jake', playerSelected: 'Eno Benjamin', playerPosition: 'RB'},
    {pickNumber: '4.08', ownerName: 'Joe', playerSelected: 'Quintez Cephus', playerPosition: 'WR'},
    {pickNumber: '4.09', ownerName: 'Brayden', playerSelected: 'Isaiah Hodgins', playerPosition: 'WR'},
    {pickNumber: '4.10', ownerName: 'Jensen', playerSelected: 'Joe Reed', playerPosition: 'WR'},
    {pickNumber: '4.11', ownerName: 'Riley', playerSelected: 'Isaiah Coulter', playerPosition: 'WR'},
    {pickNumber: '4.12', ownerName: 'Purk', playerSelected: 'Jason Huntley', playerPosition: 'RB'},
  ]},
  {round:'Round5', draftPicks:[
    {pickNumber: '5.01', ownerName: 'Nick', playerSelected: 'Boston Scott', playerPosition: 'RB'},
    {pickNumber: '5.02', ownerName: 'Jordan', playerSelected: 'Jacob Eason', playerPosition: 'QB'},
    {pickNumber: '5.03', ownerName: 'Austin', playerSelected: 'Brycen Hopkins', playerPosition: 'TE'},
    {pickNumber: '5.04', ownerName: 'Danny', playerSelected: 'Michael Warren', playerPosition: 'RB'},
    {pickNumber: '5.05', ownerName: 'Mack', playerSelected: 'Dalton Keene', playerPosition: 'TE'},
    {pickNumber: '5.06', ownerName: 'Canaan', playerSelected: 'Devin Asiasi', playerPosition: 'TE'},
    {pickNumber: '5.07', ownerName: 'Jake', playerSelected: 'Donovan PJ', playerPosition: 'WR'},
    {pickNumber: '5.08', ownerName: 'Joe', playerSelected: 'Kirk Merritt', playerPosition: 'WR'},
    {pickNumber: '5.09', ownerName: 'Canaan', playerSelected: 'Xavier Jones', playerPosition: 'RB'},
    {pickNumber: '5.10', ownerName: 'Jensen', playerSelected: 'Quez Watkins', playerPosition: 'WR'},
    {pickNumber: '5.11', ownerName: 'Riley', playerSelected: 'Albert Okwuegbunam', playerPosition: 'TE'},
    {pickNumber: '5.12', ownerName: 'Purk', playerSelected: 'Dezmon Patmon', playerPosition: 'WR'},
  ]},
]

const CreateDraftTable2020 = () => (
  <StyledTableContainer className='table-container'>
    {draft2020.map((round, i) => {
      return (
        <StyledTableRow className='Rtable Rtable--4cols Rtable--collapse row' key={i}>
          {round.draftPicks.map((draftPick, i) => {
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
                       (props.playerPosition === 'TE' ? '#e57373' :
                        (props.playerPosition === 'QB' ? '#EA80FC' :
                          (props.playerPosition === 'DST' ? '#CCFF90' :
                            (props.playerPosition === 'K' ? '#CCFF90' :
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
                       (props.playerPosition === 'TE' ? '#e57373' :
                        (props.playerPosition === 'QB' ? '#EA80FC' :
                          (props.playerPosition === 'DST' ? '#CCFF90' :
                            (props.playerPosition === 'K' ? '#CCFF90' :
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

export default CreateDraftTable2020