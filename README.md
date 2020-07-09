# Reverse Engineered AngularJS Phone Catalog


## Overview

I took this application from the AngularJS tutorial documentation. I'm maining using this repo to do some experimentation and reverse engineering.

The full tutorial can be found at https://docs.angularjs.org/tutorial.


## Prerequisites

### Git

- The perfered version control system

### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`


## Workings of the Application

- The application filesystem layout structure is based on the [angular-seed][angular-seed] project.
- There is no dynamic backend (no application server) for this application. Instead we fake the
  application server by fetching static JSON files.


### Installing Dependencies

The hardest thing to set up is the unittesting and end-to-end testing. Right now it only works for my WSL-Linux Computer Setup. As a note, I should look into DOCKER.

- [Karma][karma]
- [Protractor][protractor]


### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application running.


### Unit Testing

#### [Jasmine][jasmine] and [Karma][karma]

- Start Karma with `npm test`
- TODO: look into Jest


### End-to-End Testing

#### [Protractor][protractor]

- used for end-to-end (e2e) testing
- TODO: look into puppeteer

It requires a webserver that serves the application. See the _Running the Application during Development_ section, above.

- Serve the application with: `npm start`
- In a separate terminal/command line window run the e2e tests: `npm run protractor`.
- The majority of the work done till now was setting up the configurations in `e2e-tests/protractor-conf.js`.

**Note:**
Under the hood, Protractor uses the [Selenium Standalone Server][selenium], which in turn requires the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running `java -version` from the command line.


[angular-seed]: https://github.com/angular/angular-seed
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
