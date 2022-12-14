const fetchURLs = require('./src/urls');
const connections = require('./src/connections');

class SDK {
	constructor(params) {
		const urls = fetchURLs(params.dev);

		this.params = params;
		this.urls = urls;

		this.createConnection = () => connections.createConnection(this);
	}
}

module.exports = SDK;
