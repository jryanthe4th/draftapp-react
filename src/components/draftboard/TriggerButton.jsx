import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled.div`
  width: 100%;
  text-align: center;
`

const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
  return (
    <StyledButton>
      <Button
        className='draft-player-button'
        ref={buttonRef}
        onClick={showModal}
        variant='outlined'
        size='medium'
        color='secondary'
        style={{width: '200px', margin: '10px auto 10px auto', borderRadius: '0px'}}
      >
        {triggerText}
      </Button>
    </StyledButton>
  )
}
export default TriggerButton
