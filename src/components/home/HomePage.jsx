import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Countdown from './Countdown'
import dayjs from 'dayjs'

// Styling
import lionhead from '../../css/images/lionhead2.svg'
import ReactSVG from 'react-svg'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
`

const SvgWrapper = styled.div`
`

// const styles = theme => ({
//   margin: {
//     margin: theme.spacing.unit,
//   },
//   extendedIcon: {
//     marginRight: theme.spacing.unit,
//   },
// });

export default class HomePage extends Component {

  // const { classes } = props;
  render(props) {
    const currentDate = new dayjs()
    const year = currentDate.get('year')
    return (
      <StyledHomePage className='homepage-container'>
        <SvgWrapper className='SvgWrapper'>
          <ReactSVG
            className='ReactSVG'
            src={lionhead}
            svgStyle={{height: '60vh', width: '100%'}}
          />
        </SvgWrapper>
        {/* <Countdown date={`${year}-05-05T00:00:00`} /> */}
        <Button
          component={Link}
          to='/draftboard'
          variant='outlined'
          size='medium'
          className='draft-player-button'
          style={{width: '200px', margin: '10px auto 10px auto', borderRadius: '0px'}}
        >
          Draft Board
        </Button>
        <Button
          component={Link}
          to='/signup'
          variant='outlined'
          size='medium'
          color='secondary'
          className='draft-player-button'
          style={{width: '200px', margin: '10px auto 10px auto', borderRadius: '0px'}}
        >
          Owner Sign Up
        </Button>
      </StyledHomePage>
    );
  }
}
