import axios from "axios";
import {
  productsRequest,
  productsSuccess,
  productsFail,
  adminProductsRequest,
  adminProductsSuccess,
  adminProductsFail,
} from "../slices/ProductsSlice";
import {
  productSuccess,
  productFail,
  createReviewRequest,
  createReviewSuccess,
  createReviewFail,
  newProductRequest,
  newProductSuccess,
  newProductFail,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFail,
  updateProductRequest,
  updateProductFail,
  updateProductSuccess,
  productRequest,
  reviewsRequest,
  reviewsSuccess,
  reviewsFail,
  deleteReviewRequest,
  deleteReviewSuccess,
  deleteReviewFail,
} from "../slices/productSlice";

// use axios to get products
export const getProducts =
  (keyword, price, category, rating, currentPage) => async (dispatch) => {
    try {
      dispatch(productsRequest());
      let link = `/api/items/products?page=${currentPage}`;
      if (keyword) {
        link += `&keyword=${keyword}`;
      }
      if (price) {
        link += `&price[gte]=${price[0]}&price[lte]=${price[1]}`;
      }
      if (category) {
        link += `&category=${category}`;
      }
      if (rating) {
        link += `&ratings=${rating}`;
      }
      const { data } = await axios.get(link);
      dispatch(productsSuccess(data));
    } catch (error) {
      // handle error
      dispatch(productsFail(error.response.data.message));
    }
  };

// use axios to get products
export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch(productRequest());
    const { data } = await axios.get(`/api/items/product/${id}`);
    dispatch(productSuccess(data));

  } catch (error) {
    // handle error
    dispatch(productFail(error.response.data.message));
  }
};

export const createReview = (reviewData) => async (dispatch) => {
  try {
    dispatch(createReviewRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.put(`/api/items/review`, reviewData, config);
    dispatch(createReviewSuccess(data));
  } catch (error) {
    //handle error
    dispatch(createReviewFail(error.response.data.message));
  }
};
export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch(adminProductsRequest());
    const { data } = await axios.get("/api/items/admin/products");
    dispatch(adminProductsSuccess(data));
  } catch (error) {
    // Handle error
    dispatch(adminProductsFail(error.response.data.message));
  }
};

export const createNewProduct = (productData) => async (dispatch) => {
  try {
    dispatch(newProductRequest());
    const { data } = await axios.post(
      "/api/items/admin/product/new",
      productData
    );
    dispatch(newProductSuccess(data));
  } catch (error) {
    // Handle error
    dispatch(newProductFail(error.response.data.message));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(deleteProductRequest());
    const { data } = await axios.delete(`/api/items/admin/product/${id}`);
    dispatch(deleteProductSuccess(data));
  } catch (error) {
    // Handle error
    dispatch(deleteProductFail(error.response.data.message));
  }
};

export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch(updateProductRequest());
    const { data } = await axios.put(
      ` /api/items/admin/product/${id}`,
      productData
    );
    dispatch(updateProductSuccess(data));
  } catch (error) {
    // Handle error
    dispatch(updateProductFail(error.response.data.message));
  }
};

export const getReviews = (id) => async (dispatch) => {
  try {
    dispatch(reviewsRequest());
    const { data } = await axios.get(`/api/items/admin/reviews`, {
      params: { id },
    });
    dispatch(reviewsSuccess(data));
  } catch (error) {
    // handle error
    dispatch(reviewsFail(error.response.data.message));
  }
};

export const deleteReview = (productId, id) => async (dispatch) => {
  try {
    dispatch(deleteReviewRequest());
    await axios.delete(`/api/items/admin/review`, {
      params: { productId, id },
    });
    dispatch(deleteReviewSuccess());
  } catch (error) {
    // handle error
    dispatch(deleteReviewFail(error.response.data.message));
  }
};
