import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "cart",
  initialState: {
    orderDetail: {},
    userOrders: [],
    adminOrders: [],
    loading: false,
    isOrderDeleted: false,
    isOrderUpdated: false,
  },
  reducers: {
    createOrderRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    createOrderSuccess(state, action) {
      return {
        ...state,
        loading: true,
        orderDetails: action.payload.order,
      };
    },
    createOrderFail(state, action) {
      return {
        ...state,
        loading: false,
        orderDetails: action.payload,
      };
    },
    clearError(state, action) {
      return {
        ...state,
        error: null,
      };
    },
    userOrderRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    userOrderSuccess(state, action) {
      return {
        ...state,
        loading: false,
        userOrders: action.payload.orders,
      };
    },
    userOrderFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    orderDetailsRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    orderDetailsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        orderDetail: action.payload.order,
      };
    },
    orderDetailsFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    adminOrdersRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    adminOrdersSuccess(state, action) {
      return {
        ...state,
        loading: false,
        adminOrders: action.payload.orders,
      };
    },
    adminOrdersFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    deleteOrderRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    deleteOrderSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isOrderDeleted: true,
      };
    },
    deleteOrderFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    updateOrderRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    updateOrderSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isOrderUpdated: true,
      };
    },
    updateOrderFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearOrderDeleted(state, action) {
      return {
        ...state,
        isOrderDeleted: false,
      };
    },
    clearOrderUpdated(state, action) {
      return {
        ...state,
        isOrderUpdated: false,
      };
    },
  },
});

const { actions, reducer } = orderSlice;

export const {
  createOrderRequest,
  createOrderFail,
  createOrderSuccess,
  clearError,
  userOrderRequest,
  userOrderSuccess,
  userOrderFail,
  orderDetailsRequest,
  orderDetailsSuccess,
  orderDetailsFail,
  adminOrdersRequest,
  adminOrdersSuccess,
  adminOrdersFail,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderFail,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderFail,
  clearOrderDeleted,
  clearOrderUpdated,
} = actions;

export default reducer;
