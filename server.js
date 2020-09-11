/*
Todo app
1. add new task -C
2. update a task -U
3. delete a task -D
4. mark as complete -U
5. get all task(pending/complete) -R

Anatomy of index.js or server.js
1. require all the packages
2. require all the linked files/modules/routes/handlers/controllers/middleware
3. add middleware/auth/filter
4. connect to the database(if required)
5. add routing
6. some other task
7. listen to the port
*/

//require the packages
const express = require('express');
const bodyParser = require('body-parser')

//create app
const app = express();

//require routes
const todoRoutes = require('./app/routes/todo');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routing
app.use('/todo', todoRoutes);

//listen 
app.listen(3000, () => {
    console.log("server is running on port 3000");
})