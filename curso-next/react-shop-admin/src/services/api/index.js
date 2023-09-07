const { version } = require('react');

//llama a la api//
const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
    allProducts: `${API}/api/${VERSION}/products/`,
    allProducts: `${API}/api/${VERSION}/products`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/${VERSION}/products`,
    updateProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
    deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
  },
  users: {
    getUsersList: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
    postUser: `${API}/api/${VERSION}/users`,
  },
  categories: {
    getListCategories: `${API}/api/${VERSION}/categories?limit=5`,
    postCategory: `${API}/api/${VERSION}/categories/`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getProductCategory: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    postfile: `${API}/api/${VERSION}/files/upload/`,
    getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
