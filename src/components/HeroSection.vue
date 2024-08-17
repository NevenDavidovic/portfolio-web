<template>
  <div id="hero-section" class="hero-section">
    <div class="hero-content">
      <div class="text-content">
        <span>Hello and Welcome</span>
        <h1>I am Neven Davidović</h1>
        <p>
          I want to become a developer that can bend his world to his will, with
          his code to spawn the mightiest of apps.
        </p>
        <button @click="scrollToContact">Contact me</button>
      </div>
      <div class="image-content">
        <img :src="heroImage" alt="HeroImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    msg: String,
  },
  data() {
    return {
      heroImage: require("@/assets/images/hero-image.png"),
    };
  },
  methods: {
    scrollToContact() {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style src="@/assets/less/components/hero-section.css"></style>
