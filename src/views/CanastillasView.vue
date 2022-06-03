<template>
<div class="md-layout">
<div v-for="canastilla in canastillas" :key="canastilla.id" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-30"
>
<md-card>
      <md-card-media-actions>
      <div class="container">
          <md-card-media>
                <md-icon class="md-size-4x">shopping_basket</md-icon>
        </md-card-media>
      </div>
            <div class="container md-layout md-size-30">
            <p>estanque</p>
            <p>alimento</p>
            </div>
            <div class="container">
             <md-card-actions>
          <md-button class="md-icon-button">
            <md-icon>edit</md-icon>
          </md-button>

          <md-button @click="active = true" class="md-icon-button">
            <md-icon>delete</md-icon>
          </md-button>
        </md-card-actions>
            </div>
      </md-card-media-actions>
    </md-card>
  </div>
     <div>
    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Desea Eliminar Canastilla?"
      md-content="al borrar canastilla perdera los datos de canastilla."
      md-confirm-text="Confirmar"
      md-cancel-text="Cancelar" />
  </div>
  </div>
</template>

<script>
/* eslint-disable */
import {mapActions,mapState,mapGetters} from "vuex"


export default {
    data(){
        return{
            active: false,
            canastillas:this.basket()
        }
    },
  components: {
  },
  methods:{
      basket:()=>{
                let basket =[]
                for(let x=1; x<=30; x++){
                        basket.push({id:x})
                }
                return basket
            }
  },
 async mounted() {

    },
};
</script>
