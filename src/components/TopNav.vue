<template>
<div>
  <nav class="navbar is-fixed-top is-dark-2 navbar-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item navbar-brand-button"
        v-on:click.native="navselection = 'home'">
        <img
          src="/favicons/android-chrome-256x256.png"
          alt="StahlFerro"
          width="30"
          height="30"
        />
        <span class="navbar-brand-text navitem-text" style="padding-left: 10px;">Home</span>
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
        <nuxt-link to="/about" class="navbar-item" v-on:click.native="navselection = 'about'">
        <span class="navitem-text">About</span></nuxt-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Multimedia
          </a>
          <div class="navbar-dropdown">
            <nuxt-link to="/videos" class="navbar-item" v-on:click.native="navselection = 'videos'">
              <span class="navitem-text">Videos</span></nuxt-link>
            <nuxt-link to="/gallery" class="navbar-item" v-on:click.native="navselection = 'gallery'">
              <span class="navitem-text">VFX Gallery</span>
              </nuxt-link>
          </div>
        </div>
        <nuxt-link to="/softwares" class="navbar-item" v-on:click.native="navselection = 'softwares'">
          <span class="navitem-text">Softwares</span></nuxt-link>
        <!-- <nuxt-link to="/commissions" class="navbar-item" v-on:click.native="navselection = 'commissions'">
        <span class="navitem-text">Commissions</span></nuxt-link> -->
        <!-- <nuxt-link to="/contact" class="navbar-item" v-on:click.native="navselection = 'contact'">
          <span class="navitem-text">Contact</span></nuxt-link>
        <nuxt-link to="/donate" class="navbar-item" v-on:click.native="navselection = 'donate'">
          <span class="navitem-text">Donate</span></nuxt-link> -->
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
        <a class="navbar-item" v-on:click="modal_is_open = true" title="email">
          <span class="icon">
            <i class="fas fa-envelope"></i>
          </span>
          <span v-show="burger_open">Email</span>
        </a>
      </div>
    </div>
  </nav>
  <div class="modal" v-bind:class="{'is-active': modal_is_open}">
    <div class="modal-background" v-on:click="toggle_modal(false)"></div>
      <div class="modal-content">
        <article class="message is-dark-2 is-medium">
          <div class="message-header">
            <p>Contact Email</p>
            <button class="delete" aria-label="delete" v-on:click="toggle_modal(false)"></button>
          </div>
          <div class="message-body has-text-centered">
            <!-- <p class="has-text-centered">
              <span class="icon has-text-centered">
                <i class="fas fa-envelope fa-3x"></i>
              </span>
            </p> -->
            <h1 class="title">
              forgeworkseven@gmail.com
            </h1>
            <button class="button is-neon-white-c is-medium"
              v-clipboard:copy="'forgeworkseven@gmail.com'"
              v-on:click="copy_status = true">
              <span class="icon is-medium"><i class="fas fa-copy"></i></span>
              <span v-if="copy_status">Copied!</span>
              <span v-else>Copy</span>
            </button>
          </div>
        </article>
      </div>
    <!-- <button class="modal-close is-large" aria-label="close" v-on:click="modal_is_open = false"></button> -->
  </div>
</div>
</template>

<script>

var navselection = 'home';
var urls = require('@@/config/externalinks.json');
var data = {
  urls: urls,
  navselection: navselection,
  burger_open: false,
  modal_is_open: false,
  copy_status: false,
};

function toggle_modal(open) {
  data.modal_is_open = open;
  if (!open) {
    data.copy_status = false;
  }
}

export default {
    data: function() {
      return data;
    },
    methods: {
      toggle_modal: toggle_modal,
    }
}
</script>
