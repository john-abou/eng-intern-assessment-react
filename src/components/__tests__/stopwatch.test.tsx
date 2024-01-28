import React from 'react';
import Home from '../../pages/home';
import {render, fireEvent, act } from '@testing-library/react'

jest.useFakeTimers();

describe('Stopwatch', () => {
  test('sropwatch starts, stops, resets and records laps correctly', () => {
    const {getByTestId, getByText} = render(<Home />);

    const startButton = getByText('Start');
    const stopButton = getByText('Stop');
    const resetButton = getByText('Reset');
    const lapButton = getByText('Lap');

    fireEvent.click(startButton);
    act(() => {
      jest.advanceTimersByTime(5000)
    })

    fireEvent.click(stopButton);
    fireEvent.click(resetButton);

    const displayedTime = getByTestId('displayed-time');
    expect(displayedTime.textContent).toBe('5.00');

    fireEvent.click(lapButton);

    const recordedLaps = getByTestId('recorded-laps');
    expect(recordedLaps.children.length).toBe(1);

  })
})