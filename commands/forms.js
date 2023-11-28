///<reference types="Cypress" />

import Form from "../modules/Form.js";

Cypress.Commands.add('form', (data) => {
  new Form().fillData(data);
});
