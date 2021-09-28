<template>
  <div class="landing-top">
    <div class="landing-top--background" />
    <h1 class="landing-top--title">Water Gallery</h1>
  </div>
</template>

<style scoped>
.landing-top {
  position: relative;
  height: 100%;
  width: 100%;
}

.landing-top--background {
  height: 100vh;
  width: 100vw;
  background-image: url('https://picsum.photos/1920/1280');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: background-image 1s ease-in-out;
}

.landing-top--title {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
}
</style>
