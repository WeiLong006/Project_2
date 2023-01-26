# Project_1

# Ultimate Cocktail Guide

## Project description

Ultimate cocktail guide is an app where you can search for cocktail recipes by the name of the drink. Bartenders would no longer need to search for recipes using notebooks with the use of this app. It's ease of usage also means that anyone would be able to access cocktail recipes even for home parties!

## Technology used

I used React,React-router and CSS .

## Features i hope to be able to implement in future

I would like to be able to add more categories that can be searched by.

## Approach taken

My first step was to create a hierarchy in which i would be able to tell which components would form the top to the base as well as how the information will flow throughout the app.

After which i created the components according to my heirarchy and created simple returns to help ensure that proping of information was fine between the various components.

I then started to build the input arm of the hierarchy which consist of the input and button components.I did so by creating the button component which would be the most commonly used component throughout the app. After which, i built the input component. I first created the states required and the functions required to update each state.Then i created the function which would fetch the data from the API and the conditional to activate the function. Lastly, i created the search button calling on the button component to activate the search.

Once i have ensured that the search was functioning properly, i then moved on to the display arm of the hierarchy which would display the results. The display is spit into a further two components which are the display,image and the modal component. First, i propped the result of the search down and map it. I then created the image component which would be what would be mapped in the display component. After which, i created the onClick function for the image which would call up the modal. Lastly, i created the modal which would display the necessary information for the recipe as well as a thumbnail picture of the cocktail. A close button calling on the button component was added in the modal.

Once i am sure that the app works the way i wanted it to, i then moved on to styling and i expriemented with different styling options for both the main app and the modal.

## Acknowldgement

Drink result list hover - Patrick McMurphy - https://codepen.io/gaeowyn/pen/YzZOoY
Buttons CSS - CSS Scan - https://getcssscan.com/css-buttons-examples
