import React from 'react'
import styled from 'styled-components'

const Container = styled.svg`
  height: 100%;
  position: absolute;
`

const Path = styled.path`
  fill: ${props => props.theme.timeFillColor};
`

const Circle = styled.circle`
  r: 1;
  fill: ${props => props.theme.timeFillColor};
`

const getCoordinatesForPercent = percent => ({
  x: Math.cos(2 * Math.PI * percent),
  y: Math.sin(2 * Math.PI * percent)
})

export default ({ percent }) => {
  const renderPath = () => {
    const startPoint = 0.75
    const start = getCoordinatesForPercent(startPoint)
    const end = getCoordinatesForPercent(startPoint + percent)
    const largeArcFlag = startPoint + percent < 1.25 ? 0 : 1
    const pathData = [
      `M ${start.x} ${start.y}`,
      `A 1 1 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
      `L 0 0`
    ].join(' ')

    return <Path d={pathData} />
  }

  return (
    <Container viewBox='-1 -1 2 2'>
      {percent < 1 ? renderPath() : <Circle />}
    </Container>
  )
}
