<template>
  <section class="section is-dark-2">
    <div class="container">
      <div class="columns is-multiline">
        <div v-for="(sf, index) in softwares" class="column is-one-third" v-bind:key="index">
          <div class="card is-white-e">
            <div class="card-image">
              <figure class="image is-16by9">
                <template v-if="sf.thumb_url">
                  <img v-bind:src="`/thumb/${sf.thumb_url}`" />
                </template>
                <template v-else>
                  <img src="https://bulma.io/images/placeholders/640x360.png" />
                </template>
              </figure>
            </div>
            <div class="card-content">
              <nuxt-link v-bind:to="`/softwares/${sf.page_url}`"
                style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;">
                </nuxt-link>
              <div class="media">
                <template v-if="sf.logo_url">
                  <div class="media-left">
                    <img v-bind:src="`/logos/${sf.logo_url}`" width="80px" height="80px" />
                  </div>
                </template>
                <div class="media-content">
                  <p class="title is-size-4-mobile">{{ sf.name }}</p>
                  <p class="subtitle is-5"><strong>{{ sf.subdesc }}</strong></p>
                </div>
              </div>
              <div class="content">
                <p class="is-size-5">{{ sf.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var softwares = require("./_data/softwares.json");
var data = { softwares: softwares };
export default {
  data: function() {
    return data;
  }
};
</script>
