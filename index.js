const fetchURLs = require('./src/urls');

const API = require('./src/api');
const connections = require('./src/connections');

class SDK {
	constructor(params) {
		this.params = params;
		this.urls = fetchURLs(params.dev);
	}

	createConnection() {
		const connection = connections.createConnection(this.params, this.urls);

		return connection;
	}
	async createAPI() {
		const instance = await API.createAPI(this.urls);

		return instance;
	}
}

module.exports = SDK;
