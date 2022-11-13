const io = require('socket.io-client');

const createConnection = (data, urls) =>
	new Promise((resolve, reject) => {
		if (!data || !urls) return reject('Invalid params.');

		let socket = io(urls.PluginsURL, {
			extraHeaders: {
				APIKey: data.key,
			},
		});

		resolve(socket);
	});

module.exports = { createConnection };
