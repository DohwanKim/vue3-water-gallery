<template>
  <h1 style="text-align: center">인증이 필요한 페이지</h1>
  <div class="admin--wrapper">
    <div>search area (top fix)</div>
    <div>post list area (scroll)</div>
    <div>pagination (bottom fix)</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Admin",
  created() {
    console.log("something");
  },
});
</script>

<style scoped>
.admin--wrapper {
  position: fixed;
  background-color: #d0d0d0;
  width: 90%;
  max-width: 1200px;
  height: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
