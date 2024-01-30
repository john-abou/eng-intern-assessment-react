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
            {timerOn ? (
                <div>
                    <button onClick={onReset}> Reset </button>
                    <button onClick={onLap}> Lap </button>
                    <button onClick={onStartStop}> Stop </button>
                </div>
            ) : (
                <div>
                    <button onClick={onReset}> Reset </button>
                    <button onClick={onStartStop}> Start </button>
                    <button onClick={onStartStop}> Stop </button>
                    <button onClick={onLap}> Lap </button>
                </div>
            )}
        </div>
    )
}

export default StopWatchButton;