<template>
  <section class="section has-background-dark-2">
    <div class="container">
      <div class="columns is-multiline">
        <!-- {% for vd in site.data.videos %} -->
        <div v-for="(vd, index) in videos" v-bind:key="index" class="column is-one-third">
          <div class="card has-background-light">
            <div class="card-image">
              <figure class="image is-16by9">
                  <template v-if="vd.thumb_url">
                    <img v-bind:src="'/thumb/' + vd.thumb_url"/>
                  </template>
                  <template v-else>
                    <img src="https://bulma.io/images/placeholders/640x360.png"/>
                  </template>
              </figure>
            </div>
            <div class="card-content">
                  <nuxt-link v-bind:to="'/videos/' + vd.page_url"
                  style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"></nuxt-link>
              <div class="media">
                <div class="media-content">
                  <p class="title is-size-4-mobile">{{ vd.name }}</p>
                  <p class="subtitle is-5">{{ vd.desc }}</p>
                </div>
              </div>
              <div class="content">
                <p class="is-size-5"> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var videos = require('./_data/videos.json');
var data = {
    videos: videos
}
console.log(data);
export default {
    data: function() {
        return data;
    }
}
</script>
