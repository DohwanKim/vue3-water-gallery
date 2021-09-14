<template>
  <div class="gallery">
    <figure class="gallery__figure" v-for="dummy in 15" :key="dummy" @click="showDetail">
      <div class="gallery__figure--img-wrapper">
        <img class="gallery__figure--img" src="https://picsum.photos/1920/1280" alt="" />
      </div>
      <figcaption class="gallery--figure--caption">Picture name</figcaption>
    </figure>
  </div>
  <transition name="fade">
    <DetailModal @close="hideDetail" v-if="isShowDetail" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DetailModal from "@/components/DetailModal.vue";

export default defineComponent({
  name: "Gallery",
  components: {
    DetailModal,
  },
  data() {
    return {
      isShowDetail: false,
    };
  },
  methods: {
    showDetail() {
      this.isShowDetail = true;
    },
    hideDetail() {
      this.isShowDetail = false;
    },
  },
});
</script>

<style scoped>
.gallery {
  column-gap: 15px;
  column-width: 350px;
  margin: 0 auto;
  max-width: 1200px;
  padding-top: 1rem;
  transition: 0.15s all ease-in-out;
}

.gallery__figure {
  cursor: pointer;
  display: inline-block;
  margin: 0 0 1rem;
  position: relative;
}

.gallery__figure--img-wrapper {
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
}

.gallery__figure--img {
  border-radius: 0.5rem;
  object-fit: cover;
  opacity: 0.8;
  overflow: hidden;
  transition: 0.4s all ease-in-out;
  width: 100%;
}

.gallery--figure--caption {
  bottom: 0;
  color: #d0d0d0;
  font-weight: 600;
  left: 0;
  padding: 0.7rem;
  position: absolute;
  transition: 0.4s all ease-in-out;
}

.gallery__figure:hover .gallery__figure--img {
  opacity: 1;
  transform: scale(1.05);
}

.gallery__figure:hover .gallery--figure--caption {
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
