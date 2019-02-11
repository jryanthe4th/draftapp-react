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
  /* flex-wrap: wrap; */
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  /* align-content: flex-start; */
`

const SvgWrapper = styled.div`
  /* background-size: contain; */
  /* width: 100%;
  height: 100%; */
`

const Header = styled.div`
  width: 100%;
  text-align: center;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`

const StyledButton = styled.button`
  background-color: transparent;
  height: 30px;
  border-radius: 0px;
  border-color: #29B6F6;
  color: #29B6F6;
  min-width: 200px;
  font-weight: bold;
  justify-content: center;
  margin: 10px auto 10px auto;

  &:hover {
    background-color: #29B6F6;
    color: black;
  }
  &:focus {
    box-shadow: none;
    background-color: #29B6F6;
    color: black;
  }
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
          color='primary'
          // className={classes.margin}
        >
          Draft Board
        </Button>
        <StyledButton primary>
          Primary
        </StyledButton>
      </StyledHomePage>
    );
  }
}
