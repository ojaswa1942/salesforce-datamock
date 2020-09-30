const faker = require("faker/locale/en_IND");

// Object: Field Name: Fn
const getCompoundAddressField = (key) => {
	return {
		[`${key}City`]: faker.address.city,
		[`${key}Country`]: faker.address.country,
		[`${key}Latitude`]: faker.address.latitude,
		[`${key}Longitude`]: faker.address.longitude,
		[`${key}PostalCode`]: faker.address.zipCode,
		[`${key}State`]: faker.address.state,
		[`${key}Street`]: faker.address.streetAddress,
		[`${key}GeocodeAccuracy`]: () => `Address`,
	};
}

const map = {
	Account: {
		Name: faker.finance.accountName,
		Phone: faker.phone.phoneNumber,
		...getCompoundAddressField('Billing'),
		...getCompoundAddressField('Shipping'),
	},

}

const testMap = {
	Account: {
		Name: faker.finance.accountName,
		Phone: faker.phone.phoneNumber,
		...getCompoundAddressField('Billing'),
		...getCompoundAddressField('Shipping'),
	},
}

module.exports = {
	map,
	testMap,
};