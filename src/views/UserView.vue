/* eslint-disable */
<template>
  <div class="content">
    <div class="md-layout">
              <edit-profile-form data-background-color="green"> </edit-profile-form>
    </div>
    </div>
</template>

<script>
/* eslint-disable */
import {mapActions,mapState,mapGetters} from "vuex"
import EditProfileForm  from "./Forms/EditProfileForm.vue";


export default {
  components: {
    EditProfileForm
  },
 async mounted() {

    },
};
</script>
