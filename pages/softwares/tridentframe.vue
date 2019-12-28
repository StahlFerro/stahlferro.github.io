<template>
  <div>
    <section class="hero is-medium is-trident-cyan">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-8 is-variable is-vcentered">
            <div class="column">
              <div class="content">
                <nav class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <img src="/logos/TridentFrame_logo_inverted.svg" width="90px" height="90px" />
                    </div>
                    <div class="level-item"></div>
                    <div class="level-item">
                      <h1 class="title is-1">TridentFrame</h1>
                    </div>
                  </div>
                </nav>
                <p class="subtitle is-4">
                  Coming Soon: The desktop swiss-army knife for creating, splitting or converting
                  <span class="bg-dark-3">GIFs/APNGs</span>,
                  and building/slicing
                  <span class="bg-dark-3">spritesheets</span>
                </p>
                <p class="subtitle is-4">Watch it's development on github!</p>
                <nav class="level">
                  <div class="level-left">
                    <!-- <div class="level-item">
                                    <a class="button is-neon-trident-cyan is-medium" disabled><span class="icon"><i
                                                class="fas fa-download"></i></span>
                                        <span>Download</span></a>
                    </div>-->
                    <div class="level-item">
                      <a
                        href="https://github.com/StahlFerro/TridentFrame"
                        class="button is-github-black is-medium"
                      >
                        <span class="icon">
                          <i class="fab fa-github"></i>
                        </span>
                        <span>Github</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div class="column">
              <figure class="image" title="Raydn didn't feel so good. (Artist: Vayreceane)">
                <img src="/img/TridentFrame_preview_opt.png" class="image-shadow"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-trident-cyan-dark-3">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered has-text-centered">
            <div class="column">
              <div class="content">
                <p>
                  <span class="icon is-large">
                    <i class="fas fa-image fa-5x"></i>
                  </span>
                </p>
                <p class="title is-1">Create</p>
                <p class="subtitle is-4">Combine a sequence of images into a GIF, or an APNG</p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p>
                  <span class="icon is-large">
                    <i class="far fa-images fa-5x"></i>
                  </span>
                </p>
                <p class="title is-1">Split</p>
                <p class="subtitle is-4">Split an animated GIF or APNG into a sequence of images</p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p>
                  <span class="icon is-large">
                    <i class="fas fa-exchange-alt fa-5x"></i>
                  </span>
                </p>
                <p class="title is-1">Modify</p>
                <p class="subtitle is-4">Alter GIF/APNG formats, fps, size, optimization and more</p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <p>
                  <span class="icon is-large">
                    <i class="fas fa-th fa-5x"></i>
                  </span>
                </p>
                <p class="title is-1">Spritesheet</p>
                <p
                  class="subtitle is-4"
                >Create spritesheets from images, or slice a spritesheet into separate tiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-trident-cyan">
      <div class="hero-body">
        <div class="container">
          <div class="content">
            <p class="title is-2">Preview end results</p>
            <p>With a modern and clean interface and animated previews, you know what you are exactly making</p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-trident-cyan-dark-3">
      <div class="hero-body">
        <div class="container">
          <div class="content">
            <p class="title is-2">Details like you want 'em</p>
            <p>In-depth information of loaded GIFs/APNGs is always ready if you want to go full technical</p>
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-medium is-trident-cyan">
      <div class="hero-body">
        <div class="container">
          <div class="content">
            <p class="title is-2">Will always be...</p>
            <p>Free ($0). Open source. No-watermarks.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const { generate_meta, tag_canonical_url } = require("@@/utils/meta_handler.js");
var page_path = "/softwares/tridentframe";
var meta_list = generate_meta({
    "title": "TridentFrame",
    "description": "The swiss-army knife for creating, splitting or converting animated GIFs/APNGs. A FOSS project available for Windows, Mac and Linux",
    "image": "/thumb/TridentFrame_Thumb.png",
    "theme_color": "#34caf8",
    "path": page_path
  }
);
console.log(tag_canonical_url(page_path));
export default {
  head () {
    return {
      title: meta_list["title"],
      meta: meta_list,
      link: tag_canonical_url(page_path),
    }
  }
};
</script>
