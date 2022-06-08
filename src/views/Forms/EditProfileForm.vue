<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Editar Usuario</h4>
        <p class="category">Edite los datos de usuario</p>
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
            <md-option value="Admin">Administrador</md-option>
            <md-option value="User">Biologo</md-option>
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
import {mapActions,mapGetters} from "vuex"
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
   computed:{...mapGetters(['getUsers',"getUserConfig"])},
  data() {
    return {
        userObj : {
      FirstName: null,
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
  async mounted() {
      let user = this.getUsers.filter( (user) => user.id == this.getUser )
      console.log(user,"el usuario",this.getUser)
      this.userObj = {
        FirstName: user[0].firstName,
        LastName: user[0].lastName,
        Username: user[0].username,
        Role: user[0].role
        }
    },
};
</script>
<style></style>
