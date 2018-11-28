import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
  z-index: 1;
  top: 42%;
  text-align: center;
  vertical-align: middle;
  color: ${props => props.theme.textColor};
`
const numberForTimer = number =>
  number < 0 ? '00' : number < 10 ? `0${number}` : number

export default ({ secondsLeft, diameter }) => {
  const minutes = Math.floor(secondsLeft / 60) || 0
  const seconds = Math.floor(secondsLeft - minutes * 60) || 0
  const timeStr = `${numberForTimer(minutes)}:${numberForTimer(seconds)}`

  const size = diameter * 0.1
  return (
    <Text style={{ fontSize: size, lineHeight: `${size}px` }}>
      {timeStr}
    </Text>
  )
}