<template>
  <transition name="menu_transition">
    <div class="contact" :style="{background: contact.Image}">
      <logo/>
      <p class="contactText">This is a contact page</p>
      <navMenu/>
      <div class="footer-social-links">
        <a href="#" title="Facebook" target="_blank">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#" title="Twitter" target="_blank">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#" title="Google+" target="_blank">
          <i class="fa fa-google-plus"></i>
        </a>
        <a href="#" title="LinkedIn+" target="_blank">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#" title="Dribbble" target="_blank">
          <i class="fa fa-dribbble"></i>
        </a>
      </div>
    </div>
  </transition>
</template>
<script>
import contact from "@/05-data/Contact.json";

export default {
  data() {
    return {
      contact
    };
  },
  props: {
    Image: String
  }
};
</script>
<style lang="scss" src="./Contact.scss">
</style>