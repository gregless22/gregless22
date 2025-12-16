import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	basePath: "/gregless22",
	// @ts-ignore
	reactCompiler: true,
};

export default nextConfig;
