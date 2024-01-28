import React, { useEffect } from 'react'

// Define the types for stopwatch display props
type StopWatchDisplayProps = {
    time: number;
    laps: number[];
}

const StopWatch = ({time, laps}: StopWatchDisplayProps) => {
   return (
    <div>
      {/* Use props to display the time elapsed during the current lap and if laps exist, display lap times. */}
      <div id='displayed-time'>{time.toFixed(2)} seconds</div>
      <ul id='recorded-laps'>
        {(laps.map((lap, index) => (
          <li key={index}>Lap {index +1}: {lap.toFixed(2)} s</li>
        )))}
      </ul>
    </div>
  );
};

export default StopWatch;