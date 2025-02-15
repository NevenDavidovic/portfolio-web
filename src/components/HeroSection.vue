<template>
  <div id="hero-section" class="hero-section">
    <div class="hero-content">
      <div class="text-content">
        <span class="fade-in">Hello and Welcome</span>
        <h1 class="slide-in">I am Neven Davidović</h1>
        <p class="fade-in-delay">
          I want to become a developer that can bend his world to his will, with
          his code to spawn the mightiest of apps.
        </p>
        <button @click="scrollToContact">Contact me</button>
      </div>
      <div class="image-content">
        <img :src="heroImage" alt="HeroImage" class="float-in" />
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
