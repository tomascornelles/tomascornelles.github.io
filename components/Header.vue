<template>
  <header>
    <h1>
      🚀 My page
    </h1>
    <section role='menu'>
      <ul role='menubar'>
        <li role='menuitem'>
          <NuxtLink to='sobre-mi'>🧔 Sobre mi</NuxtLink>
        </li>
        <li role='menuitem'>
          <NuxtLink to='porfolio'>🗃️ Porfolio</NuxtLink>
        </li>
        <li role='menuitem'>
          <NuxtLink to='blog'>📰 Blog</NuxtLink>
        </li>
        <li role='menuitem'>
          <NuxtLink to='contacto'>📨 Contacto</NuxtLink>
        </li>
      </ul>
    </section>
  </header>
</template>

<style lang="scss">
@use "~/assets/styles/main.scss";
</style>

