const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Markdown configuration
  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  });
  
  eleventyConfig.setLibrary("md", md);

  // Pass through copy for static assets
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/ads.txt");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy({ "src/img/favicon.png": "favicon.png" });

  // Custom filter to get page slug from URL
  eleventyConfig.addFilter("getSlug", function(url) {
    if (!url) return "";
    const parts = url.split('/').filter(p => p);
    return parts[parts.length - 1] || "";
  });

  // Custom filter to check if URL starts with a path
  eleventyConfig.addFilter("startsWith", function(url, path) {
    if (!url) return false;
    return url.startsWith(path);
  });

  // Custom filter for getting tutorial name from URL
  eleventyConfig.addFilter("getTutorialName", function(url) {
    if (!url) return "";
    const parts = url.split('/').filter(p => p);
    if (parts[0] === 'tutorial' && parts.length > 1) {
      return parts[1];
    }
    return "";
  });

  // Collections
  eleventyConfig.addCollection("tutorials", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/tutorial/*.md").sort((a, b) => {
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });

  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/[0-9][0-9][0-9][0-9]/**/*.md");
  });

  // Watch targets
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./tailwind.css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
