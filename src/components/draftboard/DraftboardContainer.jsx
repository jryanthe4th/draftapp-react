import React, {Component} from 'react'

import Draftboard from './Draftboard'
import Draftboard2 from './Draftboard2'

class DraftboardContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <Draftboard />
        <Draftboard2 />
      </React.Fragment>
    )
  }
}

export default DraftboardContainer
