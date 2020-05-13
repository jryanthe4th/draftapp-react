import React, {Component} from 'react'

import Draftboard from './Draftboard'
import APIDataFetch from './APIDataFetch'

class DraftboardContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <Draftboard />
        {/* <APIDataFetch /> */}
      </React.Fragment>
    )
  }
}

export default DraftboardContainer
