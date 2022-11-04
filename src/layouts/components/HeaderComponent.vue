<template>
  <header id="header">
    <nav>
      <span class="toggleMenu far fa-bars"></span>
      <router-link :to="{ name: 'campus.home' }" class="logo">
        <img :src="require('@/assets/images/logo.svg')" alt="" />
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header-component",
};
</script>