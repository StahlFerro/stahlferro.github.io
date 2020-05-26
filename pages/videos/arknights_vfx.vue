<template>
  <div>
    <section class="hero is-dark-2 is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <h1 class="title is-1">Arknights Hybrid VFX-animation videos</h1>
            <p>
              A collection of hybrid VFX animations that parodies the mobile game Arknights
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-dark-2 is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div
              v-for="(akv, index) in ark_vids"
              class="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet is-full-mobile"
              v-bind:key="index"
            >
              <div class="card is-neon-white-c">
                <div class="card-image">
                  <figure class="image">
                    <img v-bind:src="`https://img.youtube.com/vi/${akv.youtube_id}/hqdefault.jpg`" />
                  </figure>
                </div>
                <div class="card-content">
                  <a
                    v-bind:href="`https://www.youtube.com/watch?v=${akv.youtube_id}`"
                    style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
                  ></a>
                  <div class="content">
                    <p class="title is-4">{{ akv.name }}</p>
                    <p class="content">{{ akv.description }}</p>
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
var ark_vids = require('./_data/arknights_videos.json');
var data = {ark_vids: ark_vids};


const { generate_meta, tag_canonical_url } = require("@@/utils/meta_handler.js");
let page_path = "/videos/arknights_vfx";
let title = "Arknights VFX-animation Videos";
let meta_list = generate_meta({
  "title": title,
  "description": "Arknights meme videos composited in high quality VFX",
//   "image": "/thumb/BFMLG_Thumb.png",
  "theme_color": "#dddddd",
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
