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
            <div class="stats">
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
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailySalesChart1.data"
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
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailySalesChart2.data"
          :chart-options="dailySalesChart2.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Oxigeno</h4>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailySalesChart3.data"
          :chart-options="dailySalesChart3.options"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">PH</h4>
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
        data: {
          labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00"],
          series: [[12, 13, 7, 15, 40, 10, 38]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
         dailySalesChart2: {
        data: {
          labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00"],
          series: [[0.6, .50, .4, .6, .54, .65]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 10,
          },
        },
      },   dailySalesChart3: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[16, 13, 7, 10, 20, 12, 14]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      }
    }
  },
  computed:{...mapActions(['getPondByUser']),...mapGetters(['pondsGetter'])},
  methods:{
     handleAddNewPond(){
      router.push({ path: 'pond', query:{form:true}})
    }
  },
 async mounted() {
     await this.getPondByUser;
    console.log("ponds",this.pondsGetter)
    },
};
</script>
