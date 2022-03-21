<template>
  <div class="editor">
    <!-- Side Header -->
    <Header @click="fetchData($event)"></Header>
    <!-- Sql Editor Section -->
    <div class="container">
      <h2 class="query-header">Select SQL Query</h2>
      <!-- PreDefine Query Controls -->
      <div class="query-controls">
        <div class="query-selection">
          <div class="radio">
            <input type="radio" v-model="query" value="0" />
            <h4>SQL TOP Clause</h4>
          </div>
          <div class="radio">
            <input type="radio" v-model="query" value="1" />
            <h4>SQL Order BY</h4>
          </div>
          <div class="radio">
            <input type="radio" v-model="query" value="2" />
            <h4>SQL Drop Table</h4>
          </div>
        </div>
        <input
          type="button"
          value="Run Query"
          @click="runQuery()"
          class="primary-button"
        />
      </div>
      <!-- Data Table & Query Result Data -->
      <div class="main-container">
        <div class="data-table">
          <div class="table-header">
            <div
              class="column"
              v-for="(item, key) in header"
              v-bind:key="'header-' + key"
            >
              <h4 class="table-heading">{{ item }}</h4>
            </div>
          </div>
          <div class="table-body">
            <div
              class="row"
              v-for="(row, key) in Object.values(content)"
              v-bind:key="'row-' + key"
            >
              <div
                class="table-body-content"
                v-for="(data, key) in row"
                v-bind:key="'row-' + key"
              >
                <h4>{{ data }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";

export default {
  name: "EditorView",
  components: {
    Header,
  },
  data() {
    return {
      dataTableName: "",
      header: [],
      content: [],
      query: "",
      dataEnum: {
        Categories: "fetchCategories",
        Customers: "fetchCustomers",
        Employees: "fetchEmployees",
        Orders: "fetchOrders",
        Products: "fetchProducts",
        Regions: "fetchRegions",
      },
      UID: {
        Categories: "categoryID",
        Customers: "customerID",
        Employees: "employeeID",
        Orders: "orderID",
        Products: "productID",
        Regions: "regionID",
      },
    };
  },
  computed: {
    ...mapGetters(["getData"]),
  },
  mounted() {
    // Initial Data Load (By Default Categories)
    this.$store.dispatch("fetchCategories").then(() => {
      this.content = this.getData.data;
      this.header = Object.keys(this.getData.data[0]);
      this.dataTableName = "Categories";
    });
  },
  methods: {
    // Change Data Table
    fetchData(arg) {
      this.$store.dispatch(this.dataEnum[arg]).then(() => {
        this.content = this.getData.data;
        this.header = Object.keys(this.getData.data[0]);
      });
      this.dataTableName = arg;
    },

    // Queries
    topClause() {
      this.content = this.getData.data.slice(0, 2);
    },

    orderBy() {
      this.content = this.getData.data.sort((a, b) =>
        a[this.UID[this.dataTableName]] > b[this.UID[this.dataTableName]]
          ? 1
          : b[this.UID[this.dataTableName]] > a[this.UID[this.dataTableName]]
          ? -1
          : 0
      );
    },

    dropData() {
      this.content = [];
      this.header = [];
    },

    // Run Query
    runQuery() {
      switch (this.query) {
        case "0":
          this.topClause();
          break;
        case "1":
          this.orderBy();
          break;
        case "2":
          this.dropData();
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
.editor {
  background: #f7f7f7;
  height: 100%;
  width: 100%;
  display: flex;
}
.container {
  flex: 4;
}
/* ---- Page Title ---- */
.query-header {
  margin: 20px;
}
/* ---- Query Controls ---- */
.query-controls {
  background: #ffffff;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 0 5px #ccc;
  padding: 15px 30px;
  max-width: 75vw;
}
.query-selection {
  display: flex;
  margin: 0 0 20px 0;
}
.radio {
  display: flex;
  align-items: flex-end;
}
.radio h4 {
  margin: 0 10px;
  font-weight: 600;
}
.radio input {
  height: 20px;
  width: 20px;
}
/* ---- Data Table ---- */
.main-container {
}
.data-table {
  background: #ffffff;
  max-width: 75vw;
  max-height: 60vh;
  margin: 10px 20px;
  border-radius: 15px;
  box-shadow: 0 0 5px #ccc;
  padding: 15px 0;
  overflow: auto;
}
.table-container {
  width: 100%;
}
.table-header {
  display: inline-flex;
  border-bottom: 1px solid #cccccc;
  padding: 10px 30px;
}
.column {
  width: 250px;
}
.table-heading {
  color: #acacac;
  text-transform: capitalize;
  text-align: left;
  font-size: 18px;
}
.table-body {
}
.row {
  padding: 0 30px;
  display: inline-flex;
}
.row:nth-child(odd) {
  background: #f7f7f7;
}
.table-body-content {
  word-break: break-word;
  margin: 10px 0;
  width: 250px;
}
.table-body-content h4 {
  font-size: 14px;
  font-weight: 500;
}

/* ---- Button ---- */
.primary-button {
  background: #060657;
  border-radius: 10px;
  border: 0;
  padding: 9px 30px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat";
  cursor: pointer;
}
.primary-button:active {
  background: #060657;
  border-radius: 10px;
  border: 0;
  padding: 9px 30px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat";
  cursor: pointer;
  transform: scale(0.98);
}
</style>
