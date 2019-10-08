<template>
  <nav class="navbar is-fixed-top is-dark-2" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item navbar-brand-button"
        v-on:click.native="navselection = 'home';" v-bind:class="{'selected': navselection == 'home'}">
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
        data-target="nav-menu"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="nav-menu" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/about" class="navbar-item" v-on:click.native="navselection = 'about';" v-bind:class="{'selected': navselection == 'about'}">About</nuxt-link>
        <nuxt-link to="/videos" class="navbar-item" v-on:click.native="navselection = 'videos';" v-bind:class="{'selected': navselection == 'videos'}">Videos</nuxt-link>
        <nuxt-link to="/wip" class="navbar-item" v-on:click.native="navselection = 'gifs';" v-bind:class="{'selected': navselection == 'gifs'}">GIFs</nuxt-link>
        <nuxt-link to="/softwares" class="navbar-item" v-on:click.native="navselection = 'softwares';" v-bind:class="{'selected': navselection == 'softwares'}">Softwares</nuxt-link>
        <nuxt-link to="/donate" class="navbar-item" v-on:click.native="navselection = 'donate';" v-bind:class="{'selected': navselection == 'donate'}">Donate</nuxt-link>
      </div>
      <div class="navbar-end navitem-double-space">
        <a v-bind:href="urls.discord" class="navbar-item" title="Discord Server">
          <span class="icon">
            <i class="fab fa-discord"></i>
          </span>
        </a>
        <a v-bind:href="urls.youtube" class="navbar-item" title="Youtube channel">
          <span class="icon">
            <i class="fab fa-youtube"></i>
          </span>
        </a>
        <a v-bind:href="urls.twitter" class="navbar-item" title="Twitter">
          <span class="icon">
            <i class="fab fa-twitter"></i>
          </span>
        </a>
        <a v-bind:href="urls.github" class="navbar-item" title="Github">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
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
};

function mountnavbar() {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        console.log("dataset", el.dataset);
        console.log("target", target);
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        // el.classList.toggle("is-active");
        // $target.classList.toggle("is-active");
      });
    });
  }
}


export default {
    mounted: mountnavbar,
    data: function() {
      return data;
    }
}
</script>
