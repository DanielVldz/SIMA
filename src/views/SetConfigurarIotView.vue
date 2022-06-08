/* eslint-disable */
<template>
  <div class="content">
    <div class="md-layout">
              <edit-iot-form data-background-color="green"> </edit-iot-form>
           </div>
    </div>
</template>

<script>
/* eslint-disable */
import {mapActions,mapState,mapGetters} from "vuex"
import EditIotForm  from "./Forms/EditIotForm.vue";
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
    }
  },
 async mounted() {
        console.log('router',this.$route)
    },
};
</script>
