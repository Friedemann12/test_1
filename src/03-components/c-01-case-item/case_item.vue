<template>
  <div class="images" @mouseover="show = true" @mouseleave="show = false">
    <div id="items" :style="{background: BI}">
      <div class="casetext">
        <h2 class="case">{{ headline }}</h2>
        <transition name="slide">
          <p class="hovertext" v-if="show">{{ text }}</p>
        </transition>
        <transition name="Cslide">
          <h3 class="brand">{{ brand }}</h3>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      BI: this.backgroundImage
    };
  },
  props: {
    headline: String,
    text: String,
    brand: String,
    backgroundImage: String
  }
};
</script>
<style lang="scss" src="./case_item.scss">
</style>
