<template>
  <section class="hero is-medium is-dark-2">
    <div class="hero-body">
      <div class="container">
        <div class="content paragraph-double-space-after">
          <h1 class="title is-1 has-text-centered">About StahlFerro</h1>
          <p class="has-text-justified">Hello! I am StahlFerro - I make hybrid VFX-composite-animations in the form of youtube videos and GIFs, and also a developer of various softwares</p>
          <p class="has-text-justified">
            <strong>&gt; VFX Composite-Animations</strong>
            <br />Ranging from the crudely-made Montage Parody-style videos, to cinematic animation and VFX composites, I create a very wide range
            of unique entertainment videos that can be considered it's own category. I play around with a lot of VFX and composition of
            static images, both combined to produce a hybrid form of animation that displays an intense visual graphic experience. Most of those
            works either end up as a youtube video, or as a short GIF
          </p>
          <p class="has-text-justified">
            <strong>&gt; Software Developer</strong>
            <br />
            I am the sole developer and maintainer of various free softwares, most notably the moderation Discord bot 
            <nuxt-link to="/softwares/fortressbot" class="hover-trident-cyan">FortressBot</nuxt-link>
            and the desktop GIF/APNG manipulator program <nuxt-link to="/softwares/tridentframe" class="hover-trident-cyan">TridentFrame</nuxt-link>.
            Aside from those two I work on various small projects hosted on my Github
          </p>
          <p class="has-text-justified"></p>
          <p class="has-text-justified">
            Although videos require weeks to months to work on, and infrequent youtube uploads make me appear very inactive,
            I am most active on my Discord server, where I centralize FortressBot and TridentFrame development, and my youtube community inside it.
            I monitor the server everyday regardless of its current activity.
            <br />
            <a class="hover-trident-cyan" v-bind:href="discord_server_url">Come have a visit!</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var extlinks = require("@@/config/externalinks.json");
var base_url = require("@@/config/opengraph.json")["og:url"];
var discord_server_url = extlinks.discord;
var data = {
  discord_server_url: discord_server_url
};
var ogconf = {
  "og:title": "About",
  "og:description": "Who am I??/",
  "theme-color": "#5595FF",
  "og:url": `${data.base_url}/about`
};
var metas = Object.entries(ogconf).map(function([key, value]) {
  return { hid: key, name: key, content: value };
});
export default {
  head() {
    return {
      link: [{ rel: "canonical", href: ogconf["og:url"] }]
    };
  },
  data() {
    return data;
  }
};
</script>
