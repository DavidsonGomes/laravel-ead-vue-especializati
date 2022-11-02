<template>
  <div class="comments">
    <div class="header">
      <span class="title">Dúvidas</span>
      <button class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>

    <supports-component />
  </div>
</template>

<script>
import SupportsComponent from "@/components/SupportsComponent.vue";

export default {
  name: "supports-lesson-component",
  components: {
    SupportsComponent,
  },
};
</script>