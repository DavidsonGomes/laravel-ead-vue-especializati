<template>
  <div class="pageTitle">
    <span class="title">{{ pageTitle }}</span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "page-title-component",
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  }
};
</script>