/* <script> */

  function generate_meta(config) {
    var canonical_url = canonize_url(config.path);
    var page_ogconf = {
      "og:title": config.title,
      "og:description": config.description,
      "og:image": config.image,
      "theme-color": config.theme_color,
      "og:url": canonical_url,
    };
    var metas = Object.entries(page_ogconf).map(function([key, value]) {
      return { hid: key, name: key, content: value };
    });
    var meta_tags = [
      { hid: "title", name: "title", content: page_ogconf["og:title"] },
      {
        hid: "description",
        name: "description",
        content: page_ogconf["og:description"]
      },
      ...metas
    ];
    return meta_tags;
  }

  function canonize_url(page_path) {
    var base_url = require("@@/config/opengraph.json")["og:url"];
    return `${base_url}${page_path}`;
  }

  function tag_canonical_url(page_path) {
    return [{'hid': 'canonical', 'rel': 'canonical', 'href':  canonize_url(page_path) }];
  }

export {
  generate_meta,
  canonize_url,
  tag_canonical_url,
}


/* </script> */