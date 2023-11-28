///<reference types="Cypress" />

import parsePayload from "../helpers/parsePayload";


class Form {
  /**
   * Represents a method that fills the data of any kind of form with all the possible variations.
   * @param {array} data - An array with all the options within the form
   */
  fillData(data) {
    data.forEach(({ type, data, selector, text, option, url, onSubmit }) => {
      if (/email|text|password/.test(type)) {
        if (!selector || !data)
          throw new TypeError(
            'You must include a selector and a data for this input'
          );
        cy.get(selector).type(data, { force: true });
      }
      if (/submit/.test(type)) {
        cy.intercept({
          method: 'POST',
          url,
        }).as('payload');
        cy.get(selector).click({ force: true });
        cy.wait('@payload').then((xhr) => {
          if (typeof xhr?.request['body'] === 'string') {
            xhr.request['body'] = parsePayload(xhr.request['body']);
          }
          return onSubmit(xhr);
        });
      }
      if (/alert/.test(type)) {
        cy.get(selector).then(($alert) => {
          expect($alert.text().replace(/\n/g, '').trim()).to.deep.eq(text);
          expect($alert).to.be.visible;
        });
      }
      if (/radio|checkbox/.test(type)) {
        cy.get(selector).check({ force: true });
      }
      if (/select/.test(type)) {
        cy.get(selector).select(option);
      }
      if (/dropdown/.test(type)) {
        cy.get(selector).click({ force: true });
        cy.contains(option).click({ force: true });
      }
      if(/clear/.test(type)){
        cy.get(selector).clear()
      }
    });
  }
}

export default Form;
