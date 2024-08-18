<template>
  <div id="experience-section" class="experience-section">
    <div class="experience-content">
      <div class="experience-desc">
        <h1>My <span>Experience</span></h1>
        <p>
          {{ description }}
        </p>
      </div>
      <div class="experience-cards">
        <div
          class="experience-card"
          v-for="(item, key) in experience"
          :key="key"
        >
          <h3>
            {{ item.timeWorking }}
          </h3>
          <h2>{{ item.title }}</h2>
          <p>
            <span>{{ item.company }}</span>
            <span>{{ item.institution }}</span>
          </p>

          <button @click="openModal(item)">See more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/eventBus";

export default {
  name: "EducationSection",
  props: {
    msg: String,
  },
  data() {
    return {
      experience: {
        buje: {
          title: "Frontend Developer",
          company: "Vapour International d.o.o.",
          timeWorking: "2023-present",
          website: "https://www.kiwivapor.com/",
          image: require("@/assets/images/kiwi-vapor.jpg"),
          skills: [
            "Magento 2",
            "Vanilla JS",
            "jQuery",
            "LESS CSS",
            "Tailwind CSS",
            "Knockout.js",
            "Python",
          ],
          responsibilities: [
            "Working in a CMS environment, specifically Magento 2, where I've been involved in changing the design of modules and implementing new functionalities.",
            "Using PHP, Vanilla JavaScript, jQuery, LESS CSS, and Tailwind CSS to implement the designs from the design department.",
            "Working in Figma to design web pages.",
            "Helping to deploy projects in a production environment.",
            "Updating multiple company pages upon requests from the marketing department in various languages, ensuring consistency and accuracy across all platforms.",
            "Skilled in using versioning systems to manage code efficiently.",
            "Writing scripts to automate repetitive tasks, improving workflow efficiency.",
            "Familiarity with JavaScript frameworks, including working with Knockout.js.",
            "Implementing e-mail newsletters using Mautic and HubSpot, ensuring effective communication and engagement with customers.",
          ],
        },
        zbandaj: {
          title: "Customer Support Representative",
          company: "EvolveStream d.o.o.",
          timeWorking: "2022-2023",
          website: "https://www.kiwivapor.com/",
          image: require("@/assets/images/hero-evolve.jpg"),
          skills: [
            "Zendesk",
            "PowerApps",
            "Excel",
            "Evolve platform",
            "Commercial management",
            "Adobe Premiere Pro",
          ],
          responsibilities: [
            "Helping televisions transcode the commercials they receive from media agencies.",
            "Onboarding clients and marketers for the Evolve Stream platform.",
            "Working with Adobe Premiere Pro to ensure the correct commercial frame delivery.",
            "Solving client requests on a daily basis.",
            "Collaborating with a team to deliver commercials to United Media TV channels.",
            "Monitoring business activity.",
            "Building a PowerApp for monitoring business activity.",
          ],
        },
        rovinj: {
          title: "Bachelor of Radiologic Technology",
          company: "Orthopedic Hospital Martin Horvat",
          timeWorking: "2017-2022",
          website: "https://www.kiwivapor.com/",
          image: require("@/assets/images/bolnica-hero.png"),
          skills: [
            "CR",
            "Radiologic Technology",
            "Orthopedic Diagnostics",
            "Diagnostic Imaging",
            "Dry-Wet System",
            "Quality Assurance (QA)",
          ],
          responsibilities: [
            "Performing Diagnostic Imaging.",
            "Collaborating in a diagnostic team for orthopedic diagnostics.",
            "Operating the CR system.",
            "Conducting quality analysis on a daily basis.",
          ],
        },
        ob_nasice: {
          title: "Bachelor of Radiologic Technology",
          company: "General Hospital Našice",
          timeWorking: "2014-2015",
          website: "https://www.kiwivapor.com/",
          image: require("@/assets/images/ozbnaice-logo.png"),
          skills: ["CT", "CR", "DR", "MMR", "UZV"],
          responsibilities: [
            "Performing Diagnostic Imaging.",
            "Working in a diagnostic team for orthopedic diagnostics.",
            "Operating the CR system.",
            "Conducting quality analysis on a daily basis.",
            "Performing fluoroscopy.",
            "Operating a device for Computed Tomography.",
          ],
        },
      },
      description:
        "Through my experience, I have explored diverse fields, making me capable and versatile across multiple disciplines.",
    };
  },
  methods: {
    openModal(item) {
      const experienceData = {
        ...item,
        skills: item.skills || [], // Default to an empty array if undefined
        responsibilities: item.responsibilities || [], // Default to an empty array if undefined
      };
      EventBus.emit("show-experience-modal", experienceData);
    },
  },
};
</script>

<style src="@/assets/less/components/experience-section.css"></style>
