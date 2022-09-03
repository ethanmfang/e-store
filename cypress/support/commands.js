/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add("randomIndex", (min, max) => {
  min = Math.ceil(0);
  max = Math.floor(20);
  return console.log(Math.floor(Math.random() * (max - min) + min));
});
