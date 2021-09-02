const express = require('express');
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

router.route('/seats').get((req, res) => {
    res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
    res.json(db.seats[`${req.params.id}`]);
});

router.route('/seats').post((req, res) => {
    req.body.id = uuidv4();
    const takenSeats = db.seats.some(x => (x.seat === seat && x.day === day));
    if (takenSeats) {
        res.json({message: "The slot is already taken..."});
    } else if (day && seat && client && email) {
        day;
        seat;
        client;
        day;
        seat;
        client;
        email;
        db.seats.push(req.body);
        res.json({message: 'OK'});
    } else {
        res.json({message: 'Please put all informations'});
    }
});

router.route('/seats/:id').put((req, res) => {
    const seatData = db.seats.find(x => (x.id === req.params.id))
    const {day, seat, client, email} = req.body;

    if (day && seat && client && email) {
        seatData.day = day
        seatData.seat = seat
        seatData.client = client
        seatData.email = email
        res.json({message: "OK"});
    } else {
        res.json({message: "Please put all informations"})
    }
});

router.route('/seats/:id').delete((req, res) => {
    db.seats.splice(`${req.params.id}`, 1);
    res.json({message: 'OK'});
});

module.exports = router;