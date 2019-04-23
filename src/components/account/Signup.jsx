import React, {Component, Fragment} from 'react'
import SignupForm from './SignupForm'

export default class Signup extends Component {
  render() {
    return (
      <Fragment>
        <h1>Sign Up here!</h1>
        <SignupForm />
      </Fragment>
    )
  }
}