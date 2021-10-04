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
import { defineComponent } from 'vue';
import Gallery from '@/components/Index/Gallery.vue';
import LandingHeader from '@/components/Index/LandingHeader.vue';
import LandingTop from '@/components/Index/LandingTop.vue';
import auth from '@/service/authHelper';

export default defineComponent({
  name: 'Index',
  components: {
    Gallery,
    LandingHeader,
    LandingTop,
  },
  setup() {
    const logout = () => {
      // eslint-disable-next-line no-console
      console.log('logout');
    };
    const login = async () => {
      try {
        await auth.signinRedirect();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      }
    };

    return { login, logout };
  },
});
</script>

<style scoped>
.main__top {
  background-color: black;
  height: 100vh;
  overflow: hidden;
}
</style>
