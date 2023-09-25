import axios from 'axios'
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  deleteProduct,
  updateProduct,
  GET_CART_ITEMS,
  ADD_TO_CART,
  CHECKOUT,
} from "../constants/routes"

export const getProducts = async () => {
  const { data } = await axios.get(GET_PRODUCTS)
  return data;
}

export const createProduct = async (newProduct) => {
  const { data } = await axios.post(CREATE_PRODUCT, { ...newProduct })
  return data
}

export const deleteProductById = async (productId) => {
  const { data } = await axios.delete(deleteProduct(productId))
  return data
}

export const updateProductById = async (productId, updatedProduct) => {
  const { data } = await axios.put(updateProduct(productId), { ...updatedProduct })
  return data 
}

export const getCart = async () => {
  const { data } = await axios.get(GET_CART_ITEMS)
  return data
}

export const addItemToCart = async (productId) => {
  const { data } = await axios.post(ADD_TO_CART, { productId })
  return data
}

export const checkout = async () => {
  const { data } = await axios.post(CHECKOUT)
  return data
}