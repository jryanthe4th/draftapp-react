import React from 'react'

export const Form = ({ onSubmit }) => {
  return (
  <form onSubmit={onSubmit}>
    <div className='form-group'>
    <label htmlFor='player-name'>Player Name</label>
    <input
      type='text'
      className='form-control'
      id='player-name'
      required
    />
    </div>
    <div className='form-group'>
    <label htmlFor='position'>Position</label>
    <input
      type='text'
      className='form-control'
      id='position'
      required
    />
    </div>
    <div className='form-group'>
    <button className='form-control btn btn-primary' type='submit'>
      Submit
    </button>
    </div>
  </form>
  )
}

export default Form
