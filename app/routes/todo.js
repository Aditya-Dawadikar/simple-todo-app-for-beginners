const express = require('express');
const router = express.Router();

//create a task
router.post('/task/create', (req, res) => {
    //get req body and put it to the database
    res.status(200).json({
        message: "succesfully task create",
    });
})

router.patch('/task/update/:id', (req, res) => {
    res.status(200).json({
        message: "succesfully task updated " + req.params.id,
    });
})

router.delete('/task/delete/:id', (req, res) => {
    res.status(200).json({
        message: "succesfully task delete " + req.params.id,
    });
})

router.patch('/task/mark/:id', (req, res) => {
    res.status(200).json({
        message: "succesfully task marked" + req.params.id,
    });
})

router.get('/task/all', (req, res) => {
    res.status(200).json({
        message: "sending all the tasks"
    })
})

/*
Response codes 

starting with 100,200,300,400,500,600

404: resource not found
500: internal server error
200: success
401: bad request
*/

module.exports = router;