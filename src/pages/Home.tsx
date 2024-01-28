import React, {useState, useEffect} from 'react';
import StopWatch from '../components/StopWatch';
import StopWatchButton from '../components/StopWatchButton';


const Stopwatch: React.FC = () => {
  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);

  // Function to handle the start/stop of the stopwatch 
  const handleStartStop = () => {
    setTimerOn(!timerOn);
  }
  // Function to save lap time and restart timer for the new lap
  const updateLaps = () => {
    // Update the laps state
    setLaps([
      ... laps, 
      time
    ]);

    // Reset the timer to 0
    setTime(0);
  }

  // Reset function should empty the laps array, set time to 0 and stop the watch
  const handleReset = () => {
    setTimerOn(false);
    setTime(0);
    setLaps([]);
  }

  // Create useEffect to handle the updating timer, should activate if the timer is on.

  return (
    <div>
      {/* The display and buttons should be put here, pass functions and state vars as props. */}
    </div>
  )
}

export default StopWatch;