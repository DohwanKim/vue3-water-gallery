<template>
  <LandingHeader />
  <main>
    <section class="main__top">
      <LandingTop />
    </section>
    <section>
      <Gallery />
    </section>
  </main>
  <footer>footer</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Gallery from "@/components/Index/Gallery.vue";
import LandingHeader from "@/components/LandingHeader.vue";
import LandingTop from "@/components/LandingTop.vue";

export default defineComponent({
  name: "Index",
  components: {
    Gallery,
    LandingHeader,
    LandingTop,
  },
});
</script>

<style scoped>
@import "../assets/style/common.css";

.main__top {
  background-color: black;
  max-height: calc(100vh - var(--size-header));
  overflow: hidden;
}
</style>
