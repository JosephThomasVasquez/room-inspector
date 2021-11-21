import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid p-2">
        <Link to={"/"} className="navbar-brand ms-4 fs-3" href="#">
          Room Inspector
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mt-2">
              <Link to={"/"} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link to={"/rooms/checklist"} className="nav-link" href="#">
                <i className="bi bi-clipboard-check"></i> Checklist
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link to={"/supplies/list"} className="nav-link" href="#">
                <i className="bi bi-basket"></i> Supplies
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-gear-fill fs-3"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to={"/rooms/new"} className="dropdown-item" href="#">
                    <i className="bi bi-plus-circle"></i> Add Room
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/buildings/new"}
                    className="dropdown-item"
                    href="#"
                  >
                    <i className="bi bi-building"></i> Add Building
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/building/response-options"}
                    className="dropdown-item"
                    href="#"
                  >
                    <i className="bi bi-list-check"></i> Response Options
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-sliders"></i> Settings
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex me-4 mx-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search rooms..."
              aria-label="Search"
            />
            <button className="btn btn-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
