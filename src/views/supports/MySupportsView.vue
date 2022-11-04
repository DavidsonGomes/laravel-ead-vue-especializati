<template>
  <page-title-component :pageTitle="'Minhas Dúvidas'" />

  <div class="content">
    <div class="container">
      <div class="left">
        <div class="card">
          <div class="title bg-laravel">
            <span class="text">Filtros</span>
          </div>
          <div class="modules">
            <ul class="classes">
              <li>Todos</li>
              <li>Aguardando Minha Resposta</li>
              <li>Aguardando Professor</li>
              <li>Finalizados</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="content">
          <div class="comments">
            <supports-component />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import PageTitleComponent from "@/components/PageTitleComponent.vue";
import SupportsComponent from "@/components/SupportsComponent.vue";

export default {
  name: "MySupportsView",
  components: {
    PageTitleComponent,
    SupportsComponent,
  },
};
</script>
  