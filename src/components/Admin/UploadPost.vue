<template>
  <div class="background-wrapper">
    <div class="admin--wrapper">
      <div class="admin--inner">
        <div class="admin__top">
          <button type="button">업로드하기</button>
          <button type="button">이미지추가</button>
          <button type="button" @click="$emit('close')">취소</button>
        </div>
        <div class="admin__upload">
          <div>upload area - nothing uploaded image</div>
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
  name: 'UploadPost',
  emits: ['close'],
};
</script>
