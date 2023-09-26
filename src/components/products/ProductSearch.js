import React, { Fragment, useEffect, useState } from "react";
import MedaData from "../layouts/MedaData";
import { getProducts } from "../../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/Loader";
import Product from "../products/Product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

function ProductSearch(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );
  const [price, setPrice] = useState([1, 1000]);
  const [priceChanged, setPriceChanged] = useState(price);
  const [category, setcategory] = useState(null);
  const [rating, setRating] = useState(0);
  const categories = [
    "Electonics",
    "Mobile Phones",
    "Laptops",
    "Accessories",
    "Headphones",
    "Foods",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];
  const { keyword } = useParams();
  const setCurrentPageNo = (pageNo) => {
    setCurrentPage(pageNo);
  };
 
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      dispatch(
        getProducts(keyword, priceChanged, category, rating, currentPage)
      );
    }
  }, [error, dispatch, currentPage, keyword, priceChanged, category, rating]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MedaData title={"Buy Best Products"} />
          <h1 id="products_heading">Search Products</h1>
          <section id="products" className="container mt-5">
            <div className="row">
              <div className="col-6 col-md-3 mb-5 mt-5">
                {/**price Filter */}
                <div className="px-5" onMouseUp={() => setPriceChanged(price)}>
                  <Slider
                    range={true}
                    marks={{
                      1: "$1",
                      1000: "$1000",
                    }}
                    min={1}
                    max={1000}
                    defaultValue={price}
                    onChange={(price) => {
                      setPrice(price);
                    }}
                    handleRender={(renderProps) => {
                      return (
                        <Tooltip
                          overlay={`$${renderProps.props["aria-valuenow"]}`}
                        >
                          <div {...renderProps.props}></div>
                        </Tooltip>
                      );
                    }}
                  />
                </div>
                <hr className="my-5" />
                {/**Category Filter */}
                <div className="mt-5">
                  <h3 className="mb-3">Categories</h3>
                  <ul className="pl-0">
                    {categories.map((category) => (
                      <li
                        style={{ cursor: "pointer", listStyleType: "none" }}
                        key={category}
                        onClick={() => {
                          setcategory(category);
                        }}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="my-5" />
                {/** Ratings Filter */}
                <div className="mt-5">
                  <h4 className="mb-3">Ratings</h4>
                  <ul className="pl-0">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <li
                        style={{ cursor: "pointer", listStyleType: "none" }}
                        key={star}
                        onClick={() => {
                          setRating(star);
                        }}
                      >
                        <div className="rating-outer">
                          <div
                            className="rating-inner"
                            style={{
                              width: `${star * 20}%`,
                            }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-9 ">
                <div className="row">
                  {products &&
                    products.map((product) => (
                      <Product col={4} key={product._id} product={product} />
                    ))}
                </div>
              </div>
            </div>
          </section>
          {productsCount > 0 && productsCount > resPerPage ? (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                onChange={setCurrentPageNo}
                totalItemsCount={productsCount}
                itemsCountPerPage={resPerPage}
                nextPageText={"Next"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass={"page-item"}
                linkClass={"page-link"}
              />
            </div>
          ) : null}
        </Fragment>
      )}
    </Fragment>
  );
}

export default ProductSearch;