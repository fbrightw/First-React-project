import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react';
import TaskContainer from "../components/sections/todotasks/tasks/TaskContainer";

test('renders "no tasks" when there is no tasks', async () => {
  const {getByText} = render(<TaskContainer/>)
  expect(getByText((/no tasks/i))).toBeInTheDocument()
})