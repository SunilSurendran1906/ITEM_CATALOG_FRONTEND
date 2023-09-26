import {
  adminOrdersFail,
  adminOrdersRequest,
  adminOrdersSuccess,
  createOrderFail,
  createOrderRequest,
  createOrderSuccess,
  orderDetailsFail,
  orderDetailsRequest,
  orderDetailsSuccess,
  userOrderFail,
  userOrderRequest,
  userOrderSuccess,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderFail,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderFail,
} from "../slices/orderSlice";
import axios from "axios";
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch(createOrderRequest());
    const { data } = await axios.post("/api/v1/order/new", order);
    dispatch(createOrderSuccess(data));
  } catch (error) {
    dispatch(createOrderFail(error.response.data.message));
  }
};
export const userOrders = async (dispatch) => {
  try {
    dispatch(userOrderRequest());
    const { data } = await axios.get("/api/v1/myorders");
    dispatch(userOrderSuccess(data));
  } catch (error) {
    dispatch(userOrderFail(error.response.data.message));
  }
};
export const orderDetail = (id) => async (dispatch) => {
  try {
    dispatch(orderDetailsRequest());
    const { data } = await axios.get(`https://item-catalog-pqff.onrender.com/api/v1/order/${id}`);

    dispatch(orderDetailsSuccess(data));
  } catch (error) {
    dispatch(orderDetailsFail(error.response.data.message));
  }
};

export const adminOrders = async (dispatch) => {
  try {
    dispatch(adminOrdersRequest());
    const { data } = await axios.get("https://item-catalog-pqff.onrender.com/api/v1/admin/orders");
    dispatch(adminOrdersSuccess(data));
  } catch (error) {
    dispatch(adminOrdersFail(error.response.data.message));
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch(deleteOrderRequest());
    const { data } = await axios.delete(`https://item-catalog-pqff.onrender.com/api/v1/admin/order/${id}`);
    dispatch(deleteOrderSuccess(data));
  } catch (error) {
    dispatch(adminOrdersFail(error.response.data.message));
  }
};

export const updateOrder = (id, orderData) => async (dispatch) => {
  try {
    dispatch(updateOrderRequest());
    const { data } = await axios.put(`https://item-catalog-pqff.onrender.com/api/v1/admin/order/${id}`, orderData);
    dispatch(updateOrderSuccess(data));
  } catch (error) {
    dispatch(updateOrderFail(error.response.data.message));
  }
};
