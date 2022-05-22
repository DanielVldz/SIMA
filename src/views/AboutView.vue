<template>
  <div ref="about" id="about">
    <h1>This is an about page</h1>
    <custom-crud/>
  </div>
</template>

<script>




export default {
  name: 'AboutView',
methods:{
  callback(){
    return "<h1>is updating</h1>"
  }
},
 mounted() {
     let doc =document.getElementById('#about');
     console.log(doc)
    },
 }

</script>