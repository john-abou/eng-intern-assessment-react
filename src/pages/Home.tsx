import React, { useState, useEffect } from 'react';
import StopWatch from '../components/StopWatch';
import StopWatchButton from '../components/StopWatchButton';

const Stopwatch: React.FC = () => {
  const [timerOn, setTimerOn] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);

  // Function to handle the start/stop of the stopwatch 
  const handleStartStop = () => {
    setTimerOn(!timerOn);
  }

  // Function to save lap time
  const updateLaps = () => {
    // Update the laps state
    setLaps([
      ...laps,
      time
    ]);
  }

  // Reset function to empty the laps array, set time to 0 and stop the watch
  const handleReset = () => {
    setTimerOn(false);
    setTime(0);
    setLaps([]);
  }

  // UseEffect that updates time if the timer is on. Every 100 ms the time will increase by 100 ms. 
  useEffect(() => {
    let timerInterval: NodeJS.Timeout; // Special type -- used to prevent TS error with 'number'

    // If the timer is on, every 100 ms the time will increase by 100 ms.
    if (timerOn) {
      timerInterval = setInterval(() => {
        setTime(time + .100);
      }, 100);
    }

    // If the timer is off, the timer interval stops.
    return () => clearInterval(timerInterval);
  }, [timerOn]);

  return (
    <div>
      <StopWatch time={time} laps={laps}/>
      <StopWatchButton
        timerOn={timerOn}
        onStartStop={handleStartStop}
        onLap={updateLaps}
        onReset={handleReset}
      />
    </div>
  )
}

export default Stopwatch;
