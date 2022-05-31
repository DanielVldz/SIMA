/* eslint-disable */
<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >


  </div>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable,
} from "@/components";
import {mapActions,mapState,mapGetters} from "vuex"

export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
  },
  computed:{...mapState(['userForm'])},
};
</script>
