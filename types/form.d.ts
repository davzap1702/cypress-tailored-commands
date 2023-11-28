declare namespace Cypress {
    interface Chainable {
      /**
       * Represents a gobal method able to fill up any kind of form using a configuration parameter.
       * @param config - The configuration of each file based on it's type.
       * To understand how this method works, you can see the following examples.
       * @see https://docs.raptor.com
       * @example
       *
       * "A text - Works the same for types: password, email"
       * cy.form([{type: 'text', selector: '.element_selector', data: 'The value to be typed'}])
       *
       * @example
       * "A checkbox -  Works the same for radio buttons"
       * cy.form([{type: 'checkbox', selector: '.element_selector'}])
       * cy.form([{type: 'radio', selector: '.element_selector'}])
       *
       * @example
       * "A dropdown - This only applies for html input elements. Eg:" <input>
       * cy.form([{type: 'dropdown', selector: '.element_selector', option: 'The option to be chosen'}])
       *
       * @example
       * "A select - This only applies for html select elements. Eg:" <select>
       * cy.form([{type: 'select', selector: '.element_selector', option: 'The option to be chosen'}])
       *
       * @example
       * "An alert - Alert errors. Eg: Please enter a valid email"
       * cy.form([{type: 'alert', selector: '.element_selector', text: 'The expected text'}])
       *
       * @example
       * "A submit - Any submit button"
       * cy.form([{type: 'submit', selector: '.element_selector'}])
       */
      form(config: Array<{
        type: string,
        data: string,
        selector: string,
        text: string,
        option: string,
        url: string,
        onSubmit: (xhr: object) => void
      }>);
    }
  }
  