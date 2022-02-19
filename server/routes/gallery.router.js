const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route

router.put('/:id', (req, res) => {
    console.log('req.body in PUT request is', req.body);

    let idToUpdate = req.params.id;
    console.log('idToUpdate is', idToUpdate);
    
    let likesToUpdate = req.body.likes;
    console.log('likesToUpdate is', likesToUpdate);

    let sqlText = `
        UPDATE gallery
        SET likes = $2
        WHERE id = $1;
    `
    let sqlValues = [idToUpdate, likesToUpdate];

    pool.query(sqlText, sqlValues)
    .then(result => {
        console.log('database processed PUT request', result)
        res.sendStatus(200);
    }).catch(err => {
        console.log('database was not updated for PUT request', err)
        res.sendStatus(500);
    })
}) // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // Get all of the images from the database
    const sqlText = `SELECT * FROM gallery ORDER BY id`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
}); // END GET Route

module.exports = router;