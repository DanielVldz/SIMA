<template>
  <div ref="about" id="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import {mapActions,mapState,mapGetters} from "vuex"


export default {
    name: 'PondView',
    computed:{...mapState(['pond']),...mapGetters(['pond/pondsGetter'])},
    methods: {...mapActions(['getPonds'])},
 async mounted() {
     this.getPonds();
    console.log(this.getPonds)
    console.log(this.pondsGetter)
    },
 }

</script>