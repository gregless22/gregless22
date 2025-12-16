import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	// @ts-ignore
	reactCompiler: true,
};

export default nextConfig;
