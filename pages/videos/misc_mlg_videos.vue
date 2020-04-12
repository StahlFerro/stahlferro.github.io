<template>
  <div>
    <section class="hero is-dark-2 is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <h1 class="title is-1">Miscellaneous MLG Videos</h1>
            <p>
              These are various MLG-style edited videos not tied to any series I have worked on.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-mlg-dark-violet is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div
              v-for="(mlgv, index) in misc_mlg_videos"
              class="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet is-full-mobile"
              v-bind:key="index"
            >
              <div class="card is-neon-white-c">
                <div class="card-image">
                  <figure class="image">
                    <img v-bind:src="`https://img.youtube.com/vi/${mlgv.youtube_id}/hqdefault.jpg`" />
                  </figure>
                </div>
                <div class="card-content">
                  <a
                    v-bind:href="`https://www.youtube.com/watch?v=${mlgv.youtube_id}`"
                    style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
                  ></a>
                  <div class="content">
                    <p class="title is-4">{{ mlgv.name }}</p>
                    <p class="content">{{ mlgv.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
var misc_mlg_videos = require('./_data/misc_mlg_videos.json');
var data = {misc_mlg_videos: misc_mlg_videos};


const { generate_meta, tag_canonical_url } = require("@@/utils/meta_handler.js");
let page_path = "/videos/misc_mlg_videos";
let title = "Miscellaneous MLG";
let meta_list = generate_meta({
  "title": title,
  "description": "Various assorted MLG videos",
//   "image": "/thumb/BFMLG_Thumb.png",
  "theme_color": "#267e2b",
  "path": page_path
});

export default {
    data () {
      return data;
    },
    head () {
      return {
      title: title,
      meta: meta_list,
      link: tag_canonical_url(page_path),
    };
  }
}
</script>
