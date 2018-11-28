import styled from 'styled-components'

const Circle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.theme.circleColor};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`

export default Circle
