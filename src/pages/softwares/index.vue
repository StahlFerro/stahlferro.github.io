<template>
  <section class="hero is-fullheight-with-navbar is-dark-2">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline">
          <div v-for="(sf, index) in softwares" class="column
          is-one-third-widescreen
          is-one-half-desktop
          is-half-tablet
          is-full-mobile" v-bind:key="index">
            <div class="card is-white-e">
              <div class="card-image">
                <figure class="image is-16by9">
                  <template v-if="sf.thumb_url">
                    <img v-bind:src="`/thumb/${sf.thumb_url}`" />
                  </template>
                  <template v-else>
                    <img src="https://bulma.io/images/placeholders/640x360.png" />
                  </template>
                </figure>
              </div>
              <div class="card-content">
                <nuxt-link
                  v-bind:to="`/softwares/${sf.page_url}`"
                  style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
                ></nuxt-link>
                <div class="media">
                  <template v-if="sf.logo_url">
                    <div class="media-left">
                      <img v-bind:src="`/logos/${sf.logo_url}`" width="80px" height="80px" />
                    </div>
                  </template>
                  <div class="media-content">
                    <p class="title is-size-4-mobile">{{ sf.name }}</p>
                    <p class="subtitle is-5">
                      <strong>{{ sf.subdesc }}</strong>
                    </p>
                  </div>
                </div>
                <div class="content">
                  <p class="is-size-5">{{ sf.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { buildMetaTags, buildCanonicalUrlTag } = require("@/utils/meta_handler.js");
const softwares_json = require("./_data/softwares.json");

export default {
  data() {
    return {
      title: "Softwares",
      softwares: softwares_json,
    };
  },
  head() {
    let meta_tags = buildMetaTags({
        "title": this.title,
        "description": "All software projects that I develop and maintain.",
        "image": "/thumb/ogthumb_softwares.png",
        "theme_color": "#1e38bd",
        "path": this.$route.path,
      }
    );
    return {
      title: this.title,
      meta: meta_tags,
      link: buildCanonicalUrlTag(this.$route.path),
    };
  }
};
</script>
