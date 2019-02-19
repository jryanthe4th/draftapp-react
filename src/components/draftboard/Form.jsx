import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'

const FormWrapper = styled.div`
  text-align: center;
`

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

export const Form = () => {
  return (
  <FormWrapper>
    <form autoComplete="off">
      <div className='form-group'>
        <TextField
          autoFocus
          id="standard-name"
          className='input-field'
          label="Player Name"
          margin="normal"
        />
      </div>
      <div className='form-group'>


      <FormControl>
          <Select
            name='player-position'
            value={'Position'}
            inputProps={{
              id: 'age-required',
            }}

          >
            <MenuItem value={'Position'} disabled>
              Position
            </MenuItem>
            <MenuItem value={'WR'}>WR</MenuItem>
            <MenuItem value={'RB'}>RB</MenuItem>
            <MenuItem value={'TE'}>TE</MenuItem>
            <MenuItem value={'QB'}>QB</MenuItem>
            <MenuItem value={'DST'}>DST</MenuItem>
          </Select>
        </FormControl>



        {/* <InputLabel
          htmlFor="position"
          className='input-field'
        >
          Position
        </InputLabel>
          <Select>
            <MenuItem value={'WR'}>WR</MenuItem>
            <MenuItem value={'RB'}>RB</MenuItem>
            <MenuItem value={'TE'}>TE</MenuItem>
            <MenuItem value={'QB'}>QB</MenuItem>
            <MenuItem value={'DST'}>DST</MenuItem>
          </Select> */}
      </div>
      <div className='form-group'>
        <Button
          type='submit'
          className='draft-player-button'
          variant='outlined'
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

export default withStyles(styles)(Form)
