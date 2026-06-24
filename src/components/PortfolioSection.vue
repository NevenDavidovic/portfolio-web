<template>
  <div id="portfolio" class="portfolio-section">
    <div class="portfolio-section-content">
      <div class="heading">
        <div class="heading-description">
          <h1>My <span>Portfolio</span></h1>
          <p>{{ description }}</p>
        </div>

        <div class="grid">
          <div class="grid-item">
            <img :src="kiwiSparkImage" alt="KIWI Giftbox" />
            <div class="options">
              
              <a :href="link.kiwiSparkProject" target="_blank">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div class="grid-item">
            <img :src="batanaImage" alt="" />
            <div class="options">
              <a :href="link.batanaGithub" target="_blank">
                <i class="fab fa-github"></i>
              </a>
                <a :href="link.batanaProject" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
          </div>

          <div class="grid-item">
            <img :src="kiwiGoImage" alt="" />
            <div class="options">
              <a :href="link.kiwiGoProject" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div class="grid-item">
            <img :src="bilifyImage" alt="" />
            <div class="options">
              <a :href="link.bilifyGithub" target="_blank">
                <i class="fab fa-github"></i>
              </a>

              <a :href="link.dndLinkWeb" target="_blank">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <div class="grid-item">
            <img :src="kiwiStoreImage" alt="" />
            <div class="options">
              <a :href="link.kiwiStore" target="_blank">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioSection",
  props: {
    msg: String,
  },
  data() {
    return {
      description:
        "Here are some of the projects I've created. I hope you enjoy them!",
      kiwiGoImage: require("@/assets/images/KIWI-GO.png"),
      bilifyImage: require("@/assets/images/bilify.png"),
      kiwiSparkImage: require("@/assets/images/KIWI-Spark.png"),
      kiwiStoreImage: require("@/assets/images/KIWI-store.png"),
      batanaImage: require("@/assets/images/batana.png"),
      link: {
        dndLinkWeb:"https://generator-uplatnica-dnd.vercel.app/",
        kiwiSparkProject: "https://www.kiwivapor.com/it/it/kiwi-spark",
        kiwiGoProject: "https://github.com/NevenDavidovic/SmallBusinessBuddy-CRM/tree/main",
        kiwiStore: "https://www.kiwivapor.com/it/klocator/index/index",
        bilifyGithub:
          "https://github.com/NevenDavidovic/generator_uplatnica_dnd",
        batanaGithub: "https://github.com/NevenDavidovic/cvjecarnica-melani",
        batanaProject:
          "https://cvjecarnica-melani.vercel.app/cvjecarnica-melani",
      },
    };
  },
  mounted() {
    
    if (typeof gtag === "function") {
      gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  },
};
</script>
