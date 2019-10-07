<template>
  <section class="section has-background-dark-2">
    <!-- <div class="container"> -->
    <table class="table is-dark-2 is-paddingless is-marginless" width="100%">
      <tr>
        <td width="10%">
          <aside class="menu has-text-centered" style="margin: 0;">
            <ul class="menu-list left-menu">
              <li v-for="(collection, index) in gifs" v-bind:key="index"
                class="menu-item"
                v-bind:class="{'is-selected': menuselection == collection.page_url}"
              >
                <a id="create_menu" v-on:click="menuselection = collection.page_url">
                  <p class="is-white-d">{{ collection.name }}</p>
                </a>
              </li>
            </ul>
          </aside>
        </td>
        <td width="90%">
            <table v-for="(collection, index) in gifs" class="table" width="100%"
            v-show="menuselection == collection.page_url" v-bind:key="index" >
              <tr>
                <td>{{ collection.name }}</td>
              </tr>
            </table>
        </td>
      </tr>
    </table>
    <!-- </div> -->
  </section>
</template>

<script>
var gifs = require("./_data/gifs.json");
var data = {
  gifs: gifs,
  menuselection: gifs[0].page_url,
};
console.log(data);
export default {
  data: function() {
    return data;
  }
};
</script>
