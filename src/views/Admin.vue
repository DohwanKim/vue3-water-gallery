<template>
  <div>
    <router-link to="/">돌아가기</router-link>
  </div>
  <transition name="fade">
    <div v-if="showType === 'A'" class="admin--wrapper">
      <div class="admin--inner">
        <div class="admin__top">
          <button type="button">삭제</button>
          <button type="button" @click="showType = 'B'">추가</button>
          <Datepicker />
          <Datepicker />
          <input type="text" placeholder="검색어 입력" />
          <button type="button">검색</button>
        </div>
        <div class="admin__list">
          <div
            v-for="(_, index) in 10"
            :key="index"
            class="admin__list--item"
            @click="showType = 'C'"
          >
            <div>
              <input type="checkbox" />
              <div>num</div>
              <div>Date</div>
              <div>Name</div>
            </div>
            <div>
              <img
                :src="require('@/assets/img/20200323_133158-crop.jpg')"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="admin__pagination">1 2 3</div>
      </div>
    </div>
    <DetailPost v-else-if="showType === 'B'" @close="showType = 'A'" />
    <UploadPost v-else-if="showType === 'C'" @close="showType = 'A'" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Datepicker from 'vue3-datepicker';
import DetailPost from '@/components/Admin/DetailPost.vue';
import UploadPost from '@/components/Admin/UploadPost.vue';
import '@/assets/style/admin.css';

export default defineComponent({
  name: 'Admin',
  components: {
    Datepicker,
    DetailPost,
    UploadPost,
  },
  data() {
    return {
      showType: 'A',
      startDay: '',
      endDay: '',
    };
  },
});
</script>
