<template>
  <div id="app">
    <div class="logo">
      <img src="@/assets/logo.jpg" alt="Logo ToDo" width="120" height="auto" />
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

* {
  box-sizing: border-box;
  transition: 0.15s;
}

body {
  background: url("assets/bg.jpg");
  background-size: 1920px auto;
  background-position: 10%;
}

#app,
button,
input {
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  color: #2c3e50;
  max-width: 720px;
  margin: auto;
  padding-top: 1.5rem;
  font-size: 21px;
  background: white;
  padding: 36px;
  min-height: 600px;
  border-radius: 6px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.06);
  margin-top: 3rem;
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

.justify-center {
  justify-content: center;
}

.text-center {
  text-align: center;
}

hr {
  border-top: 1px solid lightgray;
}

input {
  width: 100%;
  font-size: 18px;
  border: 1px solid lightgray;
  border-radius: 6px;
  outline: none;
  margin-bottom: 1rem;
  padding: 12px 18px;
}

input:focus {
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.06);
  border-color: #3498db;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #3498db;
}

a:hover {
  text-decoration: underline;
}

.button-form {
  width: 100%;
  font-size: 18px;
  padding: 13px 0;
  border-radius: 6px;
  color: white;
  background-color: #2ecc71;
  font-weight: 700;
}

.button-form:hover {
  background-color: #22b660;
}

.auth-links {
  margin-top: 1.5rem;
  font-size: 15px;
}
</style>
