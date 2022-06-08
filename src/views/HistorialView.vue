/* eslint-disable */
<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
/* eslint-disable */
import {mapActions,mapState,mapGetters} from "vuex"


export default {
   data() {
      return {
        items: [
          { Estanque: 'Estanque 1', Temperatura: '27C', Oxigeno: '7.3', PH:'7,3', Fecha:'25/5/2022'},
          { Estanque: 'Estanque 2', Temperatura: '27.6C', Oxigeno: '7.2', PH:'7,3', Fecha:'23/5/2022'},
          { Estanque: 'Estanque 3', Temperatura: '25.5C', Oxigeno: '6.8', PH:'7,3', Fecha:'25/5/2022'},
          { Estanque: 'Estanque 4', Temperatura: '26.3C', Oxigeno: '7.3', PH:'7,3', Fecha:'24/5/2022'},
        ]
      }
    },
  components: {
  },
 async mounted() {

    },
};
</script>
