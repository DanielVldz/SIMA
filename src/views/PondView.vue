<template>
  <div ref="about" id="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import {mapActions,mapState,mapGetters} from "vuex"


export default {
    name: 'PondView',
    computed:{...mapState(['iotDevice']),...mapGetters(['pond/IOT_DevicesGetter'])},
    methods: {...mapActions(['getIOT_Devices'])},
 async mounted() {
     this.getIOT_Devices();
    console.log(this.getIOT_Device)
    console.log(this.IOT_DevicesGetter)
    },
 }

</script>