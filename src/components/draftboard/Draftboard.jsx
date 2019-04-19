import React, {Component} from 'react'
import {DraftPlayerModalButton} from './DraftPlayerModalButton'
import CreateDraftTable from './CreateDraftTable'

/* eslint react/prefer-stateless-function: 0 */
/* eslint no-useless-constructor: 0 */

const triggerText = 'DRAFT PLAYER'

const onSubmit = (event) => {
  event.preventDefault(event)
  console.log(event)
  console.log(event.target.value)
}

export default class Draftboard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='draftboard-container'>
        {/* <DraftPlayerModalButton triggerText={triggerText} onSubmit={onSubmit} /> */}
        <CreateDraftTable />
      </div>
    )
  }
}
