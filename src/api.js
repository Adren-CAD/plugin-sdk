const axios = require('axios');

const { APIURL } = require('../urls');

const instance = axios.create({
	baseURL: APIURL,
});

module.exports = instance;
