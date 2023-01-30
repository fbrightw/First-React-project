import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react';
import TaskContainer from "../components/sections/todotasks/tasks/TaskContainer";

test('renders "no tasks" when there is no tasks', async () => {
  const {getByText} = render(<TaskContainer/>)
  expect(getByText((/no tasks/i))).toBeInTheDocument()
})

test('render list of tasks', () => {
  const fakeList = [
      {id: 0, text: 'first', subTasks: []}, {id: 1, text: 'second', subTasks: []}
  ]
  render(<TaskContainer tasks={false}/>)

})