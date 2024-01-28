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
    console.log(timerOn)
  }

  // Function to save lap time
  const updateLaps = () => {
    // Update the laps state
    console.log('before click', laps)
    setLaps([
      ...laps,
      time
    ]);
    console.log('after', laps)
  }

  // Reset function to empty the laps array, set time to 0 and stop the watch
  const handleReset = () => {
    setTimerOn(false);
    setTime(0);
    setLaps([]);
  }

  // UseEffect that updates time if the timer is on. Every 10 ms the time will increase by 100 ms. 
  useEffect(() => {
    let timerInterval: NodeJS.Timeout; // Special type -- used to prevent TS error with 'number'

    // If the timer is on, every 10 ms the time will increase by 10 ms.
    if (timerOn) {
      timerInterval = setInterval(() => {
        setTime(prevTime => prevTime + 0.01);
      }, 10);
    }

    // If the timer is off, the timer interval stops.
    return () => clearInterval(timerInterval);
  }, [timerOn, laps]);

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
