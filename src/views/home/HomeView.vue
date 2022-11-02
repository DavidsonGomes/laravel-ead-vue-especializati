<template>
  <page-title-component :pageTitle="'Meus Cursos'" />

  <div class="content">
    <ul class="listCourses">
      <card-course-component
        :title="'Curso LaraFood + VueFood + FlutterFood'"
        :image="''"
        :bgName="'laravel'"
      />
    </ul>
  </div>
</template>

<script>
import PageTitleComponent from "@/components/PageTitleComponent.vue";
import CardCourseComponent from "@/views/home/components/CardCourseComponent.vue";

export default {
  name: "HomeView",
  components: {
    PageTitleComponent,
    CardCourseComponent,
  },
};
</script>
