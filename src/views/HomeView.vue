/* eslint-disable */
<template>
  <div class="content">
    <div class="md-layout">
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
            <p >Area: {{pond.altitude*pond.longitud}}mts <br> </p>
          </template>

          <template slot="footer">
            <div  @click="handlePondSelect(pond.id)" class="stats">
              <md-icon>autorenew</md-icon>
              Activo
            </div>
          </template>
        </stats-card>
      </div>
      <div @click="handleAddNewPond" class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
         <stats-card data-background-color="">
           <template slot="header">
            <md-icon>local_drink</md-icon>
          </template>
          <template slot="content">
                      <p class="category">Agregar nuevo</p>
                      <br>
                      <br>
          </template>
          <template slot="footer">
            <div class="stats">
              <md-icon>library_add</md-icon>
              nuevo registro
            </div>
          </template>
        </stats-card>
      </div>
  </div>
    <div class="md-layout">
     <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-progress-spinner v-if="getLoading == true" md-mode="indeterminate"></md-progress-spinner>
        </div>
  <div
    v-if="loading == getLoading"
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <chart-card
          :chart-data="getioTData"
          :chart-options="dailySalesChart1.options"
          :chart-type="'Line'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Temperatura</h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>

  </div>
    </div>

</template>

<script>
/* eslint-disable */
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable,
} from "@/components";
import {mapActions,mapState,mapGetters} from "vuex"
import router from "../router/index";


export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
  },
  data(){
    return{
        dailySalesChart1: {
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 70, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      loading:false
    }
  },
  computed:{...mapGetters(['pondsGetter',"getioTData","getLoading","getUser"])},
  methods:{...mapActions(['getPondByUser','getValuesByPond']),
     handleAddNewPond(){
      router.push({ path: 'pond', query:{form:true}})
    },
    async handlePondSelect( id ){
            console.log("in here")
           await this.getValuesByPond(id)
    }
  },
 async mounted() {
            console.log("in pond mounted")
              await this.getPondByUser(this.getUser.id)
    },
};
</script>
