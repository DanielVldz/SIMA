<template>
  <div class="content">
    <div class="md-layout">
    <div v-if="typeof form == typeof '' && form != 'lista'" @click="form = 'lista'">
          <md-icon class="md-size-2x">arrow_back</md-icon>
    </div>
        <crear-user-form v-if="form == 'crear'" data-background-color="green"> </crear-user-form>
         <edit-profile-form v-if="form == 'editar'" data-background-color="green"> </edit-profile-form>

        <div v-if="form == 'lista'"
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
              <p class="category">{{user.username}}<br></p>
              <p class="category">{{user.firstname}}</p>
            </template>
            <template slot="footer">
            <md-button class="md-icon-button" @click="handleClick(user.id)">
            <md-icon>edit</md-icon>
          </md-button>
            <md-button class="md-icon-button" @click="handleSubmit(user.id)">
            <md-icon>delete</md-icon>
          </md-button>
          </template>
          </stats-card>
        </div>
        <router-link @click.native="form = 'crear'" to="/user" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
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
              <md-icon>add</md-icon>
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
    EditProfileForm,
    StatsCard
  },
  data(){
    return{
      form: "lista"
    }
  },
      computed:{...mapActions(['getUsersAct']),...mapGetters(['getUsers',"getUser"])},
 async mounted() {
   if(this.$route.query.form == "true"){
         this.form=true
   }
    await this.getUsersAct;
    },
    methods : {
     ...mapActions(['deleteUser',"setConfigUser"]),
    handleSubmit(id){
      console.log(id)
    this.deleteUser(id)
    },
    handleClick(id){
      console.log('what?',id)
      this.setConfigUser(id)
      this.form="editar"

    }
  },
};
</script>
