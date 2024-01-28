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
      <div>{time} ms</div>
      <ul>
        {(laps.map((lap, index) => (
          <li key={index}>Lap {index +1}: {lap} ms</li>
        )))}
      </ul>
    </div>
  );
};

export default StopWatch;