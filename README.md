# Instructions to install

To install Cypress and all the dependencies:

- Run 'npm install'

# Tests

E2E Tests are located in [cypress/integration](cypress/integration) folder and
are divided in spec files to match components on the frontend. This is done to
improve readability, maintainability and troubleshooting. For visual testing we
can use any of the available recommended tools:
https://docs.cypress.io/plugins/directory#Visual%20Testing

# Test execution

To execute tests in headless mode run:

- npm run 'cy:run:e2e:desktop:chrome'
- npm run 'cy:run:e2e:desktop:firefox'

# Continuous integration

We set up [gitlab-ci.yml](./.gitlab-ci.yml) file. Official cypress docker images
are used with all dependencies and browsers:
https://github.com/cypress-io/cypress-docker-images/tree/master/browsers. Tests
are run 3 in parallel on chrome and firefox

# Reporting

All the tests results are recorded with cypress dashboard
https://dashboard.cypress.io/ Any other reporters can be also used if needed:
https://docs.cypress.io/plugins/directory#Reporting
