import DataService from "../services/DataService";

const state = {
  data: "",
};

const getters = {
  // Get Data from State
  getData(state) {
    return state.data;
  },
};

const actions = {
  // Retrieve All JSON From Service
  fetchCategories({ commit }) {
    commit("setData", DataService.getCategories());
  },
  fetchCustomers({ commit }) {
    commit("setData", DataService.getCustomers());
  },
  fetchEmployees({ commit }) {
    commit("setData", DataService.getEmployees());
  },
  fetchOrders({ commit }) {
    commit("setData", DataService.getOrders());
  },
  fetchProducts({ commit }) {
    commit("setData", DataService.getProducts());
  },
  fetchRegions({ commit }) {
    commit("setData", DataService.getRegions());
  },
};

const mutations = {
  // Set Data Into State
  setData(state, response) {
    state.data = response;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
