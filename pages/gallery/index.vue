<template>
  <div>
      <section class="hero is-dark-2 is-medium">
        <div class="hero-body">
        <div class="container has-text-centered">
          <div class="content theme-dark-2">
            <h1 class="title">VFX Gallery</h1>
            <p>
              This is the official gallery of short VFX-composited vector animations that I've made. 
              Originally hosted on Imgur and are only link-viewable, they are now gradually compiled here on this webpage.
            </p>
            <p>
              All of the animations listed below use the <br/>
              <a class="hover-trident-cyan" rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
              <br/>
              <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
                <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
                </a><br/>
            </p>
          </div>
        </div>
        </div>
        <div class="hero-foot">
          <div class="tabs is-neon-trident-cyan is-centered is-large">
              <ul>
                <li v-for="(collection, index) in gifs" v-bind:key="index"
                  v-bind:class="{'is-active': menuselection == collection.page_url}">
                  <a v-on:click="menuselection = collection.page_url">
                    {{ collection.name }}
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </section>

      <section class="hero is-dark-2 is-fullheight-with-navbar">
        <div class="gallery-container">
          <div class="columns is-multiline" width="100%"
            v-for="(collection, index) in gifs" v-show="menuselection == collection.page_url" v-bind:key="index">
            <div class="column is-one-quarter"
              v-for="(gif, index) in collection.medias" v-bind:key="index">
              <div class="card is-neon-trident-cyan">
                <div class="card-image">
                  <div class="video-container">
                    <video controls="controls" loop="loop">
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
                <div class="card-footer">
                  <a class="card-footer-item hover-trident-cyan"
                    v-clipboard:copy="`${base_url}/gifstash/${collection.page_url}/${gif.fname_mp4}`"
                    v-clipboard:success="copySuccess"
                    v-clipboard:error="copyError">
                    <span class="icon is-medium"><i class="fas fa-link"></i></span>
                    <span>Copy link</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
var gifs = require("./_data/animations.json");
var base_url = require("@@/config/opengraph.json")['og:url']
var data = {
  gifs: gifs,
  menuselection: gifs[0].page_url,
  base_url: base_url
};
var ogconf = {
  'og:title': 'VFX Gallery',
  'og:description': "The gallery of every short VFX animations that I've made in the form of MP4s",
  'og:image': '/thumb/VFXAnim_Thumb.png',
  'theme-color': '#9947a6',
  'og:url': `${data.base_url}/gallery`,
};
var metas = Object.entries(ogconf).map(function([key, value]) {
  return { hid: key, name: key, content: value };
});

function copySuccess() {
  console.log("Successfully copied to clipboard");
}

function copyError() {
  console.log("Cannot copy to clipboard");
}

// console.log(data);
export default {
  head () {
    return {
      title: ogconf['og:title'],
      meta: [
        { hid: 'title', name: 'title', content: ogconf['og:title'] },
        { hid: 'description', name: 'description', content: ogconf['og:description'] },
        ...metas,
      ],
      link: [
        {'rel': 'canonical', 'href': ogconf['og:url'] }
      ],
    }
  },
  data () {
    return data;
  },
  methods: {
    copySuccess: copySuccess,
    copyError: copyError,
  }
};
</script>
