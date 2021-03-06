const slug = require("rehype-slug");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
  },
});

const isProd = process.env.NODE_ENV === "production";

module.exports = withMDX({
  // because we're serving this using GH pages
  assetPrefix: isProd ? "/fabric-design/" : undefined,
  basePath: isProd ? "/fabric-design" : undefined,
  pageExtensions: ["js", "jsx", "mdx"],
});
