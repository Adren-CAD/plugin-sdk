const fetchURLs = require('./src/urls');

const API = require('./src/api');
const connections = require('./src/connections');

function SDK(params) {
	const urls = fetchURLs(params.dev);

	this.connection = connections.createConnection(urls);

	this.API = API.createAPI(urls);
}

module.exports = SDK;
