import { publicRequest, userRequest } from "../requestMethod";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get('/product')
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}

export const deleteProducts = async (id, dispatch) => {
    dispatch(deleteProductStart())
    try {
        // const res = await userRequest.get(`/product/${id}`)
        // dispatch(deleteProductSuccess(res.data))
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}

export const updateProducts = async (id, product, dispatch) => {
    dispatch(updateProductStart())
    try {
        dispatch(updateProductSuccess(id, product))
    } catch (error) {
        dispatch(updateProductFailure())
    }
}

export const addProducts = async (product, dispatch) => {
    dispatch(addProductStart())
    try {
        const res = await userRequest.post(`/product/`, product)
        dispatch(addProductSuccess(res.data))
    } catch (error) {
        dispatch(addProductFailure())
    }
}