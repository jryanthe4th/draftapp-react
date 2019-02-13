import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const FormWrapper = styled.div`
  text-align: center;
`

export const Form = ({ onSubmit }) => {
  return (
  <FormWrapper>
    <form onSubmit={onSubmit}>
      <div className='form-group'>
      {/* <label htmlFor='player-name'>Player Name</label> */}
      <TextField
        autoFocus
        id="standard-name"
        label="Player Name"
        margin="normal"
      />
      {/* <TextField
        id="text"
        label="Position"
        margin="normal"
      /> */}
      <InputLabel htmlFor="age-simple">Position</InputLabel>
          <Select>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'WR'}>WR</MenuItem>
            <MenuItem value={'RB'}>RB</MenuItem>
            <MenuItem value={'TE'}>TE</MenuItem>
            <MenuItem value={'QB'}>QB</MenuItem>
            <MenuItem value={'DST'}>DST</MenuItem>
          </Select>
      <h1>testing circleci config</h1>
      {/* <input
        type='text'
        className='form-control'
        id='player-name'
        required
        autoFocus
      />
      </div>
      <div className='form-group'>
      <label htmlFor='position'>Position</label>
      <input
        type='text'
        className='form-control'
        id='position'
        required
      /> */}
      </div>
      <div className='form-group'>
      <Button
        type='submit'
        className='draft-player-button'
        variant='contained'
        size='medium'
        color='secondary'
        style={{width: '200px', margin: '10px auto 10px auto', borderRadius: '0px'}}
      >
        SUBMIT SELECTION
      </Button>
      </div>
    </form>
  </FormWrapper>
  )
}

export default Form
