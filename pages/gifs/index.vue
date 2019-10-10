<template>
  <section class="hero has-background-dark-2 is-fullheight-with-navbar">
    <div class="hero-body" style="height: 100%;">
      <table class="gif-gallery-container" width="100%" height="100%">
        <tr>
          <td width="10%">
            <aside class="menu has-text-centered" style="margin: 0;">
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
          </td>
          <td width="90%">
            <div class="container">
              <div
                class="columns is-multiline"
                v-for="(collection, index) in gifs"
                width="100%"
                v-show="menuselection == collection.page_url"
                v-bind:key="index"
              >
                <div class="column" v-for="(gif, index) in collection.medias" v-bind:key="index">
                  <div class="card is-neon-gold">
                    <div class="card-image">
                      <video controls="controls" width="400" autoplay="autoplay" loop="loop">
                        <source
                          v-bind:src="`/gifstash/${collection.page_url}/${gif.fname_mp4}`"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div class="card-content">
                      <!-- <a
                        v-bind:href="`https://www.youtube.com/watch?v=${bf.youtube_id}`"
                        style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
                      ></a> -->
                      <div class="content">
                        <p class="title is-4">{{ gif.name }}</p>
                        <p class="content">{{ gif.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
var gifs = require("./_data/gifs.json");
var data = {
  gifs: gifs,
  menuselection: gifs[0].page_url
};
console.log(data);
export default {
  data: function() {
    return data;
  }
};
</script>
