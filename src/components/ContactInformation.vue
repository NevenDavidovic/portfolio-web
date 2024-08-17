<template>
  <div id="contact-section" class="contact-section">
    <div class="contact-content">
      <div class="heading">
        <h1>Contact <span>Me</span></h1>
        <p>
          There are many variations of passages ofLorem Ipsumavailable, but the
          majority havesuffered alteration in some form, by injected humour,
        </p>
      </div>
      <div class="info-section">
        <div class="personal-information">
          <p>
            <span>Address: </span> <br />
            {{ personalInformation.address }}
          </p>
          <p>
            <span>Phone: </span> <br />
            {{ personalInformation.phone }}
          </p>
          <p>
            <span>Email: </span> <br />
            {{ personalInformation.e_mail }}
          </p>
          <p>
            <span>GitHub: </span> <br />
            {{ personalInformation.github }}
          </p>
          <p>
            <span>LinkedIn: </span> <br />
            {{ personalInformation.linkedIn }}
          </p>
        </div>

        <div class="form">
          <form class="form-form" @submit.prevent="submitForm">
            <input type="hidden" name="access_key" :value="accessKey" />
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              v-model="formData.email"
            />
            <textarea
              type="textarea"
              name="message"
              required
              placeholder="Message"
              v-model="formData.message"
            />
            <input
              type="checkbox"
              name="botcheck"
              v-model="formData.botcheck"
              style="display: none"
            />
            <button type="submit">Contact me</button>
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
