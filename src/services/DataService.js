import categories from "../json/categories.json";
import customers from "../json/customers.json";
import employees from "../json/employees.json";
import orders from "../json/orders.json";
import products from "../json/products.json";
import regions from "../json/regions.json";

export default {
  // Get Categories JSON
  getCategories() {
    return {
      data: categories,
    };
  },
  // Get Customers JSON
  getCustomers() {
    return {
      data: customers,
    };
  },
  // Get Employees JSON
  getEmployees() {
    return {
      data: employees,
    };
  },
  // Get Orders JSON
  getOrders() {
    return {
      data: orders,
    };
  },
  // Get Products JSON
  getProducts() {
    return {
      data: products,
    };
  },
  // Get Regions JSON
  getRegions() {
    return {
      data: regions,
    };
  },
};
