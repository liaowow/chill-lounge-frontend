# Chill Lounge

## Introduction
Welcome to Chill Lounge, a personalized self-care guide inspired by [youfeellikeshit.com](https://youfeellikeshit.com/). It is a single-page application built with React App through implementations of Hooks and Redux.

## Features
Chill Lounge features step-by-step guide based on user input.

It also Create/Read/Update functionality for the user's wellness report and message board.

When the page initially loads, the sidebar header dynamically renders:
  1. The current weather in the user's location (as an HTML5 animation) if the user allows location data to be shared
  2. The current time in a live clock, using Moment.js

The entries also track a user's current mood as it was entered at the time of creation, which is then used to display an overall trend of moods from past entries in a separate section. The background of the page also changes color to reflect the overall mood trend.

## Dev Tools
- Front End:
  - `React Calendar` - serves as the interface for this app's wellness report calendar
  - `CocktailDB` - serves as source for this app's external cocktail images API
  - `Advice Slip` - serves as source for this app's external message API

- Back End:
  - `Ruby on Rails` - hosts the database server
  - `BCrypt` - encrypts/decrypts user passwords
  - `JWT` - encodes/decodes the web tokens for user authentication