import React from "react"
import Timer from "./Timer"
import Controls from "./Controls"

export default function App() {
  const [time, setTime] = React.useState({
    second: 0,
    minute: 0,
    hour: 0
  })
  const [interv, setInterv] = React.useState()

  function start() {
    startTimer()
    setInterv(setInterval(startTimer, 1000))
  }

  function wait() {
    clearInterval(interv)
  }

  function reset() {
    clearInterval(interv);
    setTime({
      second: 0,
      minute: 0,
      hour: 0
    })
  }

  var sec = time.second,
    min = time.minute,
    hr = time.hour

  function startTimer() {
    sec++;
    if (sec > 59) {
      min++
      sec = 0
    }
    if (min > 59) {
      hr++
      min = 0
    }
    return setTime({
      second: sec,
      minute: min,
      hour: hr
    })
  }

  return (
    <div className="container">
      <Timer time={time} />
      <Controls start={start} wait={wait} reset={reset} />
    </div>

  );
}

