<template>
  <div>
    <section class="hero is-forrest-dark-2 is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <h1 class="title is-1">Tutorials</h1>
            <p>These are tutorial videos mainly on After Effects on how I make some VFX elements that are used on my videos</p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-dark-2-forrest is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered is-multiline">
            <div
              v-for="(tvid, index) in tutorial_videos"
              class="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet is-full-mobile"
              v-bind:key="index"
            >
              <div class="card is-neon-white-c">
                <div class="card-image">
                  <figure class="image">
                    <img v-bind:src="`https://img.youtube.com/vi/${tvid.youtube_id}/hqdefault.jpg`" />
                  </figure>
                </div>
                <div class="card-content">
                  <a
                    v-bind:href="`https://www.youtube.com/watch?v=${tvid.youtube_id}`"
                    style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
                  ></a>
                  <div class="content">
                    <p class="title is-4">{{ tvid.name }}</p>
                    <p class="content">{{ tvid.description }}</p>
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
var tutorial_videos = require('./_data/tutorial_videos.json');
var data = {tutorial_videos: tutorial_videos};


const { generate_meta, tag_canonical_url } = require("@/utils/meta_handler.js");
let page_path = "/videos/tutorials";
let title = "Tutorial Videos";
let meta_list = generate_meta({
  "title":title,
  "description": "Tutorial videos on various VFX elements I have made for videos and GIFs",
  // "image": "/thumb/BFMLG_Thumb.png",
  "theme_color": "#e4a126",
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
