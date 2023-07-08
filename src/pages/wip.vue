<template>
  <div>
    <section class="hero is-fullheight-with-navbar has-bg-img">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <h1 class="title is-1">WIP</h1>
            <h1 class="title is-3">Still under construction. Why not visit it some other time?</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const { buildCanonicalUrlTag } = require("@/utils/meta_handler.js");
export default {
  head () {
    return {
      link: buildCanonicalUrlTag(this.$route.path)
    }
  }
}
</script>
