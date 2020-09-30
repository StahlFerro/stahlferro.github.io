<template>
  <!-- <div id="default_template"> -->
    <div>
    <TopNav/>
    <nuxt/>
    </div>
  <!-- </div> -->
</template>

<script>
import TopNav from '~/components/TopNav.vue';
export default {
  components: {
    TopNav
  }
}
</script>
