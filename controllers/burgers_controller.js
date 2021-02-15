const express = require('express');
const router = express.Router();
const burger = require ('../models/burger.js');

router.get('/', (req, res) => {
   burger.selectAll((data) => {
       const hbsObject = {
           burgers: data,
       };
       console.log('burger', hbsObject)
       res.render('index', hbsObject)
   })
});

router.post('/api/burgers', (req,res) => {
    burger.insert(['name', 'good'], [req.body.name, req.body.good], (result) => {
        console.log(result);
        res.json({ id: result.insertID});
    })
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);
    burger.updateOne(
        {
            good: req.body.good,
        },
        condition, 
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
    })
});

module.exports = router;