import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'icons.iconarchive.com',
			},
			{
				hostname: 'via.placeholder.com',
			},
		],
	},
};

export default nextConfig;
