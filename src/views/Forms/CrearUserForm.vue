<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Crear Usuario</h4>
        <p class="category">Registre los datos de usuario</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Usuario</label>
              <md-input v-model="userObj.Username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Contraseña</label>
              <md-input v-model="userObj.Password" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nombre</label>
              <md-input v-model="userObj.FirstName" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Apellido</label>
              <md-input v-model="userObj.LastName" type="text"></md-input>
            </md-field>
          </div>
      <div class="md-layout-item">
        <md-field>
          <label for="movie">Role</label>
          <md-select v-model="userObj.Role" name="role" id="role">
            <md-option value=0>Administrador</md-option>
            <md-option value=1>Biologo</md-option>
          </md-select>
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
  name: "crear-user-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
        userObj : {
      FirstName: "kike",
      LastName: "mentiras",
      Username: "kike",
      Password: "12345678",
      Role: 0,
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
