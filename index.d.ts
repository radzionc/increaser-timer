import * as React from "react"

export interface Theme {
  textColor: string;
  timeFillColor: string;
  circleColor: string
}
export interface Props {
  duration: number;
  startTime: number;
  timeNow: number;
  showTimeInTitle: boolean;
  theme: Theme
}

declare class Timer extends React.Component<Props, any> {}

export default Timer