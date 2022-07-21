export default {
	methods: {
		formatText(text) {
			return text ? text.trim().charAt(0).toUpperCase() + text.trim().substr(1).toLowerCase() : '';
		},
		sortObject(data) {
			return Object.keys(data).sort().reduce(
				(acc, key) => ({
					...acc,
					[key]: data[key]
				}),
				{}
			);
		}
	}
};
