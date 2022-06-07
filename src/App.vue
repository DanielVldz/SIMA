<template>
  <div id="app">
    <router-view/>
      <md-dialog-confirm
      :md-active.sync="active"
      :md-title="notification.title"
      :md-content="notification.body"
      md-confirm-text="Confirmar"
      md-cancel-text="Cancelar"
      />
  </div>
</template>

<script>
import messaging from "../firebase";
import { onMessage } from "firebase/messaging";


export default {
    data: () => ({
      active: false,
      notification: {title:"", body:""},
    }),
    created() {
      onMessage(messaging, (payload) => {
  console.log('Message received. inside vue', payload.notification);
  this.notification.title = payload.notification.title
  this.notification.body = payload.notification.body
  this.active = true;
  
});
 }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
