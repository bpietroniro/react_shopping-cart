export const GET_PRODUCTS = "http://localhost:5001/api/products";
export const CREATE_PRODUCT = "http://localhost:5001/api/products";
export const deleteProduct = (productId) => `http://localhost:5001/api/products/${productId}`;
export const updateProduct = (productId) => `http://localhost:5001/api/products/${productId}`;
export const GET_CART_ITEMS = "http://localhost:5001/api/cart";
export const ADD_TO_CART = "http://localhost:5001/api/add-to-cart";
export const CHECKOUT = "http://localhost:5001/api/checkout";