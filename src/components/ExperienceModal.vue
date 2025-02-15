<template>
  <div v-if="isVisible" class="exp-modal-section show">
    <div class="modal-content">
      <div class="close-button" @click="closeModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.225 5.225a1.5 1.5 0 112.12-2.12l5.657 5.657 5.657-5.657a1.5 1.5 0 112.12 2.12L16.12 10.88l5.657 5.657a1.5 1.5 0 11-2.12 2.12L14 13.12l-5.657 5.657a1.5 1.5 0 11-2.12-2.12L11.88 10.88 6.225 5.225z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <div class="modal-header">
        <img
          :src="companyObject.image"
          alt="Company Logo"
          class="company-logo"
        />
        <h2>{{ companyObject.company }}</h2>
      </div>

      <div class="modal-body">
        <h3>{{ companyObject.title }}</h3>
        <p>{{ companyObject.timeWorking }}</p>

        <div v-if="companyObject.skills.length">
          <h4>Skills Used:</h4>
          <ul class="skill-list">
            <li v-for="skill in companyObject.skills" :key="skill">
              {{ skill }}
            </li>
          </ul>
        </div>

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
        responsibilities: [],
      },
    };
  },
  created() {
    EventBus.on("show-experience-modal", this.showModal);
  },
  methods: {
    showModal(experienceData) {
      this.companyObject = {
        ...experienceData,
        skills: experienceData.skills || [],
        responsibilities: experienceData.responsibilities || [],
      };
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    },
  },
  beforeUnmount() {
    EventBus.off("show-experience-modal", this.showModal);
  },
};
</script>
