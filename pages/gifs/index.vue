<template>
  <section class="hero has-background-dark-2 is-fullheight-with-navbar">
    <div class="gallery-main-container">
      <!-- <table class="gallery-table" width="100%">
        <tr>
      <td width="10%" class="gallery-sticky-menu-column">-->
      <div class="columns">
        <div class="column is-1">
          <div class="gallery-menu-container">
            <aside class="menu" style="margin: 0;">
              <ul class="menu-list left-menu">
                <li
                  v-for="(collection, index) in gifs"
                  v-bind:key="index"
                  class="menu-item"
                  v-bind:class="{'is-selected': menuselection == collection.page_url}"
                >
                  <a id="create_menu" v-on:click="menuselection = collection.page_url">
                    <p class="is-white-c">{{ collection.name }}</p>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div class="column is-11">
          <div class="gallery-columns-container">
            <div class="columns is-multiline" width="100%"
              v-for="(collection, index) in gifs" v-show="menuselection == collection.page_url" v-bind:key="index">
              <div class="column is-one-quarter"
                v-for="(gif, index) in collection.medias" v-bind:key="index">
                <div class="card is-neon-trident-cyan">
                  <div class="card-image">
                    <div class="video-container">
                      <video controls="controls" autoplay="autoplay" loop="loop">
                        <source
                          v-bind:src="`/gifstash/${collection.page_url}/${gif.fname_mp4}`"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <p class="title is-4">{{ gif.name }}</p>
                      <p class="content">{{ gif.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </td> -->
      <!-- <td width="90%" height="100%"> -->
      <!-- </td>
        </tr>
      </table>-->
    </div>
  </section>
</template>

<script>
var gifs = require("./_data/gifs.json");
var data = {
  gifs: gifs,
  menuselection: gifs[0].page_url
};
var ogconf = {
  'og:title': 'GIFS',
  'og:description': "All VFX GIFs/MP4s that I've made",
  'og:image': '/thumb/FortressBot_Thumb.png',
  'og_color': '#3370cc',
  'og:url': 'https://stahlferro.github.io/',
};
var metas = Object.entries(ogconf).map(function([key, value]) {
  return { hid: key, name: key, content: value };
});

console.log(data);
export default {
  data: function() {
    return data;
  }
};
</script>
