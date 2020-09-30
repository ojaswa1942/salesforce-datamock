require('dotenv').config();

module.exports = {
	TOKEN: process.env.ACCESS_TOKEN,
	URL: process.env.INSTANCE_URL,
	entriesPerObject: 3,
};
