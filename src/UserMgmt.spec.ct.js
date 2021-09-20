import React from 'react';
import { mount } from '@cypress/react';
import UserMgmt from './UserMgmt';
const faker = require('faker');

it('UserMgmt increment test', () => {
  mount(<UserMgmt />);

  // Confirm if a tr exist with class "tbl_row_no_data"
  cy.get('.usertable').find('.tbl_row_no_data').its('length').should('eq', 1);

  for(let i=1; i<=5; i++)
  {
    let fullname = faker.name.firstName() + ' ' + faker.name.lastName();
    let phone = faker.phone.phoneNumber();

    // Enter a record
    cy.get('input[name="fullname"]').type(fullname);
    cy.get('input[name="mobile"]').type(phone);
    cy.get('.btn_save_user').click();
  }

  // After data saved successfully check the table row
  cy.get('.usertable').find('.tbl_row_data').its('length').should('gte', 1);
  
});
