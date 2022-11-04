<template>
  <div class="login">
    <div class="content">
      <span class="logo">
        <img :src="require('@/assets/images/logoDark.svg')" alt="" />
      </span>
      <span>
        <p>Seja muito bem vindo!</p>
      </span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <span class="description">
        Acesse nossa plataforma e desfrute de cursos completos para sua
        especialização.
      </span>
      <form action="/dist/index.html" method="">
        <div class="groupForm">
          <i class="far fa-envelope"></i>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div class="groupForm">
          <i class="far fa-key"></i>
          <input type="password" name="password" placeholder="Senha" required />
          <i class="far fa-eye buttom"></i>
        </div>
        <button class="btn primary" type="submit">Login</button>
      </form>
      <span>
        <p class="fontSmall">
          Esqueceu sua senha?
          <router-link
            :to="{ name: 'auth.forgot.password' }"
            class="link primary"
          >
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