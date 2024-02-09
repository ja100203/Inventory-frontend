import React from "react";
import dashboard from "../../src/assets/icon/dashboard 1.png";
import inventory from "../assets/icon/inventory (2) 1.png";
import cart from "../assets/icon/cart.png";
import discount from "../assets/icon/discount (1).png";
import parcel from "../assets/icon/parcel.png";
import credit from "../assets/icon/credit-card.png";
import report from "../assets/icon/report (3) 1.png";
import setting from "../assets/icon/setting (1).png";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar p-2 py-md-3 @@cardClass">
        <div className="container-fluid">
          {/* sidebar: title*/}
          <div className="title-text d-flex align-items-center mb-4 mt-1">
            <h4 className="sidebar-title mb-0 flex-grow-1">
              <span className="sm-txt">O</span>
              <span>RIVE Admin</span>
            </h4>
            <div className="dropdown morphing scale-left">
              <a
                className="dropdown-toggle more-icon"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-ellipsis-h" />
              </a>
              <ul
                className="dropdown-menu shadow border-0 p-2 mt-2"
                data-bs-popper="none"
              >
                <li className="fw-bold px-2">Quick Actions</li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="landing/index.html"
                    aria-current="page"
                  >
                    Landing page
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="inventory/index.html">
                    Inventory
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="ecommerce/index.html">
                    eCommerce
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="hrms/index.html">
                    HRMS
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="account-invoices.html">
                    Invoices List
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="account-create-invoices.html"
                  >
                    Create Invoices
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* sidebar: Create new */}
          <div className="create-new py-3 mb-2">
            <div className="d-flex">
              <select className="form-select rounded-pill me-1">
                <option selected="">Select Project</option>
                <option value={1}>Luno University</option>
                <option value={2}>Book Manager</option>
                <option value={3}>Luno Sass App</option>
              </select>
              <button
                className="btn bg-primary text-white rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#CreateNew"
                type="button"
              >
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
          {/* sidebar: menu list */}
          <div className="main-menu flex-grow-1">
            <ul className="menu-list">
              <li className="divider py-2 lh-sm">
                <span className="small">MAIN</span>
                <br />{" "}
                <small className="text-muted">Unique dashboard designs </small>
              </li>
              <li className="collapsed">
                <a
                  className="m-link active"
                  data-bs-toggle="collapse"
                  data-bs-target="#my_dashboard"
                  href="#"
                >
                  <img src={dashboard} />
                  <span className="ms-2">My Dashboard</span>
                  <span className="arrow fa fa-angle-right ms-auto text-end" />
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu_dashboard"
                  href="#"
                >
                  <img src={inventory} />
                  <span className="ms-2">Inventory</span>
                  <span className="arrow fa fa-angle-right ms-auto text-end" />
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-Applications"
                  href="#"
                >
                  <img src={cart} />
                  <span className="ms-2">Purchase</span>
                  <span className="arrow fa fa-angle-right ms-auto text-end" />
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu_pages"
                  href="#"
                >
                  <img src={discount} />
                  <span className="ms-2">Sales</span>
                  <span className="arrow fa fa-angle-right ms-auto text-end" />
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-Account"
                  href="#"
                >
                  <img src={parcel} />
                  <span className="ms-2">Buyers & Suppliers</span>
                  <span className="arrow fa fa-angle-right ms-auto text-end" />
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-Authentication"
                  href="#"
                >
                  <img src={credit} />
                  <span className="ms-2">Payments</span>
                  <span className="arrow fa fa-angle-right ms-auto text-end" />
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-level0"
                  href="#"
                >
                  <img src={report} />
                  <span className="ms-2">Reports</span>
                  <span className="arrow fa fa-angle-right ms-auto text-end" />
                </a>
                {/* Menu: Sub menu ul */}
              </li>

              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-level0"
                  href="#"
                >
                  <img src={setting} />
                  <span className="ms-2">Account Solutions</span>
                  <span className="arrow fa fa-angle-right ms-auto text-end" />
                </a>
                {/* Menu: Sub menu ul */}
              </li>
            </ul>
          </div>
          {/* sidebar: footer link */}

          {/* sidebar: footer link */}
          <ul className="menu-list nav navbar-nav flex-row text-center menu-footer-link">
            <li className="nav-item flex-fill p-2">
              <a
                className="d-inline-block w-100 color-400"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#ScheduleModal"
                title="My Schedule"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="fill-secondary"
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                  <path
                    className="fill-secondary"
                    d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item flex-fill p-2">
              <a
                className="d-inline-block w-100 color-400"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#MynotesModal"
                title="My notes"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="fill-secondary"
                    d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"
                  />
                  <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
                </svg>
              </a>
            </li>
            <li className="nav-item flex-fill p-2">
              <a
                className="d-inline-block w-100 color-400"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#RecentChat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path
                    className="fill-secondary"
                    d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </a>
            </li>
            <li className="nav-item flex-fill p-2">
              <a
                className="d-inline-block w-100 color-400"
                href="auth-signin.html"
                title="sign-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.5 1v7h1V1h-1z" />
                  <path
                    className="fill-secondary"
                    d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
