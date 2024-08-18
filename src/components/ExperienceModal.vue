<template>
  <div v-if="isVisible" class="exp-modal-section">
    <div class="modal-content">
      <!-- Modal Header with Company Title and Logo -->
      <div class="modal-header">
        <img
          :src="companyObject.image"
          alt="Company Logo"
          class="company-logo"
        />
        <h2>{{ companyObject.company }}</h2>
        <p v-if="companyObject.website">
          <a :href="companyObject.website" target="_blank">Visit Website</a>
        </p>
      </div>
      <!-- Company Website -->

      <!-- Company Name and Time Working -->
      <div class="modal-body">
        <h3>{{ companyObject.title }}</h3>
        <p>{{ companyObject.timeWorking }}</p>

        <!-- Skills Used -->
        <div v-if="companyObject.skills.length">
          <h4>Skills Used:</h4>
          <ul class="skill-list">
            <li v-for="skill in companyObject.skills" :key="skill">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Responsibilities -->
        <div v-if="companyObject.responsibilities.length">
          <h4>Responsibilities:</h4>
          <ul class="responsability-list">
            <li
              v-for="responsibility in companyObject.responsibilities"
              :key="responsibility"
            >
              {{ responsibility }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Close Modal Button -->
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
import EventBus from "@/eventBus";

export default {
  name: "ExperienceModal",
  data() {
    return {
      isVisible: false,
      companyObject: {
        title: "",
        company: "",
        timeWorking: "",
        website: "",
        image: "",
        skills: [],
        responsabilities: [],
      },
    };
  },
  created() {
    EventBus.on("show-experience-modal", this.showModal); // Listen for the event
  },
  methods: {
    showModal(experienceData) {
      this.companyObject = {
        ...experienceData,
        skills: experienceData.skills || [], // Ensure it's an array
        responsibilities: experienceData.responsabilities || [], // Ensure it's an array
      };
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    },
  },
  beforeUnmount() {
    EventBus.off("show-experience-modal", this.showModal); // Clean up the event listener
  },
};
</script>

<style src="@/assets/less/modals/experience-modal.css"></style>
