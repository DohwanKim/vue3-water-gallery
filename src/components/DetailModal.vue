<template>
  <div class="detail-modal">
    <div class="detail-modal--inner">
      <button type="button" @click="close">close modal</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DetailModal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
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
}

.detail-modal--inner {
  background-color: #fff;
  height: 70vh;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
}
</style>
