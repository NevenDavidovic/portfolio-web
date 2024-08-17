<template>
  <NavbarHome />
  <HeroSection id="hero" data-aos="fade-up" data-aos-duration="1500" />
  <EducationSection id="education" />
  <ExperienceSection id="experience" />
  <PortfolioSection id="portfolio" />
  <ContactInformation id="contact" />
  <ExperienceModal id="experience-modal" />
</template>

<script>
import NavbarHome from "./components/NavbarHome.vue";
import HeroSection from "./components/HeroSection.vue";
import EducationSection from "./components/EducationSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ContactInformation from "./components/ContactInformation.vue";
import ExperienceModal from "./components/ExperienceModal.vue";

export default {
  name: "App",
  components: {
    NavbarHome,
    HeroSection,
    EducationSection,
    ExperienceSection,
    PortfolioSection,
    ContactInformation,
    ExperienceModal,
  },
  mounted() {
    AOS.refresh(); // Refresh AOS after component mount
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  background: #111827;
}
</style>
