<template>
  <div id="education-section" class="education-section">
    <div class="education-content">
      <div class="education-desc">
        <h1>My <span>Education</span></h1>
        <p>
          {{ description }}
        </p>
      </div>
      <div class="education-cards">
        <div class="education-card" v-for="(item, key) in education" :key="key">
          <img :src="item.image" alt="Education Image" />
          <h2>{{ item.title }}</h2>
          <p>
            <span>{{ item.university }}</span>
            <span>{{ item.institution }}</span>
            <span>{{ item.timeStudying }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationSection",
  props: {
    msg: String,
  },
  data() {
    return {
      education: {
        zvu: {
          title: "Bachelor of Radiologic Technology",
          university: "University of Zagreb",
          institution: "Health Aplied Sciences",
          timeStudying: "2010-2013",
          image: require("@/assets/images/zvu-logo.png"),
        },
        pmf: {
          title: "Master of Forensics",
          university: "University of Split",
          institution: "Department of forensic sciences",
          timeStudying: "2019-2021",
          image: require("@/assets/images/pmf-logo.png"),
        },
        fipu: {
          title: "Bachelor of Informatics",
          university: "University of Pula",
          institution: "Faculty of Informatics",
          timeStudying: "2021-2024",
          image: require("@/assets/images/fipu-logo.png"),
        },
      },
      description:
        "Thrugh my education I have learned everything that got me to this point of time.",
    };
  },
};
</script>

<style src="@/assets/less/components/education-section.css"></style>
