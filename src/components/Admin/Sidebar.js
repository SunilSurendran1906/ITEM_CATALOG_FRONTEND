import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
function Sidebar(props) {
  const Navigate = useNavigate();
  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/admin/dashboard">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>
          <NavDropdown title={<i class="fa fa-product-hunt">Product</i>}>
            <NavDropdown.Item onClick={() => Navigate("/admin/products")}>
              <i className="fa fa-shopping-basket">All</i>
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => Navigate("/admin/product/create")}>
              <i className="fa fa-plus">Create</i>
            </NavDropdown.Item>
          </NavDropdown>
          <li></li>

          <li>
            <Link to="/admin/orders">
              <i className="fa fa-shopping-basket"></i> Orders
            </Link>
          </li>

          <li>
            <Link to="/admin/users">
              <i className="fa fa-users"></i> Users
            </Link>
          </li>
          <li>
            <Link to="/admin/reviews">
              <i className="fa fa-users"></i> Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
