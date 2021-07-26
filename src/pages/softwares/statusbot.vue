<template>
  <div>
    <section class="hero is-medium is-iron-red-white-e">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">StatusBot</h1>
          <p class="subtitle is-4">
            A special purpose discord bot that notifies you if other bots go
            offline
          </p>
          <div
            class="field is-grouped is-grouped-centered"
            style="margin-bottom: 50px;"
          >
            <p class="control">
              <a
                href="https://github.com/StahlFerro/StatusBot"
                class="button is-github-black is-large"
              >
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </p>
            <p class="control">
              <a
                href="https://statusbot.readthedocs.io/en/latest/"
                class="button is-iron-red is-large"
              >
                <span class="icon">
                  <i class="fas fa-book"></i>
                </span>
                <span>Documentation</span>
              </a>
            </p>
          </div>
          <div class="field is-grouped is-grouped-centered">
            <figure
              class="image tooltip is-tooltip-bottom"
              style="width: 500px; text-align: center"
              data-tooltip="It's dead Jim"
            >
              <img src="/img/StatusBot_preview.PNG" width="500px" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const { buildMetaTags, buildCanonicalUrlTag } = require("@/utils/meta_handler.js");
let page_path = "/softwares/statusbot";
let title = "StatusBot";
let meta_list = buildMetaTags({
  title: title,
  description: "A special discord bot that notifies you if another bot dies.",
  // "image": "/thumb/TridentFrame_Thumb.png",
  theme_color: "#991f30",
  path: page_path
});

export default {
  head() {
    return {
      title: title,
      meta: meta_list,
      link: buildCanonicalUrlTag(page_path)
    };
  }
};
</script>
