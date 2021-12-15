<template>
  <div class="background-wrapper">
    <div class="admin--wrapper">
      <div class="admin--inner">
        <div class="admin__top">
          <button type="button" @click="$emit('close')">취소</button>
        </div>
        <div class="admin__detail">
          <div class="admin__detail--img">
            <img
              :src="require('@/assets/img/20210602_152857-crop.jpg')"
              alt=""
            />
          </div>
          <div class="admin__detail--info">
            <div>Sort num</div>
            <div>Date</div>
            <div>Name</div>
          </div>
          <div class="admin__detail--des">
            <textarea aria-label="description" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPost',
  emits: ['close'],
};
</script>
