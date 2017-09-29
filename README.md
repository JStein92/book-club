# Book Club Manager

#### Javascript Week 4 Project

##### By Jonathan Stein

## Description

_Multi-page Angular2 Application, utilizing Firebase, that lets users create, edit, and delete various book club members._

### User Story


  -  As a user, I'd like to visit a page to see a list of all team or club members.
  -  As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.
  -  As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
  -  As a user, I'd like all data persisted in a database, so it's always there when I need it.
  -  As an administrator, I want to add new users to the club. (User authentication is not required).
  -  As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.
  -  As an administrator, need the option to delete a user, in case they leave the club or team.


### _Content_ ###

- "/" - Home page to display book club members
- "/member-details/[key]" - show member details, including the books they have read
- "/about" - about page for club
- "/admin" - edit and remove members
- "/add-member" - add members


##### Components
- about
- add member
- home
- edit member
- admin
- member-details

##### Future functionality desired

  - Ability to add books to members after they are created

### _How to use_ ###

1. Download project from GitHub: https://github.com/JStein92/book-club
2. Create Firebase web app and import "sample-members.json" into it. Set its Read and Write rules to "True".
2. Run HTML in preferred browser

# Crowdfunding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
