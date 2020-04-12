<template>
  <section class="section is-dark-2">
    <div class="container">
      <div class="columns is-multiline">
        <!-- {% for vd in site.data.videos %} -->
        <div v-for="(vd, index) in videos" v-bind:key="index" class="column
         is-one-third-widescreen
         is-one-half-desktop
         is-half-tablet
         is-full-mobile">
          <div class="card is-white-e">
            <div class="card-image">
              <figure class="image is-16by9">
                <template v-if="vd.thumb_url">
                  <img v-bind:src="`/thumb/${vd.thumb_url}`" />
                </template>
                <template v-else>
                  <img src="https://bulma.io/images/placeholders/640x360.png" />
                </template>
              </figure>
            </div>
            <div class="card-content">
              <nuxt-link
                v-bind:to="vd.page_url? `/videos/${vd.page_url}` : `/wip`"
                style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
              ></nuxt-link>
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4-mobile">{{ vd.name }}</p>
                  <p class="subtitle is-5">{{ vd.desc }}</p>
                </div>
              </div>
              <div class="content">
                <p class="is-size-5"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { generate_meta, tag_canonical_url } = require("@@/utils/meta_handler.js");
let page_path = "/videos";
let title = "Videos";
let meta_list = generate_meta({
    "title":title,
    "description": "All of the youtube videos I have made with information regarding them",
    "image": "/thumb/ogthumb_videos.png",
    "theme_color": "#e31e1e",
    "path": page_path
  }
);

var data = {
  videos: require("./_data/videos.json"),
};
export default {
  head () {
    return {
      title: title,
      meta: meta_list,
      link: tag_canonical_url(page_path),
    }
  },
  data () {
    return data;
  }
};
</script>
