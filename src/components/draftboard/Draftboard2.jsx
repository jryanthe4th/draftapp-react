import React from 'react'
import styled from 'styled-components'

const draftSelections = [
  {ownerName: 'Mack', pickNumber: '1.01', draftPick: 'Nick Bosa', playerPosition: 'RB'},
  {ownerName: 'Canaan', pickNumber: '1.02', draftPick: 'Josh Allen', playerPosition: 'WR'},
  {ownerName: 'Jensen', pickNumber: '1.03', draftPick: 'Quinnen Williams', playerPosition: 'TE'},
  {ownerName: 'Riley', pickNumber: '1.04', draftPick: 'Rashan Gary', playerPosition: 'QB'},
  {ownerName: 'Jensen', pickNumber: '1.05', draftPick: 'Josh Jacobs', playerPosition: 'DST'},
  {ownerName: 'Mack', pickNumber: '1.06', draftPick: 'Dwayne Haskins', playerPosition: 'RB'},
  {ownerName: 'Riley', pickNumber: '1.07', draftPick: 'Drew Lock', playerPosition: 'WR'},
  {ownerName: 'Jordan', pickNumber: '1.08', draftPick: 'Clelin Ferrell', playerPosition: 'TE'},
  {ownerName: 'Canaan', pickNumber: '1.09', draftPick: 'Jawaan Taylor', playerPosition: 'QB'},
  {ownerName: 'Mack', pickNumber: '1.10', draftPick: 'Kyler Murray', playerPosition: 'DST'},
  {ownerName: 'Riley', pickNumber: '1.11', draftPick: 'Greedy Williams', playerPosition: 'WR'},
  {ownerName: 'Danny', pickNumber: '1.12', draftPick: 'Montez Sweat', playerPosition: 'RB'}
]

const Draftboard2 = () =>
  <div>
    {draftSelections.map((draftSelection, i) => {
      return (
        <DraftSelection ownerName={draftSelection.ownerName} pickNumber={draftSelection.pickNumber} draftPick={draftSelection.draftPick} playerPosition={draftSelection.playerPosition} key={i} />
      )
    })}
  </div>

const DraftSelection = props =>
  <Card playerPosition={props.playerPosition}>
    <Name>{props.ownerName}</Name>
    <Bio>
      selects <strong>{props.playerPosition} {props.draftPick}</strong> with the{' '}
      <strong>{props.pickNumber}</strong>
    </Bio>
  </Card>

const Name = styled.h2`
margin-top: 0;
font-weight: 900;
margin-bottom: .75rem;
`

const Bio = styled.p`
margin: 0;
line-height: 1.5;
strong {
  font-weight: 900;
}
`

const Card = styled.div`
padding: 1.75rem;
margin: 0.5rem;
border-radius: 4px;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
color: white;
background: ${props => (props.playerPosition === 'RB' ? '#44bccc' : '#43f')};
`

export default Draftboard2