
// require('dotenv').config()

import express from 'express';
// const express = require('express');

const app = express();

const port =  process.env.PORT || 7000;

// app.get('/', (req, res) => {
//     res.send('Hello from NodeJs Backend!');
// });

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke!'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke!'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is third joke!'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is fourth joke!'
        },
    ]

    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});