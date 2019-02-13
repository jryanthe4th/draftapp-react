import React, {Component} from 'react';
import {Link} from 'react-router-dom'

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

const Header = styled.div`
  width: 100%;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
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
    return (
      <StyledHomePage className='homepage-container'>
        <SvgWrapper className='SvgWrapper'>
          <ReactSVG
            className='ReactSVG'
            src={lionhead}
            svgStyle={{height: '60vh', width: '100%'}}
          />
        </SvgWrapper>
        <Header>
          <Title>`DYNASTY DRAFT BOARD`</Title>
        </Header>
        <Button
          component={Link}
          to='/draftboard'
          variant='outlined'
          size='medium'
          color='secondary'
          className='home-button'
          style={{width: '200px', margin: '10px auto 10px auto', borderRadius: '0px'}}
        >
          Draft Board
        </Button>
        <Button
          component={Link}
          to='/signin'
          variant='outlined'
          size='medium'
          color='secondary'
          className='home-button'
          style={{width: '200px', margin: '10px auto 10px auto', borderRadius: '0px'}}
        >
          Sign In
        </Button>
      </StyledHomePage>
    );
  }
}
