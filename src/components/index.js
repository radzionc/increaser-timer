import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Circle from './circle'
import Time from './time'
import TimeFill from './time-fill'

import { defaultTheme } from '../constants'

const Container = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  render() {
    const { wrapper: Wrapper, theme, startTime, timeNow, duration, showTimeInTitle } = this.props
    const { diameter } = this.state

    const renderContent = () => {
      const secondsPass = Math.min((timeNow - startTime) / 1000, duration * 60)
      const percent = secondsPass / (duration * 60)
      const secondsLeft = duration * 60 - secondsPass
      return (
        <React.Fragment>
          <Circle>
            <TimeFill percent={percent} />
            <Time showInTitle={showTimeInTitle} secondsLeft={secondsLeft} diameter={diameter} />
          </Circle>
        </React.Fragment>
      )
    }

    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Wrapper id='wrapper' ref={el => (this.wrapper = el)}>
          <Container
            ref={el => (this.view = el)}
            style={{ width: diameter, height: diameter }}
          >
            {this.view && renderContent()}
          </Container>
        </Wrapper>
      </ThemeProvider>
    )
  }

  componentDidMount() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
    if (this.props.handleBeforeUnload) {
      window.addEventListener('beforeunload', this.exitPage)
    }
  }

  exitPage = e => {
    const message = 'Better stop timer first'
    e.returnValue = message
    return message
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
    if (this.props.handleBeforeUnload) {
      window.removeEventListener('beforeunload', this.exitPage)
    }
  }

  onResize = () => {
    const process = (element) => {
      const { width, height } = element.getBoundingClientRect()
      const diameter = Math.min(width, height)
      this.setState({ width, height, diameter })
    }
    if (this.wrapper && this.wrapper.getBoundingClientRect) {
      process(this.wrapper)
    } else {
      const element = document.getElementById('wrapper')
      if (element && element.getBoundingClientRect) {
        process(element)
      }
    }
  }
}
