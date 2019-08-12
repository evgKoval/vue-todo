<template>
  <div id="app">
    <div class="logo">ToDo</div>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  transition: 0.15s;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 720px;
  margin: auto;
  padding-top: 1.5rem;
  font-size: 21px;
}

.logo {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}

hr {
  border-top: 1px solid lightgray;
}
</style>
