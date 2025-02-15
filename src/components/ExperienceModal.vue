<template>
  <div v-if="isVisible" class="exp-modal-section show">
    <div class="modal-content">
      <!-- Close Button -->
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

      <!-- Modal Header -->
      <div class="modal-header">
        <img
          :src="companyObject.image"
          alt="Company Logo"
          class="company-logo"
        />
        <h2>{{ companyObject.company }}</h2>
      </div>

      <!-- Modal Body -->
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

<style scoped>
.exp-modal-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.exp-modal-section.show {
  opacity: 1;
  transform: scale(1);
}

.modal-content {
  background: rgba(2, 6, 23, 0.95); /* Glassmorphic effect */
  border: 2px solid #facc15;
  padding: 20px;
  border-radius: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 75vh;
  overflow-y: auto;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
  animation: fadeInUp 0.5s ease-out;
  scrollbar-width: thin;
  scrollbar-color: #facc15 rgba(255, 255, 255, 0.1);
  margin: 10px;
}

.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #facc15;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #ffd700;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid rgba(250, 204, 21, 0.3);
  padding-bottom: 10px;
}

.company-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #facc15;
  padding: 5px;
  transition: transform 0.3s ease;
}

.company-logo:hover {
  transform: scale(1.1);
}

.modal-body {
  margin-top: 20px;
  text-align: center;
}

.responsability-list,
.skill-list {
  list-style: none;
  padding: 0;
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
}

.responsability-list li,
.skill-list li {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  transition: background 0.3s ease;
  color: white;
}

.responsability-list li:hover,
.skill-list li:hover {
  background: rgba(255, 255, 255, 0.2);
}

h4 {
  text-align: center;
  max-width: 500px;
  margin: 20px auto;
  color: #facc15;
  font-size: 18px;
}

h2 {
  margin: 10px 0;
  color: white;
  font-size: 22px;
}

h3 {
  color: #facc15;
  font-size: 20px;
}

p {
  color: white;
  font-size: 14px;
}

button {
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #facc15;
  color: #020617;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

button:hover {
  background-color: #ffd700;
  transform: translateY(-3px);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  width: 35px;
  height: 35px;
  background: rgba(250, 204, 21, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.close-button:hover {
  background: rgba(250, 204, 21, 0.4);
}

.close-button svg {
  width: 20px;
  height: 20px;
  color: #facc15;
  margin-right: 3px;
}
</style>
