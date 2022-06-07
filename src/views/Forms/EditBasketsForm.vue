<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Editar Canastilla</h4>
        <p class="category">Edite los datos de canastilla</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nombre de Canastilla</label>
              <md-input v-model="userObj.Username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Estatus de canastilla</label>
              <md-input v-model="userObj.Password" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click= "handleSubmit">Guardar</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "edit-baskets-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
        basketObj : {
      BasketName: null,
      LastName: null,
      Username: null,
      Password: null,
      Role: null,
        }
    };
  },
  methods : {
     ...mapActions(['CreateUsers']),
    handleSubmit (){
      console.log(this.user)
    this.CreateUsers(this.userObj)
    }
  },
};
</script>
<style></style>
