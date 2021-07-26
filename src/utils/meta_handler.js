/**
 * Build Nuxt meta tags for header
 * @param {Object} config Configuration object
 */
function buildMetaTags(config) {
  var canonical_url = getAbsoluteUrl(config.path);
  var page_ogconf = {
    "og:title": config.title,
    "og:description": config.description,
    "og:image": config.image,
    "theme-color": config.theme_color,
    "og:url": canonical_url,
  };
  var metas = Object.entries(page_ogconf).map(function ([key, value]) {
    return {
      hid: key,
      name: key,
      content: value
    };
  });
  var meta_tags = [{
      hid: "title",
      name: "title",
      content: page_ogconf["og:title"]
    },
    {
      hid: "description",
      name: "description",
      content: page_ogconf["og:description"]
    },
    ...metas
  ];
  return meta_tags;
}

/**
 * Convert page path into full url
 * @param {string} page_path Page path
 */
function getAbsoluteUrl(page_path) {
  var base_url = require("@@/config/opengraph.json")["og:url"];
  return `${base_url}${page_path}`;
}

function buildCanonicalUrlTag(page_path) {
  return [{
    'hid': 'canonical',
    'rel': 'canonical',
    'href': getAbsoluteUrl(page_path)
  }];
}

export {
  buildMetaTags,
  getAbsoluteUrl,
  buildCanonicalUrlTag,
}
