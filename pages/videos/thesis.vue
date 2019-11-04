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

var ogconf = {
  'og:title': 'Thesis',
  'og:description': 'The Alpha and Omega of an academic final project depicted as two VFX-animation videos',
  'og:image': '/thumb/BFMLG_Thumb.png',
  'theme-color': '#911039',
  'og:url': 'https://stahlferro.github.io/videos/thesis',
};
var metas = Object.entries(ogconf).map(function([key, value]) {
  return { hid: key, name: key, content: value };
});

export default {
  data: function() {
      return data;
  },
  head() {
    return {
      title: ogconf["og:title"],
      meta: [
        { hid: "title", name: "title", content: ogconf["og:title"] },
        {
          hid: "description",
          name: "description",
          content: ogconf["og:description"]
        },
        ...metas
      ]
    };
  }
}
</script>
