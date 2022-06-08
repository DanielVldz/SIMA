<template>
<div>
  <form  class="container">
    <md-card class="tarjeta">
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Nuevo Registro</h4>
        <p class="category">Ingrese la informacion del estanque</p>
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
          <label class="label1">Temperatura</label>
          <div class="limites">
          <md-field class="parametros">
        <label>Limite inferior</label>
        <md-input v-model="TempObj.LimiteInfTemp" type="number"></md-input>
        </md-field>
        <md-field class="parametros">
        <label>Limite superior</label>
        <md-input v-model="TempObj.LimiteSupTemp" type="number"></md-input>
        </md-field>
          </div>
          <label class="label1">PH</label>
          <div class="limites">
          <md-field class="parametros">
        <label>Limite inferior</label>
        <md-input v-model="PHObj.LimiteInfPH" type="number"></md-input>
        </md-field>
        <md-field class="parametros">
        <label>Limite superior</label>
        <md-input v-model="PHObj.LimiteSupPH" type="number"></md-input>
        </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click = "handleSubmit">Registrar estanque</md-button>
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
  name: "pond-form",
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
      },
      TempObj: {
        idparametro: 1,
        LimiteInfTemp: null,
        LimiteSupTemp: null
      },
      PHObj: {
        idparametro: 2,
        LimiteInfPH: null,
        LimiteSupPH: null
      }

    };
  },
   methods : {
     ...mapActions(['getNotActiveIOT_Modules', 'CreatePonds']),
    handleSubmit (){
      console.log(this.pondObj)
      console.log(this.TempObj)
      let pond = this.pondObj
      let temp = this.TempObj
      let ph = this.PHObj
    this.CreatePonds({pond, temp, ph})
    console.log("vista2")
    }
  },
     async mounted() {
     await this.getNotActiveIOT_Modules()
    },
};
</script>
<style>
.parametros{
  width: 200px;
  display: inline-block;
  right: 29%;
  margin-right: 2%;
}

.tarjeta{
  width: 1200px;
}
.label1{
display: flex;
right: 50%;
}
</style>


