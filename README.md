# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  When an asynchronous operation within a route handler fails and the promise rejects, the server crashes if there is no proper error handling in place. 

The `bug.js` file shows an Express.js server with a route that performs an asynchronous operation which can fail. The `bugSolution.js` file demonstrates how to add proper error handling to prevent crashes.