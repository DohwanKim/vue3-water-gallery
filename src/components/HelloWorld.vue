<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="count-table">
      <button class="a" type="button" @click="minusCnt">-</button>
      <h2 class="cnt">{{ count }}</h2>
      <button class="b" type="button" @click="plusCnt">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(): {count: number} {
    return {
      count: 0,
    };
  },
  methods: {
    plusCnt() {
      this.count += 1;
    },
    minusCnt() {
      this.count = this.count - 1 < 0 ? 0 : this.count - 1;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
