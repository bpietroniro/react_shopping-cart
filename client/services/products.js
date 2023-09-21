import axios from 'axios'
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  DELETE
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
  const { data } = await axios.delete(DELETE(productId))
  return data
}