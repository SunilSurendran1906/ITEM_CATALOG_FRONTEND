import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Image } from "react-bootstrap";
import { logout } from "../../actions/UserAction";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const { items: cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout);
  };
  return (
    <div>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to={"/"}>
              <img
                width="150px"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Croma_logo.png"
                alt="homepage"
              />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          {isAuthenticated ? (
            <Dropdown className="d-inline">
              <Dropdown.Toggle
                variant="default text-white pr-5"
                id="dropdown-basic"
              >
                <figure className="avatar avatar-nav ">
                  <Image
                    width="70px"
                    style={{
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                    src={
                      user.avatar ??
                      "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                    }
                  />
                </figure>
                <span className="logo-name">{user.name}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {user.role === "admin" && (
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/admin/dashboard");
                    }}
                    className="text-dark"
                  >
                    Dhashboard
                  </Dropdown.Item>
                )}
                <Dropdown.Item
                  onClick={() => {
                    navigate("/myprofile");
                  }}
                  className="text-danger"
                >
                  myprofile
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    navigate("/orders");
                  }}
                  className="text-danger"
                >
                  Orders
                </Dropdown.Item>
                <Dropdown.Item onClick={logoutHandler} className="text-danger">
                  logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link to="/login" className="btn" id="login_btn">
              Login
            </Link>
          )}
          <Link to="/cart">
            <span id="cart" className="ml-3">
              Cart
            </span>
          </Link>
          <span className="ml-1" id="cart_count">
            {cartItems.length}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
