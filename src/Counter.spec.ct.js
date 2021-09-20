import React from 'react';
import { mount } from '@cypress/react';
import Counter from './Counter';

it('Counter increment test', () => {
  mount(<Counter />);

  // Initially decrement button must be disabled
  cy.get('[data-btn-type="decremenet"]').should('be.disabled');
  
  // Increment and test
  cy.get('#counter_result').should('contain', '0');
  cy.get('[data-btn-type="incremenet"]').click();
  cy.get('#counter_result').should('contain', '1');
  cy.get('[data-btn-type="incremenet"]').click();
  cy.get('#counter_result').should('contain', '2');

  // Check, decrement button must not be disabled
  cy.get('[data-btn-type="decremenet"]').should('be.not.disabled');

  // Decrement and test
  cy.get('[data-btn-type="decremenet"]').click();
  cy.get('#counter_result').should('contain', '1');
  cy.get('[data-btn-type="decremenet"]').click();
  cy.get('#counter_result').should('contain', '0');

  // Initially decrement button must be disabled
  cy.get('[data-btn-type="decremenet"]').should('be.disabled');
});
