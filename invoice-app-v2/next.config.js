module.exports = {
	async redirects() {
		return [
			// Basic redirect
			{
				source: "/",
				destination: "/invoices",
				permanent: true,
			},
		];
	},
};
