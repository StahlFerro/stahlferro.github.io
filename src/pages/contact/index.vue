<template>
  <div>
    <section class="hero is-fullheight-with-navbar is-dark-2">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <h1 class="title is-1">Contacts & Links</h1>
            <div style="padding-bottom: 20px;">

            <a v-bind:href="urls.discord" class="button is-neon-blurple is-large">
              <span class="icon">
                <i class="fab fa-discord"></i>
              </span>
              <span>Discord</span>
            </a>
            <a v-bind:href="urls.youtube" class="button is-youtube-red is-large">
              <span class="icon">
                <i class="fab fa-youtube"></i>
              </span>
              <span>Youtube</span>
            </a>
            <a v-bind:href="urls.twitter" class="button is-twitter-blue is-large">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>Twitter</span>
            </a>
            <a v-bind:href="urls.github" class="button is-github-white is-large">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>Github</span>
            </a>
            <a class="button is-pale-green is-large">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              <span>Email</span>
            </a>
            </div>
            <div>
              <a v-bind:href="urls.patreon" class="button is-patreon-coral is-large">
                <span class="icon">
                  <i class="fab fa-patreon"></i>
                </span>
                <span>Patreon</span>
              </a>
              <a v-bind:href="urls.kofi" class="button is-kofi-cyan is-large">
                <span class="icon">
                  <img class="image" src="/logos/ko-fi_round.png" style="padding: 4px;" />
                </span>
                <span>Ko-fi</span>
              </a>
              <a v-bind:href="urls.liberapay" class="button is-liberapay-yellow is-large">
                <span class="icon">
                  <img class="image" src="/logos/liberapay_white_on_yellow.svg" style="padding: 4px;" />
                </span>
                <span>Liberapay</span>
              </a>
            </div>
            <!-- <a class="button is-large"
                            href="https://www.paypal.com/c2/webapps/mpp/paypal-popup?locale.x=en_C2"
                            title="PayPal"
                            onclick="javascript:window.open('https://www.paypal.com/c2/webapps/mpp/paypal-popup?locale.x=en_C2',
                            'WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                            >
                            <span class="icon" style="width: 110px;">
                                <img src="/logos/PP_logo_h_100x26.png" alt="PayPal Logo" >
                            </span>
            </a>-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const { buildMetaTags, buildCanonicalUrlTag } = require("@/utils/meta_handler.js");
const urls_json = require("@@/config/externalinks.json");

export default {
  data() {
    return {
      title: "Contacts & Links",
      urls: urls_json
    };
  },
  head() {
    let meta_tags = buildMetaTags({
      title: this.title,
      description:
        "All links for github, social media, supporting platforms and business emails.",
      // "image": '/thumb/ogthumb_gallery.png',
      // "theme_color": "#ff8629",
      path: this.$route.path
    });
    return {
      title: this.title,
      meta: meta_tags,
      link: buildCanonicalUrlTag(this.$route.path)
    };
  },
  methods: {
  }
};
</script>
