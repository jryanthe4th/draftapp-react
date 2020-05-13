import React, {Component} from 'react'
// import {DraftPlayerModalButton} from './DraftPlayerModalButton'
import CreateDraftTable2020 from './CreateDraftTable2020'

/* eslint react/prefer-stateless-function: 0 */
/* eslint no-useless-constructor: 0 */

// const triggerText = 'DRAFT PLAYER'

// const onSubmit = (event) => {
//   event.preventDefault(event)
//   console.log(event)
//   console.log(event.target.value)
// }

export default class Draftboard2020 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='draftboard-container'>
        {/* <DraftPlayerModalButton triggerText={triggerText} onSubmit={onSubmit} /> */}
        <CreateDraftTable2020 />
      </div>
    )
  }
}
