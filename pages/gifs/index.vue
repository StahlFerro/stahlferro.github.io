<template>
  <section class="section has-background-dark-2">
    <div class="container">
        <table class="table is-paddingless is-marginless" width="100%">
            <tr>
                <td width="10%">
                                <aside class="menu has-text-centered" style="margin: 0;">
              <ul class="menu-list left-menu">
                <li
                  id="create_box"
                  class="menu-item"
                  v-bind:class="{'is-selected': menuselection == 'create_panel'}"
                >
                  <a id="create_menu" v-on:click="menuselection = 'create_panel'">
                    <span class="icon is-large">
                      <i class="fas fa-image fa-2x fa-inverse"></i>
                    </span>
                    <p class="is-white-d">Create AIMG</p>
                  </a>
                </li>
                <li
                  id="split_box"
                  class="menu-item"
                  v-bind:class="{'is-selected': menuselection == 'split_panel'}"
                >
                  <a id="split_menu" v-on:click="menuselection = 'split_panel'">
                    <span class="icon is-large">
                      <i class="far fa-images fa-2x fa-inverse"></i>
                    </span>
                    <p class="is-white-d">Split AIMG</p>
                  </a>
                </li>
                <li
                  id="modify_box"
                  class="menu-item"
                  v-bind:class="{'is-selected': menuselection == 'modify_panel'}"
                >
                  <a id="modify_menu" v-on:click="menuselection = 'modify_panel'">
                    <span class="icon is-large">
                      <i class="fas fa-exchange-alt fa-2x fa-inverse"></i>
                    </span>
                    <p class="is-white-d">Modify AIMG</p>
                  </a>
                </li>
                <li
                  id="buildsprite_box"
                  class="menu-item"
                  v-bind:class="{'is-selected': menuselection == 'buildspritesheet_panel'}"
                >
                  <a id="buildsprite_menu" v-on:click="menuselection = 'buildspritesheet_panel'">
                    <span class="icon is-large">
                      <i class="fas fa-border-all fa-2x fa-inverse"></i>
                    </span>
                    <p class="is-white-d">Build Spritesheet</p>
                  </a>
                </li>
                <li
                  id="slicesprite_box"
                  class="menu-item"
                  v-bind:class="{'is-selected': menuselection == 'slicespritesheet_panel'}"
                >
                  <a id="slicesprite_menu" v-on:click="menuselection = 'slicespritesheet_panel'">
                    <span class="icon is-large">
                      <i class="fas fa-th fa-2x fa-inverse"></i>
                    </span>
                    <p class="is-white-d">Slice Spritesheet</p>
                  </a>
                </li>
                <li
                  id="inspect_box"
                  class="menu-item"
                  v-bind:class="{'is-selected': menuselection == 'inspect_panel'}"
                >
                  <a id="inspect_menu" v-on:click="menuselection = 'inspect_panel'">
                    <span class="icon is-large">
                      <i class="fas fa-search fa-2x fa-inverse"></i>
                    </span>
                    <p class="is-white-d">Inspect Image</p>
                  </a>
                </li>
                <li
                  id="settings_box"
                  class="menu-item"
                  v-bind:class="{'is-selected': menuselection == 'settings_panel'}"
                >
                  <a id="settings_menu" v-on:click="menuselection = 'settings_panel'">
                    <span class="icon is-large">
                      <i class="fas fa-cog fa-2x fa-inverse"></i>
                    </span>
                    <p class="is-white-d">Settings</p>
                  </a>
                </li>
                <li
                  id="about_box"
                  class="menu-item"
                  v-bind:class="{'is-selected': menuselection == 'about_panel'}"
                >
                  <a id="about_menu" v-on:click="menuselection = 'about_panel'">
                    <span class="icon is-large">
                      <i class="fas fa-info-circle fa-2x fa-inverse"></i>
                    </span>
                    <p class="is-white-d">About</p>
                  </a>
                </li>
              </ul>
            </aside>
                </td>
                <td width="90%">
                </td>
            </tr>
        </table>
    </div>
  </section>
</template>

<script>
var gifs = require("./_data/gifs.json");
var data = {
  gifs: gifs
};
export default {
  data: function() {
    return data;
  }
};
</script>
