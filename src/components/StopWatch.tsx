import React from 'react'

// Define the types for stopwatch display props
type StopWatchDisplayProps = {
    time: number;
    laps: number[];
}

const StopWatch = ({time, laps}: StopWatchDisplayProps) => {
    return(
        <div>
            {/* Use props to display the time elapsed during the current lap and if laps exist, display lap times. */}
        </div>
    )
}

export default StopWatch;