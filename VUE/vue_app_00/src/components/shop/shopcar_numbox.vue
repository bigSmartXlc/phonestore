<template>
  <div>
    <div style="color: #333;height:25px" class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        :value="nowcount"
        readonly
        @change="getcount"
        ref="numbox"
      />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  props: ["nowcount", "goodsid"],
  data() {
    return {};
  },
  methods: {
    getcount() {
      this.$store.commit("addcount", {
        id: this.goodsid,
        count: this.$refs.numbox.value
      });
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  }
};
</script>