# increaser-timer

> 

[![NPM](https://img.shields.io/npm/v/increaser-timer.svg)](https://www.npmjs.com/package/increaser-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![alt text](https://cdn-images-1.medium.com/max/2000/1*FSPccrD-tfhlbniF8sJluQ.gif)

## Install

```bash
npm install --save increaser-timer
```

## Usage

```jsx
import React from 'react'

import Timer from 'increaser-timer'

const Container = ({ children }) => (
  <div style={{ height: '100vh' width: '100%' }}>
    {children}
  </div>
)

class Example extends React.Component {
  constructor(props) {
    super(props)
    const startTime = Date.now()
    this.state = {
      startTime,
      duration: 1,
      timeNow: startTime
    }
    setInterval(() => {
      const timeNow = Date.now()
      const { startTime, duration } = this.state
      this.setState({ timeNow })
      if (timeNow - startTime > duration * 60 * 1000) {
        this.setState({ startTime: timeNow })
      }
    }, 500)
  }

  render() {
    const { duration, startTime, timeNow } = this.state
    return (
      <Timer
        wrapper={Container}
        startTime={startTime}
        duration={duration}
        timeNow={timeNow}
        showTimeInTitle={true}
        handleBeforeUnload={true}
      />
    )
  }
}
```
## [Story on Medium](https://medium.com/p/cb76422f84bb)

## License

MIT © [RodionChachura](https://geekrodion.com)
