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
        <div v-if="companyObject.responsabilities.length">
          <h4>Responsibilities:</h4>
          <ul class="responsability-list">
            <li
              v-for="responsibility in companyObject.responsabilities"
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
      this.companyObject = experienceData;
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

<style scoped lang="less">
.exp-modal-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #020617;
  border: 2px solid #facc15;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  width: 100%;
  height: 100%;
  max-height: 80vh;
  overflow: scroll;
}
.modal-content::-webkit-scrollbar {
  display: none; /* Hide scrollbars for WebKit browsers */
}
.responsability-list,
.skill-list {
  list-style: none;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}

.modal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.company-logo {
  width: 100%;
  max-width: 500px;
}

.modal-body {
  margin-top: 20px;
}

h4 {
  text-align: center;
  max-width: 600px;
  margin: 20px auto;
  color: #facc15;
}

img {
  border-radius: 12px;
}
li {
  color: white;
}

button {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #facc15;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
h2 {
  margin: 10px 0;
  color: white;
}
h3 {
  color: #facc15;
}
p {
  color: white;
}
</style>
