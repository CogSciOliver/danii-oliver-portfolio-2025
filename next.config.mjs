import mdx from "@next/mdx";
import remarkGfm from 'remark-gfm'; 
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = mdx({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
	},
});


const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "md", "mdx"],
};

//export default withNextIntl(withMDX(nextConfig));
export default withNextIntl(
  withMDX({
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  })
);