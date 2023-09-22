import axios from 'axios'
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  deleteProduct,
  updateProduct
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