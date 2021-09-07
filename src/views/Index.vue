<template>
  <header>head</header>
  <main>
    <section>Landing top</section>
    <section>
      <Gallery />
    </section>
  </main>
  <footer>footer</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Gallery from "@/components/Index/Gallery.vue";

export default defineComponent({
  name: "Index",
  components: { Gallery },
});
</script>
