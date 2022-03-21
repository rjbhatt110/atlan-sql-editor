<template>
  <div class="header">
    <!-- Logo -->
    <h1>SQL Editor</h1>
    <!-- Data Tables List -->
    <div class="data-list">
      <template v-for="(item, index) in dataList">
        <div
          :key="index"
          :class="item === activeMenu ? 'data-card-active' : 'data-card'"
          @click="showData(item)"
        >
          <img src="@/assets/database.png" alt="database" />
          <h4>{{ item }}</h4>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header-vue",
  data: () => ({
    dataList: [
      "Categories",
      "Customers",
      "Employees",
      "Orders",
      "Products",
      "Regions",
    ],
    activeMenu: "Categories",
  }),
  mounted() {},
  methods: {
    showData(data) {
      this.activeMenu = data;
      this.$emit("click", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ---- Header ----*/
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #060657;
  box-shadow: 0 0 5px #ccc;
  flex-direction: column;
  flex: 1;
}
.header h1 {
  font-size: 24px;
  color: #ffffff;
  padding: 20px;
}

/* ---- Data Table List ---- */
.data-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
}
.data-card {
  margin: 10px;
  display: flex;
  align-items: center;
  padding: 12px 60px 12px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.data-card-active {
  margin: 10px;
  display: flex;
  align-items: center;
  padding: 12px 60px 12px 20px;
  background-color: rgb(255 255 255 / 15%);
  border-radius: 5px;
  cursor: pointer;
}
.data-card img {
  width: 25px;
}
.data-card h4 {
  color: #ffffff;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
}
.data-card-active img {
  width: 25px;
}
.data-card-active h4 {
  color: #ffffff;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
}
</style>
