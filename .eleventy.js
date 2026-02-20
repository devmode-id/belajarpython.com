const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
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
  eleventyConfig.addFilter("getSlug", function (url) {
    if (!url) return "";
    const parts = url.split('/').filter(p => p);
    return parts[parts.length - 1] || "";
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Custom filter to check if URL starts with a path
  eleventyConfig.addFilter("startsWith", function (url, path) {
    if (!url) return false;
    return url.startsWith(path);
  });

  // Custom filter for getting tutorial name from URL
  eleventyConfig.addFilter("getTutorialName", function (url) {
    if (!url) return "";
    const parts = url.split('/').filter(p => p);
    if (parts[0] === 'tutorial' && parts.length > 1) {
      return parts[1];
    }
    return "";
  });

  // Custom filter for URL encoding
  eleventyConfig.addFilter("urlencode", function (str) {
    return encodeURIComponent(str);
  });

  // Collections
  eleventyConfig.addCollection("tutorials", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/tutorial/*.md").sort((a, b) => {
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });

  eleventyConfig.addCollection("enTutorials", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/en/tutorial/*.md").sort((a, b) => {
      return (a.data.order || 0) - (b.data.order || 0);
    });
  });

  eleventyConfig.addCollection("articles", function (collectionApi) {
    const items = collectionApi.getFilteredByGlob("src/[0-9][0-9][0-9][0-9]/**/*.md");

    function getSortTime(item) {
      if (item?.data?.date) {
        const parsed = new Date(item.data.date);
        if (!Number.isNaN(parsed.getTime())) return parsed.getTime();
      }

      const url = item?.url || "";
      const match = url.match(/^\/(\d{4})\/(\d{2})\//);
      if (match) {
        const year = match[1];
        const month = match[2];
        const parsed = new Date(`${year}-${month}-01T00:00:00Z`);
        if (!Number.isNaN(parsed.getTime())) return parsed.getTime();
      }

      return 0;
    }

    // Newest first
    return items.sort((a, b) => getSortTime(b) - getSortTime(a));
  });

  // Format "Januari 2026" from URL like /2026/01/slug/
  eleventyConfig.addFilter("getMonthYearFromUrl", function (url) {
    if (!url) return "";
    const match = url.match(/^\/(\d{4})\/(\d{2})\//);
    if (!match) return "";

    const year = match[1];
    const month = match[2];

    const monthNames = {
      "01": "Januari",
      "02": "Februari",
      "03": "Maret",
      "04": "April",
      "05": "Mei",
      "06": "Juni",
      "07": "Juli",
      "08": "Agustus",
      "09": "September",
      "10": "Oktober",
      "11": "November",
      "12": "Desember",
    };

    return `${monthNames[month] || month} ${year}`;
  });

  // Watch targets
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./tailwind.css");

  // BrowserSync config for live reload on CSS changes
  eleventyConfig.setServerOptions({
    watch: ["_site/css/**/*.css"],
    liveReload: true,
  });

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
