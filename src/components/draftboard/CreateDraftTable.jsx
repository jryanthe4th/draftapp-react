import React from 'react'
import styled from 'styled-components'

const draft = [
  {round:'Round1', draftPicks:[
    {pickNumber: '1.01', ownerName: 'Mack', playerSelected: 'Josh Jacobs', playerPosition: 'RB'},
    {pickNumber: '1.02', ownerName: 'Brayden', playerSelected: 'N`Keal Harry', playerPosition: 'WR'},
    {pickNumber: '1.03', ownerName: 'Jensen', playerSelected: 'Miles Sanders', playerPosition: 'RB'},
    {pickNumber: '1.04', ownerName: 'Riley', playerSelected: 'Parris Campbell', playerPosition: 'WR'},
    {pickNumber: '1.05', ownerName: 'Jordan', playerSelected: 'David Montgomery', playerPosition: 'RB'},
    {pickNumber: '1.06', ownerName: 'Danny', playerSelected: 'A.J. Brown', playerPosition: 'WR'},
    {pickNumber: '1.07', ownerName: 'Mack', playerSelected: 'T.J. Hockensen', playerPosition: 'TE'},
    {pickNumber: '1.08', ownerName: 'Jensen', playerSelected: 'Deebo Samuel', playerPosition: 'WR'},
    {pickNumber: '1.09', ownerName: 'Jordan', playerSelected: 'Noah Fant', playerPosition: 'TE'},
    {pickNumber: '1.10', ownerName: 'Jake', playerSelected: 'D.K. Metcalf', playerPosition: 'WR'},
    {pickNumber: '1.11', ownerName: 'Riley', playerSelected: 'Kyler Murray', playerPosition: 'QB'},
    {pickNumber: '1.12', ownerName: 'Joe', playerSelected: 'Damien Williams', playerPosition: 'RB'},
  ]},
  {round:'Round2', draftPicks:[
    {pickNumber: '2.01', ownerName: 'Joe', playerSelected: 'Mecole Hardman', playerPosition: 'WR'},
    {pickNumber: '2.02', ownerName: 'Brayden', playerSelected: 'Hakeem Butler', playerPosition: 'WR'},
    {pickNumber: '2.03', ownerName: 'Joe', playerSelected: 'Darrell Henderson', playerPosition: 'RB'},
    {pickNumber: '2.04', ownerName: 'Riley', playerSelected: 'Marquise Brown', playerPosition: 'WR'},
    {pickNumber: '2.05', ownerName: 'Jake', playerSelected: 'Devin Singletary', playerPosition: 'RB'},
    {pickNumber: '2.06', ownerName: 'Danny', playerSelected: 'Irv Smith Jr.', playerPosition: 'TE'},
    {pickNumber: '2.07', ownerName: 'Danny', playerSelected: 'J.J. Arcega-Whiteside', playerPosition: 'WR'},
    {pickNumber: '2.08', ownerName: 'Joe', playerSelected: 'Andy Isabella', playerPosition: 'WR'},
    {pickNumber: '2.09', ownerName: 'Canaan', playerSelected: 'Justice Hill', playerPosition: 'RB'},
    {pickNumber: '2.10', ownerName: 'Joe', playerSelected: 'Dwayne Haskins', playerPosition: 'QB'},
    {pickNumber: '2.11', ownerName: 'Joe', playerSelected: 'Terry McLaurin', playerPosition: 'WR'},
    {pickNumber: '2.12', ownerName: 'Jake', playerSelected: 'Damien Harris', playerPosition: 'RB'},
  ]},
  {round:'Round3', draftPicks:[
    {pickNumber: '3.01', ownerName: 'Jake', playerSelected: 'Kelvin Harmon', playerPosition: 'WR'},
    {pickNumber: '3.02', ownerName: 'Danny', playerSelected: 'Rodney Anderson', playerPosition: 'RB'},
    {pickNumber: '3.03', ownerName: 'Nick', playerSelected: 'Jalen Hurd', playerPosition: 'WR'},
    {pickNumber: '3.04', ownerName: 'Riley', playerSelected: 'Miles Boykin', playerPosition: 'WR'},
    {pickNumber: '3.05', ownerName: 'Jensen', playerSelected: 'Ryquell Armstead', playerPosition: 'RB'},
    {pickNumber: '3.06', ownerName: 'Danny', playerSelected: 'Devine Ozigbo', playerPosition: 'RB'},
    {pickNumber: '3.07', ownerName: 'Danny', playerSelected: 'Diontae Johnson', playerPosition: 'WR'},
    {pickNumber: '3.08', ownerName: 'Joe', playerSelected: 'Darwin Thompson', playerPosition: 'RB'},
    {pickNumber: '3.09', ownerName: 'Canaan', playerSelected: 'Alexander Mattison', playerPosition: 'RB'},
    {pickNumber: '3.10', ownerName: 'Mack', playerSelected: 'Benny Snell', playerPosition: 'RB'},
    {pickNumber: '3.11', ownerName: 'Brayden', playerSelected: 'Jace Sternberger', playerPosition: 'TE'},
    {pickNumber: '3.12', ownerName: 'Austin', playerSelected: 'Bryce Love', playerPosition: 'RB'},
  ]},
  {round:'Round4', draftPicks:[
    {pickNumber: '4.01', ownerName: 'Austin', playerSelected: 'Bruce Anderson', playerPosition: 'RB'},
    {pickNumber: '4.02', ownerName: 'Jake', playerSelected: 'Riley Ridley', playerPosition: 'WR'},
    {pickNumber: '4.03', ownerName: 'Austin', playerSelected: 'Dexter Williams', playerPosition: 'RB'},
    {pickNumber: '4.04', ownerName: 'Riley', playerSelected: 'Drew Lock', playerPosition: 'QB'},
    {pickNumber: '4.05', ownerName: 'Nick', playerSelected: 'C.J. Anderson', playerPosition: 'RB'},
    {pickNumber: '4.06', ownerName: 'Danny', playerSelected: 'Ty Johnson', playerPosition: 'RB'},
    {pickNumber: '4.07', ownerName: 'Nick', playerSelected: 'Trayveon Williams', playerPosition: 'RB'},
    {pickNumber: '4.08', ownerName: 'Jordan', playerSelected: 'Qadree Ollison', playerPosition: 'RB'},
    {pickNumber: '4.09', ownerName: 'Canaan', playerSelected: 'Jordan Scarlett', playerPosition: 'RB'},
    {pickNumber: '4.10', ownerName: 'Joe', playerSelected: 'Alex Barnes', playerPosition: 'RB'},
    {pickNumber: '4.11', ownerName: 'Brayden', playerSelected: 'Mike Weber', playerPosition: 'RB'},
    {pickNumber: '4.12', ownerName: 'Jake', playerSelected: 'Myles Gaskin', playerPosition: 'RB'},
  ]},
  {round:'Round5', draftPicks:[
    {pickNumber: '5.01', ownerName: 'Austin', playerSelected: 'Drew Sample', playerPosition: 'TE'},
    {pickNumber: '5.02', ownerName: 'Danny', playerSelected: 'Will Dissly', playerPosition: 'TE'},
    {pickNumber: '5.03', ownerName: 'Austin', playerSelected: 'James Williams', playerPosition: 'RB'},
    {pickNumber: '5.04', ownerName: 'Riley', playerSelected: 'KeeSean Johnson', playerPosition: 'WR'},
    {pickNumber: '5.05', ownerName: 'Nick', playerSelected: 'Daniel Jones', playerPosition: 'QB'},
    {pickNumber: '5.06', ownerName: 'Danny', playerSelected: 'Dawson Knox', playerPosition: 'TE'},
    {pickNumber: '5.07', ownerName: 'Mack', playerSelected: 'Gary Jennings', playerPosition: 'WR'},
    {pickNumber: '5.08', ownerName: 'Jordan', playerSelected: 'Jarrett Stidham', playerPosition: 'QB'},
    {pickNumber: '5.09', ownerName: 'Canaan', playerSelected: 'Ted Ginn Jr.', playerPosition: 'WR'},
    {pickNumber: '5.10', ownerName: 'Joe', playerSelected: 'Josh Oliver', playerPosition: 'TE'},
    {pickNumber: '5.11', ownerName: 'Brayden', playerSelected: 'Demarcus Robinson', playerPosition: 'WR'},
    {pickNumber: '5.12', ownerName: 'Jake', playerSelected: 'Hunter Renfrow', playerPosition: 'WR'},
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

export default CreateDraftTable