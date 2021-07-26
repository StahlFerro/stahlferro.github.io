<template>
  <div>
    <section class="hero is-fullheight-with-navbar is-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img src="/logos/Fortress_200px.png" width="200px" height="200px" />
          <h1 class="title is-1">FortressBot</h1>
          <p class="subtitle is-4">
            The bane of server invite links and hoisters
          </p>
          <br />
          <h1 class="title is-1">End of Life</h1>
          <h2 class="title is-2">2017-04-09 - 2020-06-19</h2>
          <p>
            Thank you very much for those that has used FortressBot during it's
            time of service. I have no more spare time left to properly maintain
            FortressBot and fix its bugs. All that is left is a bot that has
            been terribly underperforming for months. It is not fit to serve
            realiable automoderative actions anymore.
          </p>
          <p>I declare its End of Life effective on date 2020/06/19.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const { buildMetaTags, buildCanonicalUrlTag } = require("@/utils/meta_handler.js");
const externalinks_json = require("@@/config/externalinks.json");

export default {
  data() {
    return {
      discord_server_url: externalinks_json.discord,
      title: "FortressBot"
    };
  },
  head() {
    let meta_tags = buildMetaTags({
      title: this.title,
      description:
        "A moderation bot that auto-nukes server invite links and auto-cleans hoisting or zalgo usernames/nicknames",
      image: "/thumb/FortressBot_Thumb.png",
      theme_color: "#3370cc",
      path: this.$route.path
    });
    return {
      title: this.title,
      meta: meta_tags,
      link: buildCanonicalUrlTag(this.$route.path)
    };
  }
};
</script>
