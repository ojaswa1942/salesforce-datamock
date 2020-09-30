const fetch = require("node-fetch");
const faker = require("faker/locale/en_IND");
const { TOKEN, URL, entriesPerObject } = require("./config");
const { map: FieldMap, testMap: TestFieldMap } = require("./ObjectFieldMap");

(async () => {
	let promises = [];
	for (let objectKey in FieldMap) {
		let promises = [], repeat = entriesPerObject;
		while(repeat--){
			let fields = {};
			Object.entries(FieldMap[objectKey]).forEach(([field, valueFn]) => {
				fields[field] = valueFn();
			});
			console.log(`Field ready to be inserted in ${objectKey}:\n`, fields);
			promises.push(
				fetch(`${URL}/services/data/v37.0/sobjects/${objectKey}`, {
					method: `post`,
					headers: {
						Authorization: `Bearer ${TOKEN}`,
						'Content-type': 'application/json'
					},
					'Content-Type': 'application/json',
					body: JSON.stringify(fields),
				})
				.then(res => res.json())
				.then(res => {
					if(!res.success) throw new Error(`Something went wrong: ${JSON.stringify(res)}`);
					console.log(`Success response received:`, res);
				})
			);
		}
		try{
			await Promise.all(promises);
		} catch(e) {
			console.error(`Error while updating fields for Object ${objectKey}\n${e}`);
		}
	}

})();
