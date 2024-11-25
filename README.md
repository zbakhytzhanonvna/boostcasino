# Boost Casino E2E Test Automation Framework

This project implements an end-to-end test automation framework for Boost Casino website (https://www.boostcasino.com/) using Cypress with BDD approach.
Test Coverage
The framework implements automated tests for three main features:

Game Search and Launch

Search for "Book of Dead" game
Verify search results
Launch the game


Language Switching

Verify language dropdown functionality
Test language switches to:

Finnish (FI)
Estonian (EE)
Russian (RU)




Mobile Site Navigation

Hamburger menu functionality
Navigation through various sections:

Casino categories
Live Casino categories
Promotions sections


Verification of all menu entries and redirects

## Getting Started

### Install dependencies
`npm install`

### Run Cypress test runner
`npm run cy:open`
After opening Cypress, select "E2E Testing" and choose the feature you want to run.


## Key Assumptions

Game Search Behavior: The test suite assumes there is a single "Book of Dead" game. If similar titles exist (e.g., "Book of Dead Part 2"), the search will return multiple results. We need to establish a consistent approach for game selection:

Option 1: Always select the first game

Option 2: Only proceed if there's exactly one search result



# Technical Implementation
## Framework Structure

BDD feature files
Step definitions
Page Object Models
Configuration files

## Key Technical Solutions

Async Operations Handling

Implemented interceptors for managing API response timing

Added strategic delays for DOM updates in HomePage.search method

Managed overlapping elements in mobile view by selecting accurately viewport values, just for testing purposes.

Used cucumber.DataTable to be able to reuse tap menu functions and make feature files more flexible.



## Technical Challenges & Solutions
Async Operations Handling

Search Results Loading

Issue: Search results weren't immediately available in the DOM
Solution: Implemented interceptors to handle API response timing
Also, added 1-second delay in HomePage.search method to ensure DOM updates complete

Issue: I was not able to click 


## UI Layout Issues

Language Menu: Currently overlapped by top element
Hamburger Menu: Overlap issues on iPhone-X viewport

Architecture Improvements
Feature Organization

Extracted Menu List to site-navigation.feature
Made tap menu functionality extendable

## TODO List

 Implement robust game loading verification (possibly using request interception)
 
 Add user is logged out verification
 
 Expand functions' documentation

 Add env configuration
 

## Personal Notes
This project served as my introduction to BDD (Behavior-Driven Development). Through analyzing existing examples and documentation, I successfully implemented a working test service.