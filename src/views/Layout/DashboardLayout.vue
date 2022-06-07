<template>
  <div class="wrapper" :class="{ 'nav-open': this.$sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/pond">
        <md-icon>local_drink</md-icon>
        <p>Estanques</p>
      </sidebar-link>
      <sidebar-link to="/iot-module">
        <md-icon>upcoming</md-icon>
        <p>Gestion de Modulos</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>face_6</md-icon>
        <p>User</p>
      </sidebar-link>
      <sidebar-link to="/canastillas">
        <md-icon>shopping_basket</md-icon>
        <p>Canastillas</p>
      </sidebar-link>
      <sidebar-link to="/historial">
        <md-icon>content_paste</md-icon>
        <p>Historial de Monitoreo</p>
      </sidebar-link>
      <sidebar-link to="/inventario">
        <md-icon>inventory</md-icon>
        <p>Inventario de Alimentos</p>
      </sidebar-link>
        <li class="md-list-item">
    <router-link
      class="md-list-item-router md-list-item-container md-button-clean"
      @click.native="handleLogout"
      to=""
    >
      <div class="md-list-item-content md-ripple">
          <md-icon>closed</md-icon>
          <p>cerrar sesion</p>
      </div>
    </router-link>
  </li>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./ContentScreen.vue";
import MobileMenu from "./MobileMenu.vue";
import {mapActions} from "vuex"

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/estanque.jpeg"),
    };
  },
    methods:{...mapActions(['logOut']),
    handleLogout(){
      this.logOut();
    }
  }
};
</script>
