# React MERN Portfolio LAB
In this lab, you will be building the front-end to the Recipe API you built in express. The front end will provide all the CRUD functionality for you to manage your recipes. you will also add in the other projects you created during the training to have a portfolio of your accomplishments.

## Set-up
This repository is to serve as a starter. It contains a Welcome, Navigation, ManageRecipes, and recipeForm component. It also includes a DataService to talk to the API. 

* Make sure your Express Recipe API is running on port 3000
* Fork and clone this repository 
* Run `npm i` from the projects root directory to install the dependencies
* Run this application with `npm start` and verify that you can view all and add a new recipe.

## Normal Mode

### Edit A Recipe
Let's implement the edit recipe functionality

* The Edit Recipe Functionality should leverage the existing **RecipeForm** component.
* When you click the **Edit** button next to a recipe it should fetch the correct recipe from the API, show the Recipe Form,
and populate it with the appropriate data.
* On a successful update, the form table should be displayed again reflecting the changes

### Delete A Recipe
The **Delete** button in the admin column for each recipe on the **ManageRecipes** component should delete the record from our API

* Update the **ManageRecipes** component and add an event handler that deletes a record when the delete button is clicked for a recipe
* After the delete the table should be updated and the Recipe removed.

### Redux and Centralized State
Let's set-up our application to leverage Redux centralized state.

* Install the necessary dependencies needed to implement centralized state in our application
* Create the **Actions** need to support the **ManageRecipes** component
* Create a **Reducer** to process the recipe actions that will be dispatched to the store
* Create the **Container** that will render the **ManageRecipes** component

## Medium Mode
Let's move over previously completed labs.

### Migrate The Sports Game
The goal is to take our sports game Lab from day 1 and migrate it to the portfolio. You should also update the sports game to leverage centralized state

* Move over the Sports Game components and assets from the previous project into the portfolio
    * You should store your images and sounds with your component.
    * Use the webpack extended import feature to import your images into your component.
        * <https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files>
* Ensure you create the needed actions, reducers, and containers that so the Sports Game component can leverage Redux for centralized state 
* Add a link to the Navigation in our portfolio to access your sports game
* Create a route in `App.js` to display the game when the link is clicked in the Navigation

### Migrate Jeopardy
The goal is to take our redux connected Jeopardy lab from day 3 and add it to our portfolio

* Move over the Jeopardy component files from your previous lab
* Ensure you account for the necessary actions, reducers, and containers that make Jeopardy function 
* Add a button that allows the user to restart their jeopardy game.
* Add a link to the Navigation in our portfolio to access your Jeopardy game
* Create a route in `App.js` to display the game when the link is clicked in the Navigation

## Hard Mode
Update your express application to include a new API endpoint that manages a subject matter of your choosing. This will live in your cookBook db in Mongo but it does not have to be related to cooking or cook books. You should focus on providing the same CRUD functionality you have with recipes. Update your portfolio application using the Recipe component as a reference to add a component that manages your new endpoint.

* Create a new mongoose schema and model that represents your subject matter
* Create a service that uses that model to interact with mongodb
* Create a controller that responds to routes and utilizes the new service.
* Create the needed routes to access the methods on our new controller
* Duplicate the Recipe functionality in your React portfolio and add a component that manages your new endpoint