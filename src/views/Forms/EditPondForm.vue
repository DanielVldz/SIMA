<template>
<div>
  <form  class="container">
    <md-card class="md-grey">
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Editar Registro</h4>
        <p class="category">Edite la informacion del estanque</p>
      </md-card-header>
      <md-card-content>
        <div class="md-layout">
           </div>
            <div class="md-layout">
            <div
            v-for="iotModule in IOT_ModulesGetter"
              :key="iotModule.id"
              class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
            >
              <stats-card data-background-color="blue">
                <template slot="header">
                  <md-icon>tablet_android</md-icon>
                </template>

                <template slot="content">
                  <h6 >Modulo IOT <br> </h6>
                  <p class="category">Serial:{{iotModule.serialId}}</p>
                  <h6 >CPU: {{iotModule.cpu}}<br> </h6>
                </template>

                <template slot="footer">
                  <div @click="active = true" class="stats">
                    <md-icon>autorenew</md-icon>
                    Asociar Modulo
                  </div>
                </template>
              </stats-card>
            </div>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                  <md-icon>local_drink</md-icon>
              <label>Nombre de estanque</label>
              <md-input v-model="pondObj.Name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                <md-icon>leaderboard</md-icon>
              <label>Altitud</label>
              <md-input v-model="pondObj.Altitude" type="text"></md-input>
            </md-field>
          </div>
         <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
                <md-icon>arrow_right_alt</md-icon>
              <label>Longitud</label>
              <md-input v-model="pondObj.Longitud" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click = "handleSubmit">Actualizar estanque</md-button>
          </div>
      </md-card-content>
    </md-card>
  </form>

            <md-dialog-confirm
      :md-active.sync="active"
      md-title="Desea asociar este modulo iot al estanque?"
      md-content="al associar el modulo iot tendre acesso a estadisticas del monitoreo de ese modulo."
      md-confirm-text="Confirmar"
      md-cancel-text="Cancelar"
      />
          </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
import {
  StatsCard,
} from "@/components";

export default {
  name: "edit-pond-form",
  components:{StatsCard},
  props: {
    dataBackgroundColor: {
      type: String,
      default: "red",
    },
  },
  computed:{...mapGetters(['IOT_ModulesGetter'])},
  data() {
    return {
      pondObj: {
        Name: null,
        Altitude: null,
        Longitud: null
      }

    };
  },
   methods : {
     ...mapActions(['getNotActiveIOT_Modules', 'CreatePonds']),
    handleSubmit (){
      console.log(this.pondObj)
    this.CreatePonds(this.pondObj)
    }
  },
     async mounted() {
     await this.getNotActiveIOT_Modules()
    },
};
</script>
<style></style>