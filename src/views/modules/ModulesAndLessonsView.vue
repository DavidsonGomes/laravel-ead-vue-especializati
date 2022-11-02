<template>
  <page-title-component :pageTitle="'Curso X'" />

  <div class="content">
    <div class="container">
      
      <modules-component />

      <div class="right">
        <div class="content">
          
          <player-component />

          <supports-lesson-component />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitleComponent from "@/components/PageTitleComponent.vue";
import ModulesComponent from "@/views/modules/components/ModulesComponent.vue";
import PlayerComponent from "@/views/modules/components/PlayerComponent.vue";
import SupportsLessonComponent from "@/views/modules/components/SupportsComponent.vue";

export default {
  name: "ModulesAndLessonsView",
  components: {
    PageTitleComponent,
    ModulesComponent,
    PlayerComponent,
    SupportsLessonComponent,
  },
};
</script>