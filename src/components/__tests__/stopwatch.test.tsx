import React from 'react';
import Home from '../../pages/home';
import { render, fireEvent, act } from '@testing-library/react'

jest.useFakeTimers();

describe('Stopwatch', () => {
  test('stopwatch starts and stops at the correct time', () => {
    const {getByTestId, getByText} = render(<Home />);

    const startButton = getByText('Start');
    const stopButton = getByText('Stop');

    fireEvent.click(startButton);
    act(() => {
      jest.advanceTimersByTime(5000)
    })

    fireEvent.click(stopButton);

    const displayedTime = getByTestId('displayed-time');
    expect(displayedTime.textContent).toBe('5.00 seconds');
  }),

  test('stopwatch records laps correctly', () => {
    const {getByTestId, getByText} = render(<Home />);

    const startButton = getByText('Start');
    fireEvent.click(startButton);
    act(() => {
      jest.advanceTimersByTime(5000)
    })

    const lapButton = getByText('Lap');
    fireEvent.click(lapButton);

    const recordedLaps = getByTestId('recorded-laps');
    expect(recordedLaps.children.length).toBe(1);
    expect(recordedLaps.children[0].textContent).toBe('Lap 1: 5.00 s');
  }),

  test('Stopwatch resets correctly', () => {
    const {getByTestId, getByText} = render(<Home />);

    const startButton = getByText('Start');

    fireEvent.click(startButton);
    act(() => {
      jest.advanceTimersByTime(5000)
    })

    const resetButton = getByText('Reset');
    fireEvent.click(resetButton);

    const displayedTime = getByTestId('displayed-time');
    expect(displayedTime.textContent).toBe('0.00 seconds')
  })
})
