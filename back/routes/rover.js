const express = require('express');
const router = express.Router();
const {apiUrl, formatDate} = require('../util/stringBuilder');
const {authenticateToken} = require('../util/jwt');
const axios = require('axios');

router.get('/:name/:camera', authenticateToken, async (req, res) => {
    const url = apiUrl(req.params.name,
        {
            sol: 1000, camera: req.params.camera,
            page: req.query.page
            // TODO earth_date: formatDate(new Date()), camera: req.params.camera
        });
        console.log(url)
    axios.get(url)
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send(error));
});

module.exports = router;
