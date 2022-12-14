const io = require('socket.io-client');

const createConnection = ({ params, urls }) =>
	new Promise((resolve, reject) => {
		if (!params || !urls) return reject('Invalid params.');

		let socket = io(urls.PluginsURL, {
			extraHeaders: {
				APIKey: params.key,
			},
		});

		socket.emit('setup', { name: params.name });

		resolve(socket);
	});

module.exports = { createConnection };
