<template>
  <div class="content">
    <div class="md-layout">
    <div v-if="form == true" @click="form = false">
          <md-icon class="md-size-2x">arrow_back</md-icon>
    </div>
        <crear-user-form v-if="form == true" data-background-color="green"> </crear-user-form>
        <div v-if="form == false"
         class="md-layout"
          >
        <div
         v-for="user in getUsers"
          :key="user.id"
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <stats-card data-background-color="blue">
            <template slot="header">
              <md-icon>person</md-icon>
            </template>

            <template slot="content">
              <p >{{user.role}} <br> </p>
              <p class="category">{{user.username}}</p>
            </template>
            <template slot="footer">
            <div class="stats">
              <md-icon>edit</md-icon>
              Editar Usuario
            </div>
          </template>
          </stats-card>
        </div>
        <router-link @click.native="form = true" to="/user" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
         <stats-card data-background-color="">
           <template slot="header">
            <md-icon>person_add</md-icon>
          </template>
          <template slot="content">
                      <p class="category">Agregar nuevo</p>
                      <br>
          </template>
          <template slot="footer">
            <div class="stats">
              <md-icon>control_point</md-icon>
              nuevo registro
            </div>
          </template>
        </stats-card>
      </router-link>
      </div>
    </div>
    </div>
</template>

<script>
/* eslint-disable */
import {mapActions,mapGetters} from "vuex"
import CrearUserForm  from "./Forms/CrearUserForm.vue";
import EditProfileForm  from "./Forms/EditProfileForm.vue";
import {
  StatsCard
} from "@/components";

export default {
  components: {
    CrearUserForm,
    StatsCard
  },
  data(){
    return{
      form:false
    }
  },
      computed:{...mapActions(['getUsersAct']),...mapGetters(['getUsers'])},
 async mounted() {
   if(this.$route.query.form == "true"){
         this.form=true
   }
    await this.getUsersAct;
    },
};
</script>
