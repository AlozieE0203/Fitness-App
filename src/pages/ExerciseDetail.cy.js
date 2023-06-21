import React from 'react'
import ExerciseDetail from './ExerciseDetail'

describe('<ExerciseDetail />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ExerciseDetail />)
  })
})