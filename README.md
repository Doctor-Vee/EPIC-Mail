[![Build Status](https://travis-ci.org/Victor-Chinewubeze/EPIC-Mail.svg?branch=develop)](https://travis-ci.org/Victor-Chinewubeze/EPIC-Mail)
[![Coverage Status](https://coveralls.io/repos/github/Victor-Chinewubeze/EPIC-Mail/badge.svg?branch=develop)](https://coveralls.io/github/Victor-Chinewubeze/EPIC-Mail?branch=develop)

# EPIC-Mail
## Description
#### EPIC-Mail is a web app that helps people exchange messages/information over the internet
The internet is increasingly becoming an integral part of lives. Ever since the invention of electronic mail by ​Ray Tomlinson ​, emails have grown to become the primary medium of exchanging information over the internet between two or more people, until the advent of Instant Messaging (IM) Apps.

This web app is intended to empower others by helping people exchange messages/information over the internet as a way of advancing human potential and giving back to the society.

## Getting Started
### Technologies Used
- Node JS
- Express
- ESLint
- Babel
- Mocha & Chai
- Travis CI
- Coveralls

### Requirements and Installation
Before running the project, install the following
- Node JS
- Git

#### To run
```
$ git clone https://github.com/Victor-Chinewubeze/EPIC-Mail.git
$ cd EPIC-Mail
$ npm install
$ npm start
```
#### To Test
```
$ npm test
```

## Relevant Links

### Pivotal Tracker stories
[https://www.pivotaltracker.com/n/projects/2315339](https://www.pivotaltracker.com/n/projects/2315339)

### UI Template
[https://victor-chinewubeze.github.io/EPIC-Mail/](https://victor-chinewubeze.github.io/EPIC-Mail/)

## API Endpoints

POST 'https://epic-mail-web-app.herokuapp.com/auth/signup' - Allows a user to create an account

POST 'https://epic-mail-web-app.herokuapp.com/api/v1/auth/login' - Allows a user to create an account

POST 'https://epic-mail-web-app.herokuapp.com/api/v1/messages' - Sends a new message

GET 'https://epic-mail-web-app.herokuapp.com/api/v1/messages/all' - Gets all messages

GET 'https://epic-mail-web-app.herokuapp.com/api/v1/messages' - Gets all received messages

GET 'https://epic-mail-web-app.herokuapp.com/api/v1/messages/sent' - Gets all sent messages

GET 'https://epic-mail-web-app.herokuapp.com/api/v1/messages/unread' - Gets all unread messages

GET 'https://epic-mail-web-app.herokuapp.com/api/v1/messages/:id' - Gets a single message by the id

DELETE 'https://epic-mail-web-app.herokuapp.com/api/v1/messages/:id' - Deletes a single message by the id

## Author

Victor CHINEWUBEZE

