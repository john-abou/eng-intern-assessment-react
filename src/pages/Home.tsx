import React, {useState, useEffect} from 'react';
import StopWatch from '../components/StopWatch';
import StopWatchButton from '../components/StopWatchButton';


const Stopwatch: React.FC = () => {
  // Define state variables for if the clock is running, the current time and the laps
  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(0)
  const [laps, setLaps] = useState<number[]>([])

  // Create functions to handle start/stop of the watch, laps, reset timer
  // Start/stop function should reverse the boolean value of the state var
  const handleStartStop = () => {
    setTimerOn(!timerOn)
  }
  // Lap function should update state var by creating a new array with the previous lap time and restart the timer so the current lap starts from 0
  // Reset function should empty the laps array, set time to 0 and stop the watch

  // Create useEffect to handle the updating timer, should activate if the timer is on.

  return (
    <div>
      {/* The display and buttons should be put here, pass functions and state vars as props. */}
    </div>
  )
}

export default StopWatch;