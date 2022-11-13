function urls(dev) {
	this.PluginsURL = dev
		? 'http://localhost:5050'
		: 'https://plugins.adrencad.com';

	this.APIURL = dev
		? 'http://localhost:3001/internal'
		: 'https://api.adrencad.com/url';

	return this;
}

module.exports = urls;
