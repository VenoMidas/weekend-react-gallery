const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    // console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `UPDATE "gallery" SET "likes" = "likes" + '1' WHERE "id" = $1;`;
    pool.query(queryText, [galleryId]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
    // for (const galleryItem of galleryItems) {
    //     if (galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "gallery" ORDER BY "id";';
    pool.query(queryText).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
}); // END GET Route

// DELETE Route
router.delete('/:id', (req, res) => {
    const galleryId = req.params.id;
    const queryText = 'DELETE from "gallery" WHERE "id" = $1;';
    pool.query(queryText, [galleryId]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500);
    });
}); // END DELETE route

// POST route
router.post('/', (req, res) => {
    const galleryItem = req.body;
    const queryText = `INSERT INTO "gallery" ("title", "description", "path")
                       VALUES ($1, $2, $3);`;
    pool.query(queryText, [galleryItem.title, galleryItem.description, galleryItem.path]).then((results) => {
        res.send(results);
    }).catch((error) => {
        console.log('error in post gallery');
        res.sendStatus(500);
    });
});

module.exports = router;