import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'

class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: '--',
      hours: '--',
      min: '--',
      sec: '--',
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date)
      date ? this.setState(date) : this.stop()
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new dayjs(endDate)) - Date.parse(new dayjs())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= (362.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  stop() {
    clearInterval(this.interval)
  }

  addLeadingZeros(value) {
    value = String(value)
    while (value.length < 2) {
      value = '0' + value
    }
    return value
  }

  render() {
    const countDown = this.state

    return (
      <StyledCountdownContainer clasName='Countdown'>
        <StyledCountdown>
          <StyledCountdownElements className='Countdown-col'>
            <StyledTime className='Countdown-col-element'>
              <strong>{this.addLeadingZeros(countDown.days)}</strong>
            </StyledTime>
            <StyledTimeLabel>
              <span>{countDown.days > 1 ? 'Days' : 'Day'}</span>
            </StyledTimeLabel>
          </StyledCountdownElements>

          <StyledCountdownElements className='Countdown-col'>
            <StyledTime className='Countdown-col-element'>
              <strong>{this.addLeadingZeros(countDown.hours)}</strong>
            </StyledTime>
            <StyledTimeLabel className='Countdown-col-element'>
              <span>{countDown.hours > 1 ? 'Hours' : 'Hour'}</span>
            </StyledTimeLabel>
          </StyledCountdownElements>

          <StyledCountdownElements className='Countdown-col'>
            <StyledTime className='Countdown-col-element'>
              <strong>{this.addLeadingZeros(countDown.min)}</strong>
            </StyledTime>
            <StyledTimeLabel className='Countdown-col-element'>
              <span>Min</span>
            </StyledTimeLabel>
          </StyledCountdownElements>

          <StyledCountdownElements className='Countdown-col'>
            <StyledTime className='Countdown-col-element'>
              <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            </StyledTime>
            <StyledTimeLabel className='Countdown-col-element'>
              <span>Sec</span>
            </StyledTimeLabel>
          </StyledCountdownElements>
        </StyledCountdown>
      </StyledCountdownContainer>
    )
  }
}

const StyledCountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  color: #7befb2;
  width: 100%;
`

const StyledCountdown = styled.div`
  /* flex-direction: row; */
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
  /* width: 100%; */
`

const StyledCountdownElements = styled.span`
  /* padding: 10px; */
`

const StyledTime = styled.div`
  text-align: center;
  font-size: 3em;
  border: 5px;
  width: 75px;
`

const StyledTimeLabel = styled.div`
  text-align: center;
  font-size: 1em;
`

Countdown.propTypes = {
  date: PropTypes.string.isRequired
}

Countdown.defaultProps = {
  date: new dayjs()
}

export default Countdown
