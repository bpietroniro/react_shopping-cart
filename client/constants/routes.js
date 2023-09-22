export const GET_PRODUCTS = "http://localhost:5001/api/products";
export const CREATE_PRODUCT = "http://localhost:5001/api/products";
export const deleteProduct = (productId) => `http://localhost:5001/api/products/${productId}`;
export const updateProduct = (productId) => `http://localhost:5001/api/products/${productId}`;