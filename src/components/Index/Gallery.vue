<template>
  <div class="gallery">
    <figure class="gallery__figure" @click="showDetail">
      <div class="gallery__figure--img-wrapper">
        <img
          class="gallery__figure--img"
          :src="require('@/assets/img/20190915_141455-crop.jpg')"
          alt=""
        />
      </div>
      <figcaption class="gallery--figure--caption">Picture name</figcaption>
    </figure>
    <figure class="gallery__figure" @click="showDetail">
      <div class="gallery__figure--img-wrapper">
        <img
          class="gallery__figure--img"
          :src="require('@/assets/img/20210201_200206-crop.jpg')"
          alt=""
        />
      </div>
      <figcaption class="gallery--figure--caption">Picture name</figcaption>
    </figure>
    <figure class="gallery__figure" @click="showDetail">
      <div class="gallery__figure--img-wrapper">
        <img
          class="gallery__figure--img"
          :src="require('@/assets/img/20210602_152857-crop.jpg')"
          alt=""
        />
      </div>
      <figcaption class="gallery--figure--caption">Picture name</figcaption>
    </figure>
    <figure class="gallery__figure" @click="showDetail">
      <div class="gallery__figure--img-wrapper">
        <img
          class="gallery__figure--img"
          :src="require('@/assets/img/20210704_124207-crop.jpg')"
          alt=""
        />
      </div>
      <figcaption class="gallery--figure--caption">Picture name</figcaption>
    </figure>
    <figure class="gallery__figure" @click="showDetail">
      <div class="gallery__figure--img-wrapper">
        <img
          class="gallery__figure--img"
          :src="require('@/assets/img/20210812_192244-crop.jpg')"
          alt=""
        />
      </div>
      <figcaption class="gallery--figure--caption">Picture name</figcaption>
    </figure>
    <figure class="gallery__figure" @click="showDetail">
      <div class="gallery__figure--img-wrapper">
        <img
          class="gallery__figure--img"
          :src="require('@/assets/img/20210903_212630-crop.jpg')"
          alt=""
        />
      </div>
      <figcaption class="gallery--figure--caption">Picture name</figcaption>
    </figure>
  </div>
  <transition name="fade">
    <DetailModal @close="hideDetail" v-if="isShowDetail" />
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DetailModal from '@/components/Index/DetailModal.vue';

export default defineComponent({
  name: 'Gallery',
  components: {
    DetailModal,
  },
  setup() {
    const isShowDetail = ref(false);
    const showDetail = () => {
      isShowDetail.value = true;
    };
    const hideDetail = () => {
      isShowDetail.value = false;
    };

    return { isShowDetail, showDetail, hideDetail };
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
  z-index: 2;
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
</style>
