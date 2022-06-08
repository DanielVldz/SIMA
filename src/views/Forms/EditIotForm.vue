<template>
  <form class="container">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Configurar Modulo</h4>
        <p class="category">Ingrese los datos para la configuracion.</p>
      </md-card-header>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nombre</label>
              <md-input v-model="config.wifi_type" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nombe de la Red</label>
              <md-input v-model="config.wifi_user" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Clave de la Red</label>
              <md-input v-model="config.wifi_pass" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="handleClick" >Actualizar Modulo</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import {mapActions} from "vuex"

export default {
  name: "edit-iot-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return { config:{
      Id:null,
      wifi_user:null,
      wifi_pass:null,
      wifi_type:null
  }


    };
  },
  methods:{...mapActions(['setIOT_ModuleConfig']),
  handleClick(){
    this.setIOT_ModuleConfig(this.config)
  }},
   async mounted() {
     this.config.Id=this.$route.query.id
    },
};
</script>
<style></style>
