/* eslint-disable */
<template>
<div>
<div class="container" style="position: absolute;left:0; padding: 50px;">
  <md-table>
        <md-table-row>
          <md-table-head>Fecha</md-table-head>
          <md-table-head>Descripcion</md-table-head>
          <md-table-head>Movimiento</md-table-head>
          <md-table-head>Cantidad en KG.</md-table-head>
          <md-table-head>Costo</md-table-head>
          <md-table-head>Existencias</md-table-head>
        </md-table-row>
        <md-table-row>
          <md-table-cell>06/06/2022</md-table-cell>
          <md-table-cell>Alimento 1</md-table-cell>
          <md-table-cell>Entrada</md-table-cell>
          <md-table-cell>1000</md-table-cell>
          <md-table-cell>50000</md-table-cell>
          <md-table-cell>1000</md-table-cell>
        </md-table-row>
  </md-table>
</div>

<div style="background-color: dodgerblue; position: absolute;right:0;">
  <form>
    <p style="text-align:left ;"><label>Fecha</label></p>
    <input type="datetime-local"><br>
    <p style="text-align:left ;"><label>Descripcion</label></p>
    <input type="text"><br>
    <p style="text-align:left ;"><label>Movimiento</label></p>
    <select>
      <option>Entrada</option>
      <option>Salida</option>
    </select><br>
    <p style="text-align:left ;"><label>Cantidad</label></p>
    <input type="number"><br>
    <p style="text-align:left ;"><label>Costo</label></p>
    <input type="text"><br>
    <input type="submit" value="Registrar">

  </form>
</div>

</div>
</template>

<script>
/* eslint-disable */
import {mapActions,mapState,mapGetters} from "vuex"


export default {
  components: {
  },
 async mounted() {

    },
};
</script>