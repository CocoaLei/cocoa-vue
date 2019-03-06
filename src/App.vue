<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style lang="less">
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #f5f5f5;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
