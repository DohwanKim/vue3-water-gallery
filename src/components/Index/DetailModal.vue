<template>
  <div class="detail-modal">
    <div class="detail-modal--wrapper">
      <img
        class="detail-modal--img"
        :src="require('@/assets/img/20210903_212630-crop.jpg')"
        alt=""
      />
      <button
        class="detail-modal__button detail-modal__button--close"
        type="button"
        @click="$emit('close')"
      >
        close
      </button>
      <button
        class="detail-modal__button detail-modal__button--share"
        type="button"
        @click="$emit('close')"
      >
        share
      </button>
      <h1 class="detail-modal__text detail-modal__text--title">
        img title name
      </h1>
      <p class="detail-modal__text detail-modal__text--description">
        description description description description description description
        description description description description description description
        description description description description description description
        description description description description description description
        description description description description description description
        description description description description description description
        description description description description description description
        description description description description description description
        description description description description description description
        description description description description
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DetailModal',
  emits: ['close'],
});
</script>

<style scoped>
.detail-modal {
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
}

.detail-modal--wrapper {
  position: relative;
  background-color: #000;
  height: 100%;
  width: 100%;
}

.detail-modal--img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  width: 100%;
  object-fit: contain;
}

.detail-modal__button {
  position: absolute;
  top: 5%;
}

.detail-modal__button--close {
  right: 5%;
}

.detail-modal__button--share {
  right: 10%;
}

.detail-modal__text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.detail-modal__text--title {
  bottom: 20%;
  font-size: 1.5rem;
}

.detail-modal__text--description {
  top: 82%;
}
</style>
