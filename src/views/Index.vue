<template>
  <div class="dummy">
    <h3>로그인 더미</h3>
    <div>
      <input type="text" placeholder="id" />
    </div>
    <div>
      <input type="password" placeholder="pw" />
    </div>
    <div>
      <button type="button" @click="login">login</button>
    </div>
    <div>
      <button type="button" @click="logout">logout</button>
    </div>
  </div>
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
// eslint-disable-next-line import/extensions
import auth from "@/service/auth.ts";

export default defineComponent({
  name: "Index",
  components: {
    Gallery,
    LandingHeader,
    LandingTop,
  },
  methods: {
    async login() {
      try {
        await auth.signinRedirect();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    },
    logout() {
      // eslint-disable-next-line no-console
      console.log("logout");
    },
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

.dummy {
  margin: 0 auto;
  padding: 50px;
  width: 600px;
}
</style>
