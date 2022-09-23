const { APIURL } = require('../urls');

const io = require('socket.io-client');

let connection;

const createConnection = (data, key) =>
	new Promise((resolve, reject) => {
		if (!data || !key) return reject('Invalid params.');

		let socket = io(APIURL, {
			extraHeaders: {
				APIKey: key,
			},
		});

		connection = socket;

		resolve(socket);
	});

module.exports = { createConnection, connection };
