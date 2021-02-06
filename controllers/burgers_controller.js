const express = require('express');
const router = express.Router();
const burger = require ('../models/burger');

router.get('/', (req, res) => {
   burger.selectAll((data) => {
       var burger = {
           burger_data: data,
       };
       res.render('index', burger)
   })
});

router.post('/api/burgers', (req,res) => {
    burger.insert(req.body.good, (result) => {
        console.log(result);
        res.redirect('/');
    })
});

router.put('/api/burgers/:id', (req, res) => {
    burger.updateOne(req.params.id, (result) => {
        console.log(result);
        res.sendStatus(200)
    })
});

module.exports = router;