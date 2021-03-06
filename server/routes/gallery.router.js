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

// POST Route
router.post('/', (req, res) => {
    const image = req.body;
    const sqlText = `INSERT INTO gallery (name, url)
                     VALUES ($1, $2)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [image.name, image.url])
        .then((result) => {
            console.log(`Added image to the database`, image);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error making database query ${sqlText}`, err);
            res.sendStatus(500); // Good server always responds
        })
}) // END POST Route


// DELETE Route
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete ID', reqId);
    let queryText = 'DELETE FROM gallery WHERE id = $1;'
    pool.query(queryText, [reqId])
        .then((result) => {
            console.log('Image deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error making database query', queryText, error);
            res.sendStatus(500);
        })
}) // END DELETE Route

module.exports = router;