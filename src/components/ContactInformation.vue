<template>
  <div id="contact-section" class="contact-section">
    <div class="contact-content">
      <div class="heading">
        <h1>Contact <span>Me</span></h1>
        <p>
          Whether you have questions, feedback, or simply want to connect, I'd
          love to hear from you! Feel free to reach out through the contact form
          or the details below. Let's start a conversation and explore how we
          can work together.
        </p>
      </div>
      <div class="info-section">
        <div class="personal-information">
          <p>
            <span>Address: </span> <br />
            {{ personalInformation.address }}
          </p>

          <p>
            <span>Phone: </span><br />
            <a :href="'tel:' + personalInformation.phone">{{
              personalInformation.phone
            }}</a>
          </p>
          <p>
            <span>Email: </span><br />
            <a :href="'mailto:' + personalInformation.e_mail">{{
              personalInformation.e_mail
            }}</a>
          </p>
          <p>
            <span>GitHub: </span><br />
            <a :href="personalInformation.github" target="_blank">{{
              personalInformation.github
            }}</a>
          </p>
          <p>
            <span>LinkedIn: </span><br />
            <a :href="personalInformation.linkedIn" target="_blank">{{
              personalInformation.linkedIn
            }}</a>
          </p>
        </div>

        <div class="form">
          <form class="form-form" @submit.prevent="submitForm">
            <input type="hidden" name="access_key" :value="accessKey" />
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              required
              v-model="formData.email"
            />
            <label for="email">Message:</label>
            <textarea
              type="textarea"
              name="message"
              required
              v-model="formData.message"
            />
            <input
              type="checkbox"
              name="botcheck"
              v-model="formData.botcheck"
              style="display: none"
            />
            <button type="submit">Submit message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
  props: {
    msg: String,
  },
  data() {
    return {
      personalInformation: {
        address: "Ive Lole Ribara 16, Poreč",
        e_mail: "neven4380@live.com",
        phone: "+385 99 653 1663",
        github: "https://github.com/NevenDavidovic",
        linkedIn: "https://www.linkedin.com/in/nevendavidovic/",
      },
      accessKey: process.env.VUE_APP_ACCESS_KEY,
      formData: {
        email: "",
        message: "",
        botcheck: false, // This is the honeypot field
      },
    };
  },
  methods: {
    resetForm() {
      this.email = "";
      this.message = "";
    },

    async submitForm() {
      console.log("Access Key:", this.accessKey);
      console.log("Form Data before submit:", this.formData);

      if (this.formData.botcheck) {
        console.warn("Spam detected!");
        return;
      }

      try {
        // Add access_key to formData
        const payload = {
          ...this.formData,
          access_key: this.accessKey,
        };

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert("Form submitted successfully!");
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  },
};
</script>

<style src="@/assets/less/components/contact-section.css"></style>
