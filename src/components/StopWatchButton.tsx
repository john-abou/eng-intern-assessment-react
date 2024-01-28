import React from 'react'

// Define the types for the stopwatch button props
type StopWatchButtonProps = {
    timerOn: boolean;
    onStartStop: () => void;
    onLap: () => void;
    onReset: () => void;
}

const StopWatchButton = ({timerOn, onStartStop, onLap, onReset}: StopWatchButtonProps) => {
    return(
        <div>
            {/* Display the buttons and use the props from the parent component for handling the onClick functions */}
        </div>
    )
}

export default StopWatchButton;