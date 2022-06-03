<template>
  <div class="content">
    <div class="md-layout">
    <div v-if="form == true" @click="form = false">
          <md-icon class="md-size-2x">arrow_back</md-icon>
    </div>
        <pond-form v-if="form == true" data-background-color="green"> </pond-form>
        <div v-if="form == false"
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
              <p class="category">{{pond.name}}</p>
              <h6 >Area: {{pond.altitude*pond.longitud}}mts <br> </h6>
            </template>

            <template slot="footer">
              <div class="stats">
                <md-icon>autorenew</md-icon>
                Activo
              </div>
            </template>
          </stats-card>
        </div>
        <router-link @click.native="form = true" to="/pond" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
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
import {
  StatsCard
} from "@/components";

export default {
  components: {
    PondForm,
    StatsCard
  },
  data(){
    return{
      form:false
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
