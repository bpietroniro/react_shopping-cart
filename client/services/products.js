import axios from 'axios'
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  deleteProduct
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
  console.log(`url: ${deleteProduct(productId)}`)
  const { data } = await axios.delete(deleteProduct(productId))
  return data
}