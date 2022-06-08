/* eslint-disable */
<template>
  <div class="content">
    <div class="md-layout">
              <edit-iot-form  :module-id="id" v-if="form == true" data-background-color="green"> </edit-iot-form>
       <div v-if="form == false" class="md-layout">
            <div
            v-for="iotModule in IOT_ModulesGetter"
              :key="iotModule.id"
              class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
            >
              <stats-card data-background-color="blue">
                <template slot="header">
                  <md-icon>upcoming</md-icon>
                </template>

                <template slot="content">
                  <h6 >Modulo IOT <br> </h6>
                  <p class="category">Serial:{{iotModule.serialId}}</p>
                  <h6 >CPU: {{iotModule.cpu}}<br> </h6>
                </template>

                <template slot="footer">
                  <div @click="handleEdit(iotModule.id)" class="stats">
                    <md-icon>autorenew</md-icon>
                    Asociar Modulo
                  </div>
                </template>
              </stats-card>
            </div>
          </div>
           </div>
    </div>
</template>

<script>
/* eslint-disable */
import {mapActions,mapState,mapGetters} from "vuex"
import EditIotForm  from "./Forms/EditIotForm.vue";
import router from "../router/index";

import {
  StatsCard
} from "@/components";

export default {
  components: {
    EditIotForm,
    StatsCard
  },
    data(){
    return{
      id:null,
      form:false
    }
  },
  computed:{...mapActions(['getNotActiveIOT_Modules']),...mapGetters(['IOT_ModulesGetter'])},
  methods:{
    handleEdit(id){

      this.form=true;
      this.id=id;
      router.push({name: 'ConfigIot' , query: { id:id}})
    }
  },
 async mounted() {
        this.getNotActiveIOT_Modules;
    },
};
</script>
