<template>
  <div>
    <section class="hero is-fullheight-with-navbar is-black">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img src="/logos/Fortress_200px.png" width="200px" height="200px" />
          <h1 class="title is-1">FortressBot</h1>
          <p class="subtitle is-4">The bane of server invite links and hoisters</p>
          <br/>
          <h1 class="title is-1">End of Life</h1>
          <h2 class="title is-2">2017-04-09 - 2020-06-19</h2>
          <p>Thank you very much for those that has used FortressBot during it's time of service. I have no more spare time left to properly maintain FortressBot and fix its bugs.
            All that is left is a bot that has been terribly underperforming for months. It is not fit to serve realiable automoderative actions anymore.</p>
          <p>I declare its End of Life effective on date 2020/06/19.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const { generate_meta, tag_canonical_url } = require("@/utils/meta_handler.js");
let page_path = "/softwares/fortressbot";
let title = "FortressBot"
let meta_list = generate_meta({
    "title": title,
    "description": "A moderation bot that auto-nukes server invite links and auto-cleans hoisting or zalgo usernames/nicknames",
    "image": "/thumb/FortressBot_Thumb.png",
    "theme_color": "#3370cc",
    "path": page_path
  }
);
console.log(tag_canonical_url(page_path));
var extlinks = require('@@/config/externalinks.json');
var discord_server_url = extlinks.discord;
var data = {
  discord_server_url: discord_server_url,
}
export default {
  head () {
    return {
      title: title,
      meta: meta_list,
      link: tag_canonical_url(page_path),
    }
  },
  data () {
    return data;
  }
}
</script>