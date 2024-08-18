<template>
  <div id="portfolio" class="portfolio-section">
    <div class="portfolio-section-content">
      <div class="heading">
        <div class="heading-description">
          <h1>My <span>Portfolio</span></h1>
          <p>{{ description }}</p>
        </div>

        <div class="grid">
          <a :href="link.kiwiSparkProject" target="_blank" class="grid-item"
            ><img :src="kiwiSparkImage" alt=""
          /></a>
          <a :href="link.batanaProject" target="_blank" class="grid-item"
            ><img :src="batanaImage" alt=""
          /></a>
          <a :href="link.kiwiGoProject" target="_blank" class="grid-item"
            ><img :src="kiwiGoImage" alt=""
          /></a>
          <a :href="link.bilifyProject" target="_blank" class="grid-item"
            ><img :src="bilifyImage" alt=""
          /></a>
          <a :href="link.kiwiStore" target="_blank" class="grid-item"
            ><img :src="kiwiStoreImage" alt=""
          /></a>
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
        kiwiSparkProject: "https://www.kiwivapor.com/it/kiwi-spark",
        kiwiGoProject: "https://www.kiwivapor.com/it/kiwi-go-plus",
        kiwiStore: "https://www.kiwivapor.com/it/klocator/index/index",
        bilifyProject: "https://github.com/NevenDavidovic/Billify",
        batanaProject: "https://github.com/NevenDavidovic/vue_batana",
      },
    };
  },
};
</script>

<style src="@/assets/less/components/portfolio-section.css"></style>
