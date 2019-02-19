import React, {Component} from 'react'
import {ModalContainer} from './ModalContainer'
import DraftTable from './DraftTable'

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
        <ModalContainer triggerText={triggerText} onSubmit={onSubmit} />
        <DraftTable />
      </div>
    )
  }
}
