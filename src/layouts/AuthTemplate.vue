<template>
  <section id="loginPage" :style="{
    backgroundImage: 'url('+require('@/assets/images/bgLogin.jpg')+')'
  }">
    <div class="loginContent">
      <div class="loginCard">
        <div class="decor" :style="{
            backgroundImage: 'url('+require('@/assets/images/building.jpg')+')'
        }">
          <div class="content">
            <span class="logo">
              <img :src="require('@/assets/images/logo.svg')" alt="" />
            </span>
            <span class="dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span class="description">
              <p>
                Os melhores e mais completos cursos de Laravel do Brasil, cursos
                com projetos reais. Do zero ao profissional.
              </p>
            </span>
            <span class="copyright fontSmall">
              Todos os Direitos reservados - <b>Especializati</b>
            </span>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AuthTemplate",
};
</script>