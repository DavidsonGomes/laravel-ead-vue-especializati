<template>
  <div class="login">
    <div class="content">
      <span class="logo">
        <img :src="require('@/assets/images/logoDark.svg')" alt="" />
      </span>
      <span>
        <p>Recuperar Senha!</p>
      </span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span class="description">
        Utilize seu email cadastrado para cadastrar uma nova senha.
      </span>
      <form action="/dist/index.html" method="">
        <div class="groupForm">
          <i class="far fa-envelope"></i>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <button class="btn primary" type="submit">Recuperar</button>
      </form>
      <span>
        <p class="fontSmall">
          Acessar campus?
          <router-link :to="{ name: 'auth.login' }" class="link primary">
            Clique aqui
          </router-link>
        </p>
      </span>
    </div>
    <span class="copyright fontSmall">
      Todos os Direitos reservados - <b>Especializati</b>
    </span>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>