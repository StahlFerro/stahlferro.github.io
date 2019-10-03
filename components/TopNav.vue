<template>
  <nav class="navbar is-fixed-top is-dark-2" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item navbar-brand-button">
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
        <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
        <nuxt-link to="/videos" class="navbar-item">Videos</nuxt-link>
        <nuxt-link to="/gifs" class="navbar-item">GIFs</nuxt-link>
        <nuxt-link to="/softwares" class="navbar-item">Softwares</nuxt-link>
        <nuxt-link to="/donate" class="navbar-item">Donate</nuxt-link>
      </div>
      <div class="navbar-end navitem-double-space">
        <a class="navbar-item">
          <span class="icon">
            <i class="fab fa-discord"></i>
          </span>
        </a>
        <a class="navbar-item">
          <span class="icon">
            <i class="fab fa-youtube"></i>
          </span>
        </a>
        <a class="navbar-item">
          <span class="icon">
            <i class="fab fa-twitter"></i>
          </span>
        </a>
        <a class="navbar-item">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
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
    mounted: mountnavbar
}
</script>
