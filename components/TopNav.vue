<template>
  <nav class="navbar is-fixed-top is-dark-2" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item navbar-brand-button"
        v-on:click.native="navselection = 'home';">
        <img
          src="/favicons/android-chrome-256x256.png"
          alt="StahlFerro"
          width="30"
          height="30"
        />
        <span class="navbar-brand-text" style="padding-left: 10px;">Home</span>
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="burger_open = !burger_open"
        v-bind:class="{'is-active': burger_open}"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" v-bind:class="{'is-active': burger_open}">
      <div class="navbar-start">
        <nuxt-link to="/about" class="navbar-item" v-on:click.native="navselection = 'about'">About</nuxt-link>
        <nuxt-link to="/videos" class="navbar-item" v-on:click.native="navselection = 'videos'">Videos</nuxt-link>
        <nuxt-link to="/wip" class="navbar-item" v-on:click.native="navselection = 'gifs'">GIFs</nuxt-link>
        <nuxt-link to="/softwares" class="navbar-item" v-on:click.native="navselection = 'softwares'">Softwares</nuxt-link>
        <nuxt-link to="/donate" class="navbar-item" v-on:click.native="navselection = 'donate'">Donate</nuxt-link>
      </div>
      <div class="navbar-end navitem-double-space">
        <a v-bind:href="urls.discord" class="navbar-item" title="Discord Server">
          <span class="icon">
            <i class="fab fa-discord"></i>
          </span>
          <span v-show="burger_open">Discord</span>
        </a>
        <a v-bind:href="urls.youtube" class="navbar-item" title="Youtube channel">
          <span class="icon">
            <i class="fab fa-youtube"></i>
          </span>
          <span v-show="burger_open">Youtube</span>
        </a>
        <a v-bind:href="urls.twitter" class="navbar-item" title="Twitter">
          <span class="icon">
            <i class="fab fa-twitter"></i>
          </span>
          <span v-show="burger_open">Twitter</span>
        </a>
        <a v-bind:href="urls.github" class="navbar-item" title="Github">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
          <span v-show="burger_open">Github</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>

var navselection = 'home';
var urls = require('@@/config/externalinks.json');
var data = {
  urls: urls,
  navselection: navselection,
  burger_open: false,
};

export default {
    // mounted: mountnavbar,
    data: function() {
      return data;
    }
}
</script>
