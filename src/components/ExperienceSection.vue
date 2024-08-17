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
            "Less CSS",
            "Tailwind CSS",
            "knockout.js",
            "Python",
          ],
          responsabilities: [
            "Working in a CMS environment, specifically Magento 2, where I've been involved in changing the design of modules and implementing new functionalities.",
            "Using PHP, Vanilla JavaScript, jQuery, LESS CSS, and Tailwind CSS to implement the designs from the design department.",
            "Working in Figma to design web pages.",
            "Helping to deploy projects in a production environment.",
            "Updating multiple company pages upon requests from the marketing department in various languages, ensuring consistency and accuracy across all platforms.",
            "Skilled in using versioning systems to manage code efficiently.",
            "Writing scripts to automate repetitive tasks, improving workflow efficiency.",
            "Familiarity with JavaScript frameworks includes working with Knockout.js.",
            "Implementing e-mail newsletters using Mautic and Hubspot, ensuring effective communication and engagement with customers.",
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
            "Excell",
            "Evolve platform",
            "Comercial management",
            "Adobe Premiere Pro",
          ],
          responsabilities: [
            "Helping Televisions transcode the commercials they receive from media agencies",
            "Onboarding clients and marketers for the Evolve Stream platform",
            "Working with Adobe Premiere Pro for the right commercial frame delivery",
            "Solving client's requests on a daily base",
            "Working with a team to deliver commercials to United Media TV channels",
            "Monitoring business activity",
            "Building a Power App for monitoring business activity",
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
            "Radiologic technology",
            "Orthopedic diagnostic",
            "Diagnostic Imaging",
            "Dry-wet system",
            "QA",
          ],
          responsabilities: [
            "Doing Diagnostic Imaging",
            "Working in a diagnostic team for orthopedic diagnostic",
            "Working with CR system",
            "Doing quality analysis on a daiily basis",
          ],
        },
        ob_nasice: {
          title: "Bachelor of Radiologic Technology",
          company: "General Hospital Našice",
          timeWorking: "2014-2015",
          website: "https://www.kiwivapor.com/",
          image: require("@/assets/images/ozbnaice-logo.png"),
          skills: ["CT", "CR", "DR", "MMR", "UZV"],
          responsabilities: [
            "Doing Diagnostic Imaging",
            "Working in a diagnostic team for orthopedic diagnostic",
            "Working with CR system",
            "Doing quality analysis on a daiily basis",
            "Doing fluoroscopy",
            "Working on device for Computed Tomography",
          ],
        },
      },
      description:
        "Through my experience I have traveled across fields that made me capable and diverse in multiple backgrounds",
    };
  },
  methods: {
    openModal(item) {
      EventBus.emit("show-experience-modal", item); // Correct method name
    },
  },
};
</script>

<style src="@/assets/less/components/experience-section.css"></style>
