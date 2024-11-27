/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	redirects: {
		source: "/about",
		destination: "/",
		permanent: true,
	},
};

export default nextConfig;
