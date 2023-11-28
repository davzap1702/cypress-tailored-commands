# Cypress Tailored Commands

## Installation
> Follow the steps below to install and setup the repo on your local machine:

Make sure you have NodeJS installed. Node v14 and above is preferred. 
```bash
node --version
```

If you do not have Cypress installed, run the following command. Check out more information in the [Cypress website](https://docs.cypress.io/guides/getting-started/installing-cypress)
```bash
npm i cypress
````

Install the Cypress Tailored Commands package
```bash
npm i cypress-tailored-commands
```

Locate the commands file and import the package. This is usually inside the support folder
```bash
|- cypress
|     |-- support
|         |-- commands.js
```

```js
import 'cypress-tailored-commands'
````

Start using the commands in your tests. 

Check full documentation in the [official website](https://cypress-tailored-commands.dev/)