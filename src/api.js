const axios = require('axios');

const createAPI = (urls) =>
	axios.create({
		baseURL: urls.APIURL,
	});

module.exports = { createAPI };
