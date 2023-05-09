# Getting Started with PUB Quiz application

SIMPLE APPLICATION SHOWS AT FIRST ALL QUIZES FROM DATABASE(IN THIS CASE JSON-SERVER). YOU CAN CREATE, DELETE, MODIFY AND RUN ANY OF QUIZES SHOWN IN THE TABLE. BY CLICKING RUN BUTTON AT SPECIFIC ROW YOU ARE REDIRECTED TO A NEW PAGE AND AUTOMATICALY QUIZ YOU SELECTED WILL START TO RUN

At first you have to run open the terminal and type:
### `npm install`
To install all dependencies related to a project neccessary for successfully application running

After installing dependencies above you should type in the terminal and navigate to a quiz folder
### `json-server --watch src/json-server/db.json --port 3113`
This is mandatory step for having data in the application
NOTE: this tab must be active when you run application, so do not close it until you want to terminate application

After setting data up you should open another tab in the terminal and run application by using this command below
### `npm start`
This command will start application and you can run it in browser -Open http://localhost:3000 to view it in your browser.
