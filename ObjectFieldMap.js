const faker = require("faker/locale/en_IND");

const getCompoundAddressField = (key = ``) => {
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
};

const AccountIds = [`0014W000024ykC2QAI`, `0014W000024ykC7QAI`, `0014W000024ykCCQAY`];
const AssetIds = [`02i4W00000EmfUsQAJ`, `02i4W00000EmfUxQAJ`, `02i4W00000EmfUsQAJ`];
const CampaignIds = [`7014W000000Gw19QAC`, `7014W000000Gw14QAC`, `7014W000000Gw1EQAS`];
const ProfileIds = [`00e4W0000021qys`, `00e4W0000021qyr`, `00e4W0000021qyt`];
const UserIds = [`0054W00000BbSxmQAF`, `0054W00000BbSxrQAF`, `0054W00000AhcVY`, `0054W00000BPSfN`, `0054W00000BPSfT`, `0054W00000BPSfS`];
const ContactIds = [`0034W00002DQmUqQAL`, `0034W00002DQmUvQAL`, `0034W00002DQmV0QAL`, `0034W00002DQmV5QAL`, `0034W00002DQmVAQA1`, `0034W00002DQmVFQA1`];
const CampaignMemberIds = [`00v4W00001Gi0oqQAB`, `00v4W00001Gi0TDQAZ`, `00v4W00001Gi14lQAB`];
const CaseIds = [`5004W00001VHNEFQA5`, `5004W00001VHNEAQA5`, `5004W00001VHNEKQA5`];
const ContractIds = [`8004W000004IuwkQAC`, `8004W000004IuwpQAC`, `8004W000004IuwuQAC`];
const DandBCompanyIds = [`06E4W000000RjeYUAS`, `06E4W000000RjedUAC`, `06E4W000000RjeiUAC`];
const LeadIds = [`00Q4W00001MPOADUA5`, `00Q4W00001MPOAIUA5`, `00Q4W00001MPOANUA5`];


const map = {
	Account: {
		Name: faker.finance.accountName,
		Phone: faker.phone.phoneNumber,
		...getCompoundAddressField('Billing'),
		...getCompoundAddressField('Shipping'),
	},
	Asset: {
		Name: faker.company.companyName,
		SerialNumber: () => faker.random.alphaNumeric(10),
		AccountId: () => faker.random.arrayElement(AccountIds),
	},
	Campaign: {
		Name: () => faker.random.words(3),
	},
	// License Limit will trigger
	User: {
		Alias: () => faker.random.alphaNumeric(8),
		TimeZoneSidKey: () => `Asia/Kolkata`,
		LocaleSidKey: () => `en_IN`,
		EmailEncodingKey: () => `UTF-8`,
		LanguageLocaleKey: () => `en_US`,
		ProfileId: () => faker.random.arrayElement(ProfileIds),
		...getCompoundAddressField(''),
		Username: faker.internet.email,
		FirstName: faker.name.firstName,
		LastName: faker.name.lastName,
		Email: faker.internet.email,
		CompanyName: faker.company.companyName,
		SenderName: faker.name.findName,
		SenderEmail: faker.internet.email,
		Signature: faker.lorem.sentence,
		StayInTouchNote: faker.lorem.sentence,
		Phone: faker.phone.phoneNumber,
		MobilePhone: faker.phone.phoneNumber,
		CommunityNickname: faker.internet.userName,
		Department: faker.commerce.department,
	},
	
	Contact: {
		FirstName: faker.name.firstName,
		LastName: faker.name.lastName,
		Email: faker.internet.email,
		Department: faker.commerce.department,
		Phone: faker.phone.phoneNumber,
		MobilePhone: faker.phone.phoneNumber,
		...getCompoundAddressField(`Other`),
		...getCompoundAddressField(`Mailing`),
	},
	Case: {
		AccountId: () => faker.random.arrayElement(AccountIds),
		ContactId: () => faker.random.arrayElement(ContactIds),
		SuppliedCompany: faker.company.companyName,
		SuppliedEmail: faker.internet.email,
		SuppliedPhone: faker.phone.phoneNumber,
		SuppliedName: faker.name.findName,
	},
	Contract: {
		AccountId: () => faker.random.arrayElement(AccountIds),
		...getCompoundAddressField(`Billing`),
		Description: () => faker.fake(`{{company.companyName}} {{lorem.paragraphs}} {{company.companyName}} {{lorem.paragraphs}} {{company.companyName}}`)
	},
	DandBCompany: {
		Name: faker.company.companyName,
		...getCompoundAddressField(``),
		GeocodeAccuracy: () => `G`,
		...getCompoundAddressField(`Mailing`),
		MailingLatitude: () => undefined,
		MailingLongitude: () => undefined,
		Phone: faker.phone.phoneNumber,
		DomesticUltimateBusinessName: faker.company.companyName,
		GlobalUltimateBusinessName: faker.company.companyName,
		ParentOrHqBusinessName: faker.company.companyName,
		Description: () => faker.fake(`{{company.companyName}} {{random.words(12)}} {{company.companyName}} `),
		DunsNumber: () => faker.random.alphaNumeric(9),
		DomesticUltimateDunsNumber: () => faker.random.alphaNumeric(9),
		GlobalUltimateDunsNumber: () => faker.random.alphaNumeric(9),
		NationalId: () => faker.random.alphaNumeric(60),
	},
	EmailMessage: {
		FromName: faker.name.findName,
		BccAddress: faker.internet.email,
		CcAddress: faker.internet.email,
		FromAddress: faker.internet.email,
		ToAddress: faker.internet.email,
	},
	Lead: {
		FirstName: faker.name.firstName,
		LastName: faker.name.lastName,
		Email: faker.internet.email,
		Phone: faker.phone.phoneNumber,
		MobilePhone: faker.phone.phoneNumber,
		Company: faker.company.companyName,
		CompanyDunsNumber: () => faker.random.alphaNumeric(9),
		DandbCompanyId: () => faker.random.arrayElement(DandBCompanyIds),
	},

}

const testMap = {
	Order: {
		AccountId: () => faker.random.arrayElement(AccountIds),
		...getCompoundAddressField(`Billing`),
		...getCompoundAddressField(`Shipping`),
		Name: () => faker.random.words(2),
		EffectiveDate: faker.date.future,
		Status: () => `Draft`,
	}
}

module.exports = {
	map,
	testMap,
};