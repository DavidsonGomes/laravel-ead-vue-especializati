<template>
  <div class="pageTitle">
    <span class="title">Meus Cursos</span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>

  <div class="content">
    <ul class="listCourses">
      <CardCourseComponent
        :title="'Curso LaraFood + VueFood + FlutterFood'"
        :image="''"
        :bgName="'laravel'"
      />
    </ul>
  </div>
</template>

<script>
import CardCourseComponent from "@/views/home/components/CardCourseComponent.vue";

export default {
  name: "HomeView",
  components: {
    CardCourseComponent,
  },
};
</script>
