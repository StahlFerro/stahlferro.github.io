<template>
  <div>
    <section class="hero is-fullheight is-black is-medium has-bg-center">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <div>
              <img src="/img/StahlFerro-Logo-v2-400px.webp" width="180" />
              <p class="is-white-c is-size-2">STAHLFERRO</p>
            </div>
            <h1 class="title is-1">Website under construction</h1>
            <h1 class="title is-3">
              <div
                class="field is-grouped is-grouped-centered"
                style="margin-bottom: 50px;"
              >
                <p class="control">
                  <a
                    v-bind:href="urls.github"
                    class="button is-github-white is-large"
                  >
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Github</span>
                  </a>
                </p>
                <p class="control">
                  <a
                    v-bind:href="urls.youtube"
                    class="button is-youtube-red is-large"
                  >
                    <span class="icon">
                      <i class="fab fa-youtube"></i>
                    </span>
                    <span>Youtube</span>
                  </a>
                </p>
                <p class="control">
                  <a
                    v-bind:href="urls.twitter"
                    class="button is-twitter-blue is-large"
                  >
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>Twitter</span>
                  </a>
                </p>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div class="hero-footer">
        <div class="container">
          <div class="content has-text-centered">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
var urls = require("@@/config/externalinks.json");
var data = {
  urls: urls,
  burger_open: false,
  modal_is_open: false,
  copy_status: false
};
export default {
  data: function() {
    return data;
  }
};
</script>
