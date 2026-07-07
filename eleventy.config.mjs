import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export default async function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("documents");
	eleventyConfig.addPassthroughCopy("media");
	eleventyConfig.addPassthroughCopy("styles");

	// plugins: markdown-it
	let options = {
		html: true,
		breaks: true,
		linkify: false,
	};

	let markdownLib = markdownIt(options).use(markdownItAnchor, {
		tabIndex: false,
	});

	eleventyConfig.setLibrary("md", markdownLib);

	// input directory
	return {
		dir: {
			input: "pages",
		},
	};
}
