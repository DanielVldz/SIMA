<template>
  <div class="content">
    <div class="md-layout">
    <div v-if="typeof form == typeof '' && form != 'lista'" @click="form = 'lista'">
          <md-icon class="md-size-2x">arrow_back</md-icon>
    </div>
        <pond-form v-if="form == 'crear'" data-background-color="green"> </pond-form>
        <edit-pond-form v-if="form == 'editar'" data-background-color="green"> </edit-pond-form>
        <div v-if="form == 'lista'"
         class="md-layout"
          >
        <div
         v-for="pond in pondsGetter"
          :key="pond.id"
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
        >
          <stats-card data-background-color="blue">
            <template slot="header">
              <md-icon>local_drink</md-icon>
            </template>

            <template slot="content">
              <h6 class="category">{{pond.name}}</h6>
              <p>Area: {{pond.altitude*pond.longitud}}mts² <br> </p>
            </template>

            <template slot="footer">
              <div class="stats" @click="form = 'editar'">
                <md-icon>edit</md-icon>
                Editar
              </div>
              <div class="stats">
                <md-icon>delete</md-icon>
                Eliminar
              </div>
            </template>
          </stats-card>
        </div>
        <router-link @click.native="form = 'crear'" to="/pond" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
         <stats-card data-background-color="">
           <template slot="header">
            <md-icon>local_drink</md-icon>
          </template>
          <template slot="content">
                      <p class="category">Agregar nuevo</p>
                      <br>
          </template>
          <template slot="footer">
            <div class="stats">
              <md-icon>library_add</md-icon>
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
import PondForm  from "./Forms/PondForm.vue";
import EditPondForm from "./Forms/EditPondForm.vue";

import {
  StatsCard
} from "@/components";

export default {
  components: {
    PondForm,
    EditPondForm,
    StatsCard
  },
  data(){
    return{
      form: "lista"
    }
  },
      computed:{...mapActions(['getPondByUser']),...mapGetters(['pondsGetter'])},
 async mounted() {
   if(this.$route.query.form == "true"){
         this.form=true
   }
    await this.getPondByUser;
    },
};
</script>
