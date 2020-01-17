<template>
  <div>
      <section class="hero is-maroon is-medium">
          <div class="hero-body">
              <div class="container">
                  <div class="content has-text-justified">
                      <h1 class="title is-1 has-text-centered">THESIS</h1>
                      <p>
                          During the final two semesters, the amount of time available to make youtube videos was extremely limited.
                          Internship project, IRL dev work and daily night classes are enough for me to postpone the making of any big
                          youtube videos.
                      </p>
                      <p>
                          But before executing all of these, two important videos, one Alpha and the other Omega, will signify the start
                          and end of my final academic stride. Both are VFX-animation videos depicting the urgency of prioritizing academics
                          at that point of time.
                      </p>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
// var bf_videos = require('./_data/bf_videos.json');
var data = {};
// var data = {bf_videos: bf_videos};

const { generate_meta, tag_canonical_url } = require("@@/utils/meta_handler.js");
let page_path = "/videos/thesis";
let title = "Thesis";
let meta_list = generate_meta({
    "title":title,
    "description": "The Alpha and Omega of an academic final project depicted as two VFX-animation videos.",
    // "image": "/thumb/BFMLG_Thumb.png",
    "theme_color": '#944759',
    "path": page_path
  }
);

export default {
  data () {
    return data;
  },
  head () {
    return {
      title: title,
      meta: meta_list,
      link: tag_canonical_url(page_path),
    }
  }
}
</script>
