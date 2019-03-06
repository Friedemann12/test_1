<template>
  <transition name="menu_transition">
    <div class="about" :style="{background: about.Image}">
      <logo/>
      <p class="aboutText">This is an about page</p>
      <navMenu/>
    </div>
  </transition>
</template>
<script>
import about from "@/05-data/About.json";

export default {
  data() {
    return {
      about
    };
  },
  props: {
    Image: String
  }
};
</script>
<style lang="scss" src="./About.scss">
</style>

