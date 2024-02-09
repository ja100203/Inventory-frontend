import React, { useEffect, useState } from "react";
import stock from "../../assets/now-in-stock.png";
import expense from "../../assets/expense.png";
import revenue from "../../assets/revenue.png";
import customer from "../../assets/customer.png";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import "../../Styles.css";
import { Bars } from "react-loader-spinner";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Bars
            height="80"
            width="80"
            color="#40a1ed"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="layout-1" s>
          <SideBar />
          {/* start: body area */}
          <div className="wrapper">
            {/* start: page header */}
            <NavBar />
            {/* start: page toolbar */}
            <div className="page-toolbar px-xl-4 px-sm-2 px-0 py-3">
              <div className="container-fluid">
                <div className="row g-3 mb-3 align-items-center">
                  <div className="col">
                    <ol className="breadcrumb bg-transparent mb-0">
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Dashboard
                      </li>
                    </ol>
                  </div>
                </div>{" "}
                {/* .row end */}
                <div className="row align-items-center">
                  <div className="col">
                    <h1 className="fs-5 color-900 mt-1 mb-0">
                      Welcome back, Praveen!
                    </h1>
                    <small className="text-muted">
                      You have 12 new messages and 7 new notifications.
                    </small>
                  </div>
                  <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-12 mt-2 mt-md-0">
                    {/* daterange picker */}
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        name="daterange"
                      />
                      <button
                        className="btn btn-secondary"
                        type="button"
                        data-bs-toggle="tooltip"
                        title="Send Report"
                      >
                        <i className="fa fa-envelope" />
                      </button>
                      <button
                        className="btn btn-secondary"
                        type="button"
                        data-bs-toggle="tooltip"
                        title="Download Reports"
                      >
                        <i className="fa fa-download" />
                      </button>
                      <button
                        className="btn btn-secondary"
                        type="button"
                        data-bs-toggle="tooltip"
                        title="Generate PDF"
                      >
                        <i className="fa fa-file-pdf-o" />
                      </button>
                      <button
                        className="btn btn-secondary"
                        type="button"
                        data-bs-toggle="tooltip"
                        title="Share Dashboard"
                      >
                        <i className="fa fa-share-alt" />
                      </button>
                    </div>
                    {/* Plugin Js */}
                    {/* Jquery Page Js */}
                  </div>
                </div>{" "}
                {/* .row end */}
              </div>
            </div>
            {/* start: page body */}
            <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
              <div className="container-fluid">
                <div className="row g-3 row-deck">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card overflow-hidden">
                      <div className="card-body">
                        <img className="card-icon" src={stock} />
                        <div className="mb-2 text-uppercase">NEW STOCK</div>
                        <div>
                          <span className="h4">51</span>{" "}
                          <span className="small text-muted">
                            <i className="fa fa-level-up" /> 13%
                          </span>
                        </div>
                        <small className="text-muted">
                          Analytics for last week
                        </small>
                      </div>
                      <div className="progress" style={{ height: 4 }}>
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={85}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card overflow-hidden">
                      <div className="card-body">
                        <img className="card-icon" src={expense} />
                        <div className="mb-2 text-uppercase">EXPENSE</div>
                        <div>
                          <span className="h4">$3,251</span>{" "}
                          <span className="small text-muted">
                            <i className="fa fa-level-up" /> 13%
                          </span>
                        </div>
                        <small className="text-muted">
                          Analytics for last week
                        </small>
                      </div>
                      <div className="progress" style={{ height: 4 }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "13%" }}
                          aria-valuenow={13}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card overflow-hidden">
                      <div className="card-body">
                        <img className="card-icon" src={revenue} />
                        <div className="mb-2 text-uppercase">Revenue</div>
                        <div>
                          <span className="h4">$18,925</span>{" "}
                          <span className="small text-muted">
                            <i className="fa fa-level-up" /> 78%
                          </span>
                        </div>
                        <small className="text-muted">
                          Analytics for last week
                        </small>
                      </div>
                      <div className="progress" style={{ height: 4 }}>
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "78%" }}
                          aria-valuenow={78}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card overflow-hidden">
                      <div className="card-body">
                        <img className="card-icon" src={customer} />
                        <div className="mb-2 text-uppercase">CUSTOMERS</div>
                        <div>
                          <span className="h4">125</span>{" "}
                          <span className="small text-muted">
                            <i className="fa fa-level-up" /> 55%
                          </span>
                        </div>
                        <small className="text-muted">
                          Analytics for last week
                        </small>
                      </div>
                      <div className="progress" style={{ height: 4 }}>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={78}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12">
                    <div className="card text-center bg-primary-gradient">
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <div>
                          <h4 className="mt-4">Welcome Back, Chris!!</h4>
                          <p className="card-text fs-6 mb-5">
                            <strong>Need help?</strong> Check out the
                            documentation of Luno Admin. It includes tons of{" "}
                            <strong>Widgets</strong>,{" "}
                            <strong>Components</strong>, and Elements with{" "}
                            <strong>easy-to-follow</strong> documentation.
                          </p>
                          <a
                            className="btn btn-lg bg-white text-uppercase px-4 lift"
                            href="docs/index.html"
                            title=""
                          >
                            Visit Documentation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-8 col-lg-8">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="card-title m-0">LUNO Revenue</h6>
                        {/* widgest: Card more action icon */}
                        <div className="dropdown morphing scale-left">
                          <a
                            href="#"
                            className="card-fullscreen"
                            data-bs-toggle="tooltip"
                            title="Card Full-Screen"
                          >
                            <i className="icon-size-fullscreen" />
                          </a>
                          <a
                            href="#"
                            className="more-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-h" />
                          </a>
                          <ul className="dropdown-menu shadow border-0 p-2">
                            <li>
                              <a className="dropdown-item" href="#">
                                File Info
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Copy to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Move to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Block
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="apex-AudienceOverview" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="card-title mb-0">Sales by Category</h6>
                        {/* widgest: Card more action icon */}
                        <div className="dropdown morphing scale-left">
                          <a
                            href="#"
                            className="card-fullscreen"
                            data-bs-toggle="tooltip"
                            title="Card Full-Screen"
                          >
                            <i className="icon-size-fullscreen" />
                          </a>
                          <a
                            href="#"
                            className="more-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-h" />
                          </a>
                          <ul className="dropdown-menu shadow border-0 p-2">
                            <li>
                              <a className="dropdown-item" href="#">
                                File Info
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Copy to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Move to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Block
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="apex-SalesbyCategory" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="card-title mb-0">My Wallet</h6>
                        {/* widgest: Card more action icon */}
                        <div className="dropdown morphing scale-left">
                          <a
                            href="#"
                            className="card-fullscreen"
                            data-bs-toggle="tooltip"
                            title="Card Full-Screen"
                          >
                            <i className="icon-size-fullscreen" />
                          </a>
                          <a
                            href="#"
                            className="more-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-h" />
                          </a>
                          <ul className="dropdown-menu shadow border-0 p-2">
                            <li>
                              <a className="dropdown-item" href="#">
                                File Info
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Copy to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Move to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Block
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <div>
                          Available BTC{" "}
                          <a href="crypto/index.html">View Account</a>
                        </div>
                        <h3>0.0386245 BTC</h3>
                        <div className="py-4">
                          <div className="text-uppercase text-muted small">
                            Buy this month
                          </div>
                          <h5>3.0675432 BTC</h5>
                          <div className="mt-3 text-uppercase text-muted small">
                            Sell this month
                          </div>
                          <h5>2.0345618 BTC</h5>
                        </div>
                        <div className="btn-group d-flex">
                          <input
                            type="radio"
                            className="btn-check"
                            name="gm-btnradio"
                            id="gm-btnradio1"
                            defaultChecked=""
                          />
                          <label
                            className="btn btn-outline-secondary"
                            htmlFor="gm-btnradio1"
                          >
                            Buy
                          </label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="gm-btnradio"
                            id="gm-btnradio2"
                          />
                          <label
                            className="btn btn-outline-secondary"
                            htmlFor="gm-btnradio2"
                          >
                            Sell
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="card-title mb-0">Downloads</h6>
                        {/* widgest: Card more action icon */}
                        <div className="dropdown morphing scale-left">
                          <a
                            href="#"
                            className="card-fullscreen"
                            data-bs-toggle="tooltip"
                            title="Card Full-Screen"
                          >
                            <i className="icon-size-fullscreen" />
                          </a>
                          <a
                            href="#"
                            className="more-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-h" />
                          </a>
                          <ul className="dropdown-menu shadow border-0 p-2">
                            <li>
                              <a className="dropdown-item" href="#">
                                File Info
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Copy to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Move to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Block
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li className="d-flex py-2 mb-2">
                            <div className="avatar rounded no-thumbnail">
                              <i className="fa fa-file-zip-o fa-lg" />
                            </div>
                            <div className="flex-fill ms-3">
                              <span>LUNO_admin.zip</span>
                              <div
                                className="progress mt-2"
                                style={{ height: 5 }}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "44%" }}
                                  aria-valuenow={44}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </li>
                          <li className="d-flex py-2 mb-2">
                            <div className="avatar rounded no-thumbnail">
                              <i className="fa fa-file-pdf-o fa-lg" />
                            </div>
                            <div className="flex-fill ms-3">
                              <span>reposrt_2020.pdf</span>
                              <div
                                className="progress mt-2"
                                style={{ height: 5 }}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </li>
                          <li className="d-flex py-2 mb-2">
                            <div className="avatar rounded no-thumbnail">
                              <i className="fa fa-file-code-o fa-lg" />
                            </div>
                            <div className="flex-fill ms-3">
                              <span>package.json</span>
                              <div
                                className="progress mt-2"
                                style={{ height: 5 }}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "10%" }}
                                  aria-valuenow={10}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </li>
                          <li className="d-flex py-2 mb-2">
                            <div className="avatar rounded no-thumbnail">
                              <i className="fa fa-file-code-o fa-lg" />
                            </div>
                            <div className="flex-fill ms-3">
                              <span>bootstrap.min.css</span>
                              <div
                                className="progress mt-2"
                                style={{ height: 5 }}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "89%" }}
                                  aria-valuenow={89}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                        <small className="text-muted">
                          Showing 4 out of 24 downloads.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <h6 className="card-title m-0">Reports overview</h6>
                        {/* widgest: Card more action icon */}
                        <div className="dropdown morphing scale-left">
                          <a
                            href="#"
                            className="card-fullscreen"
                            data-bs-toggle="tooltip"
                            title="Card Full-Screen"
                          >
                            <i className="icon-size-fullscreen" />
                          </a>
                          <a
                            href="#"
                            className="more-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-h" />
                          </a>
                          <ul className="dropdown-menu shadow border-0 p-2">
                            <li>
                              <a className="dropdown-item" href="#">
                                File Info
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Copy to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Move to
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Rename
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Block
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3>$7,431.14 USD</h3>
                        {/* Progress */}
                        <div
                          className="progress rounded-pill mb-2"
                          style={{ height: 5 }}
                        >
                          <div
                            className="progress-bar chart-color1"
                            role="progressbar"
                            style={{ width: "15%" }}
                            aria-valuenow={15}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <div
                            className="progress-bar chart-color2"
                            role="progressbar"
                            style={{ width: "30%" }}
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <div
                            className="progress-bar chart-color3"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow={20}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>0%</span>
                          <span>100%</span>
                        </div>
                      </div>
                      <div className="table-responsive border-top">
                        <table className="table card-table table-nowrap mb-0">
                          <tbody>
                            <tr>
                              <td>
                                <i className="fa fa-circle me-2 chart-text-color1" />
                                Gross value
                              </td>
                              <td>$3,500.71</td>
                              <td>
                                <span className="badge bg-success">+12.1%</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fa fa-circle me-2 chart-text-color2" />
                                Net volume from sales
                              </td>
                              <td>$2,980.45</td>
                              <td>
                                <span className="badge bg-warning">+6.9%</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fa fa-circle me-2 chart-text-color3" />
                                New volume from sales
                              </td>
                              <td>$950.00</td>
                              <td>
                                <span className="badge bg-danger">-1.5%</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i className="fa fa-circle me-2" />
                                Other
                              </td>
                              <td>32</td>
                              <td>
                                <span className="badge bg-success">1.9%</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* .row end */}
              </div>
            </div>
            {/* start: page footer */}
            <footer className="page-footer px-xl-4 px-sm-2 px-0 py-3">
              <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
                <p className="col-md-4 mb-0 text-muted">
                  © 2023{" "}
                  <a
                    href="https://www.thememakker.com/"
                    target="_blank"
                    title="ThemeMakker Infotech LLP"
                  >
                    ThemeMakker
                  </a>
                  , All Rights Reserved.
                </p>
                <a
                  href="#"
                  className="col-md-4 d-flex align-items-center justify-content-center my-3 my-lg-0 me-lg-auto"
                >
                  <svg
                    height={18}
                    viewBox="0 0 67 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-muted"
                      d="M0.863281 18.9997V1.14968H3.11328V16.9997H10.9133V18.9997H0.863281Z"
                    />
                    <path
                      className="fill-muted"
                      d="M27.3045 12.6997C27.3045 13.933 27.0545 15.0497 26.5545 16.0497C26.0545 17.033 25.2878 17.8163 24.2545 18.3997C23.2378 18.9663 21.9378 19.2497 20.3545 19.2497C18.1378 19.2497 16.4462 18.6497 15.2795 17.4497C14.1295 16.233 13.5545 14.633 13.5545 12.6497V1.14968H15.8045V12.7247C15.8045 14.1747 16.1878 15.2997 16.9545 16.0997C17.7378 16.8997 18.9128 17.2997 20.4795 17.2997C21.5628 17.2997 22.4378 17.108 23.1045 16.7247C23.7878 16.3247 24.2878 15.783 24.6045 15.0997C24.9212 14.3997 25.0795 13.5997 25.0795 12.6997V1.14968H27.3045V12.6997Z"
                    />
                    <path
                      className="fill-secondary"
                      d="M46.5286 0.765681C46.6246 0.82568 46.6726 0.92168 46.6726 1.05368L46.5466 18.6037C46.5466 18.8677 46.3906 18.9937 46.0786 18.9817H44.4586L33.1546 3.62768L33.1006 13.1677L37.5646 13.1857C37.6726 13.1857 37.7626 13.2217 37.8346 13.2937C37.9186 13.3657 37.9606 13.4617 37.9606 13.5817L37.9426 14.8957C37.9426 15.0157 37.9066 15.1237 37.8346 15.2197C37.7626 15.3037 37.6666 15.3457 37.5466 15.3457L31.3726 15.2917H31.3546C31.1026 15.2917 30.9706 15.1837 30.9586 14.9677L31.0666 0.98168C31.0666 0.849679 31.1026 0.74768 31.1746 0.675681C31.2586 0.59168 31.3666 0.555679 31.4986 0.56768H33.1726C33.3406 0.56768 33.4726 0.63368 33.5686 0.765681L44.4406 15.4177L44.5486 0.94568C44.5966 0.741679 44.7286 0.639679 44.9446 0.639679L46.2046 0.65768C46.3126 0.65768 46.4206 0.69368 46.5286 0.765681ZM39.7786 16.7857C39.8986 16.7977 39.9946 16.8397 40.0666 16.9117C40.1386 16.9717 40.1746 17.0677 40.1746 17.1997L40.1566 18.4957C40.1566 18.6157 40.1206 18.7237 40.0486 18.8197C39.9886 18.9037 39.8926 18.9457 39.7606 18.9457H31.3546C31.2346 18.9457 31.1386 18.9097 31.0666 18.8377C30.9946 18.7657 30.9586 18.6697 30.9586 18.5497V17.2357C30.9586 17.1157 30.9946 17.0137 31.0666 16.9297C31.1386 16.8337 31.2406 16.7857 31.3726 16.7857H35.5666C38.0266 16.7857 39.4306 16.7857 39.7786 16.7857Z"
                    />
                    <path
                      className="fill-muted"
                      d="M66.0301 10.0497C66.0301 11.433 65.8551 12.6913 65.5051 13.8247C65.1551 14.9413 64.6301 15.908 63.9301 16.7247C63.2467 17.5413 62.3884 18.1663 61.3551 18.5997C60.3384 19.033 59.1551 19.2497 57.8051 19.2497C56.4051 19.2497 55.1884 19.033 54.1551 18.5997C53.1217 18.1497 52.2634 17.5247 51.5801 16.7247C50.8967 15.908 50.3884 14.933 50.0551 13.7997C49.7217 12.6663 49.5551 11.408 49.5551 10.0247C49.5551 8.19135 49.8551 6.59135 50.4551 5.22468C51.0551 3.85801 51.9634 2.79135 53.1801 2.02468C54.4134 1.25801 55.9634 0.87468 57.8301 0.87468C59.6134 0.87468 61.1134 1.25801 62.3301 2.02468C63.5467 2.77468 64.4634 3.84135 65.0801 5.22468C65.7134 6.59135 66.0301 8.19968 66.0301 10.0497ZM51.9301 10.0497C51.9301 11.5497 52.1384 12.8413 52.5551 13.9247C52.9717 15.008 53.6134 15.8413 54.4801 16.4247C55.3634 17.008 56.4717 17.2997 57.8051 17.2997C59.1551 17.2997 60.2551 17.008 61.1051 16.4247C61.9717 15.8413 62.6134 15.008 63.0301 13.9247C63.4467 12.8413 63.6551 11.5497 63.6551 10.0497C63.6551 7.79968 63.1884 6.04135 62.2551 4.77468C61.3217 3.49135 59.8467 2.84968 57.8301 2.84968C56.4801 2.84968 55.3634 3.14135 54.4801 3.72468C53.6134 4.29135 52.9717 5.11635 52.5551 6.19968C52.1384 7.26635 51.9301 8.54968 51.9301 10.0497Z"
                    />
                  </svg>
                </a>
                <ul className="nav col-md-4 justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    <a
                      href="https://themeforest.net/user/wrraptheme/portfolio"
                      target="_blank"
                      className="nav-link px-2 text-muted"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://themeforest.net/licenses/standard"
                      target="_blank"
                      className="nav-link px-2 text-muted"
                    >
                      licenses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://help.market.envato.com/hc/en-us"
                      target="_blank"
                      className="nav-link px-2 text-muted"
                    >
                      Support
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://themeforest.net/licenses/faq"
                      target="_blank"
                      className="nav-link px-2 text-muted"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
          {/* Modal: Create project */}
          <div className="modal fade" id="CreateNew" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-vertical modal-dialog-scrollable">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title">Setup new project</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="progress bg-transparent" style={{ height: 3 }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    aria-valuenow={1}
                    aria-valuemin={1}
                    aria-valuemax={5}
                    style={{ width: "20%" }}
                  />
                </div>
                <div className="modal-body custom_scroll">
                  <ul
                    className="nav nav-tabs tab-card border-0 fs-6"
                    role="tablist"
                  >
                    <li className="nav-item flex-fill text-center">
                      <a
                        className="nav-link active"
                        href="#step1"
                        data-bs-toggle="tab"
                        data-bs-step={1}
                      >
                        1. Project
                      </a>
                    </li>
                    <li className="nav-item flex-fill text-center">
                      <a
                        className="nav-link"
                        href="#step2"
                        data-bs-toggle="tab"
                        data-bs-step={3}
                      >
                        2. Team
                      </a>
                    </li>
                    <li className="nav-item flex-fill text-center">
                      <a
                        className="nav-link"
                        href="#step3"
                        data-bs-toggle="tab"
                        data-bs-step={4}
                      >
                        3. File
                      </a>
                    </li>
                    <li className="nav-item flex-fill text-center">
                      <a
                        className="nav-link"
                        href="#step4"
                        data-bs-toggle="tab"
                        data-bs-step={5}
                      >
                        4. Completed
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="step1">
                      <div className="card mb-2">
                        <div className="card-body">
                          <h6 className="card-title mb-1">Project Type</h6>
                          <p className="text-muted small">
                            If you need more info, please check out{" "}
                            <a href="#">FAQ Page</a>
                          </p>
                          {/* Custome redio input */}
                          <div className="c_radio d-flex flex-md-wrap">
                            <label className="m-1 w-100" htmlFor="Personal">
                              <input
                                type="radio"
                                name="plan"
                                id="Personal"
                                defaultChecked=""
                              />
                              <span className="card">
                                <span className="card-body d-flex p-3">
                                  <svg className="avatar" viewBox="0 0 16 16">
                                    <path
                                      className="fill-muted"
                                      d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                    />
                                  </svg>
                                  <span className="ms-3">
                                    <span className="h6 d-flex mb-1">
                                      Personal Project
                                    </span>
                                    <span className="text-muted">
                                      For smaller business, with simple salaries
                                      and pay schedules.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </label>
                            <label className="m-1 w-100" htmlFor="Team">
                              <input type="radio" name="plan" id="Team" />
                              <span className="card">
                                <span className="card-body d-flex p-3">
                                  <svg className="avatar" viewBox="0 0 16 16">
                                    <path
                                      className="fill-muted"
                                      d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                    />
                                    <path
                                      className="fill-muted"
                                      fillRule="evenodd"
                                      d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                                    />
                                    <path
                                      className="fill-muted"
                                      d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                                    />
                                  </svg>
                                  <span className="ms-3">
                                    <span className="h6 d-flex mb-1">
                                      Team Project
                                    </span>
                                    <span className="text-muted">
                                      For growing business who wants to create a
                                      rewarding place to work.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-2">
                        <div className="card-body">
                          <h6 className="card-title mb-1">Project Details</h6>
                          <p className="text-muted small">
                            It is a long established fact that a reader will be
                            distracted by Luno.
                          </p>
                          <div className="form-floating mb-2">
                            <select className="form-select">
                              <option selected="">Open this select menu</option>
                              <option value={1}>Lucid</option>
                              <option value={2}>LUNO</option>
                              <option value={3}>Luno</option>
                            </select>
                            <label>Choose a Customer *</label>
                          </div>
                          <div className="form-floating mb-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Project name"
                            />
                            <label>Project name *</label>
                          </div>
                          <div className="form-floating mb-2">
                            <textarea
                              className="form-control"
                              placeholder="Add project details"
                              style={{ height: 100 }}
                              defaultValue={""}
                            />
                            <label>Add project details</label>
                          </div>
                          <div className="form-floating mb-2">
                            <input type="date" className="form-control" />
                            <label>Enter release Date *</label>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div className="text-muted">
                              Allow Notifications *
                            </div>
                            <div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="allow_phone"
                                  defaultValue="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="allow_phone"
                                >
                                  Phone
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="allow_email"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="allow_email"
                                >
                                  Email
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-lg bg-secondary text-light next text-uppercase">
                          Add People
                        </button>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="step2">
                      <div className="card mb-3">
                        <div className="card-body">
                          <h6 className="card-title mb-1">Build a Team</h6>
                          <p className="text-muted small">
                            If you need more info, please check out{" "}
                            <a href="#">Project Guidelines</a>
                          </p>
                          <div className="form-floating mb-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Invite Teammates"
                            />
                            <label>Invite Teammates</label>
                          </div>
                          <h6 className="card-title mb-1">Team Members</h6>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="list-group6"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label text-muted"
                              htmlFor="list-group6"
                            >
                              Adding Users by Team Members
                            </label>
                          </div>
                        </div>
                        <ul
                          className="list-group list-group-flush list-group-custom custom_scroll mb-0"
                          style={{ height: 300 }}
                        >
                          <li className="list-group-item d-flex align-items-center">
                            <img
                              className="avatar rounded"
                              src="assets/img/xs/avatar1.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <div className="h6 mb-0">Chris Fox</div>
                              <small className="text-muted">
                                Angular Developer
                              </small>
                            </div>
                            <select className="form-select rounded-pill form-select-sm w120">
                              <option value={1}>Owner</option>
                              <option value={2}>Can Edit</option>
                              <option value={3}>Guest</option>
                            </select>
                          </li>
                          <li className="list-group-item d-flex align-items-center">
                            <img
                              className="avatar rounded"
                              src="assets/img/xs/avatar2.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <div className="h6 mb-0">Joge Lucky</div>
                              <small className="text-muted">
                                ReactJs Developer
                              </small>
                            </div>
                            <select className="form-select rounded-pill form-select-sm w120">
                              <option value={1}>Owner</option>
                              <option value={2}>Can Edit</option>
                              <option value={3}>Guest</option>
                            </select>
                          </li>
                          <li className="list-group-item d-flex align-items-center">
                            <img
                              className="avatar rounded"
                              src="assets/img/xs/avatar3.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <div className="h6 mb-0">Chris Fox</div>
                              <small className="text-muted">
                                NodeJs Developer
                              </small>
                            </div>
                            <select className="form-select rounded-pill form-select-sm w120">
                              <option value={1}>Owner</option>
                              <option value={2}>Can Edit</option>
                              <option value={3}>Guest</option>
                            </select>
                          </li>
                          <li className="list-group-item d-flex align-items-center">
                            <img
                              className="avatar rounded"
                              src="assets/img/xs/avatar4.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <div className="h6 mb-0">Chris Fox</div>
                              <small className="text-muted">Sr. Designer</small>
                            </div>
                            <select className="form-select rounded-pill form-select-sm w120">
                              <option value={1}>Owner</option>
                              <option value={2}>Can Edit</option>
                              <option value={3}>Guest</option>
                            </select>
                          </li>
                          <li className="list-group-item d-flex align-items-center">
                            <img
                              className="avatar rounded"
                              src="assets/img/xs/avatar5.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <div className="h6 mb-0">Chris Fox</div>
                              <small className="text-muted">Designer</small>
                            </div>
                            <select className="form-select rounded-pill form-select-sm w120">
                              <option value={1}>Owner</option>
                              <option value={2}>Can Edit</option>
                              <option value={3}>Guest</option>
                            </select>
                          </li>
                          <li className="list-group-item d-flex align-items-center">
                            <img
                              className="avatar rounded"
                              src="assets/img/xs/avatar6.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <div className="h6 mb-0">Chris Fox</div>
                              <small className="text-muted">
                                Front-End Developer
                              </small>
                            </div>
                            <select className="form-select rounded-pill form-select-sm w120">
                              <option value={1}>Owner</option>
                              <option value={2}>Can Edit</option>
                              <option value={3}>Guest</option>
                            </select>
                          </li>
                          <li className="list-group-item d-flex align-items-center">
                            <img
                              className="avatar rounded"
                              src="assets/img/xs/avatar7.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <div className="h6 mb-0">Chris Fox</div>
                              <small className="text-muted">QA</small>
                            </div>
                            <select className="form-select rounded-pill form-select-sm w120">
                              <option value={1}>Owner</option>
                              <option value={2}>Can Edit</option>
                              <option value={3}>Guest</option>
                            </select>
                          </li>
                          <li className="list-group-item d-flex align-items-center">
                            <img
                              className="avatar rounded"
                              src="assets/img/xs/avatar8.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <div className="h6 mb-0">Chris Fox</div>
                              <small className="text-muted">
                                Laravel Developer
                              </small>
                            </div>
                            <select className="form-select rounded-pill form-select-sm w120">
                              <option value={1}>Owner</option>
                              <option value={2}>Can Edit</option>
                              <option value={3}>Guest</option>
                            </select>
                          </li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-lg bg-secondary text-light next text-uppercase">
                          Select Files
                        </button>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="step3">
                      <div className="card mb-3">
                        <div className="card-body">
                          <h6 className="card-title mb-1">Upload Files</h6>
                          <div className="mb-4">
                            <label className="form-label small">
                              Upload up to 10 files
                            </label>
                            <input
                              className="form-control"
                              type="file"
                              multiple=""
                            />
                          </div>
                          <span>Already Uploaded File</span>
                        </div>
                        <ul
                          className="list-group list-group-flush list-group-custom custom_scroll mb-0"
                          style={{ height: 300 }}
                        >
                          <li className="list-group-item py-3">
                            <div className="d-flex align-items-center">
                              <div className="avatar rounded no-thumbnail">
                                <i className="fa fa-file-pdf-o text-danger" />
                              </div>
                              <div className="flex-fill ms-3 text-truncate">
                                <p className="mb-0 color-800">
                                  Annual Sales Report 2018-19
                                </p>
                                <small className="text-muted">
                                  .pdf, 5.3 MB
                                </small>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item py-3">
                            <div className="d-flex align-items-center">
                              <div className="avatar rounded no-thumbnail">
                                <i className="fa fa-file-excel-o text-success" />
                              </div>
                              <div className="flex-fill ms-3 text-truncate">
                                <p className="mb-0 color-800">
                                  Complete Product Sheet
                                </p>
                                <small className="text-muted">
                                  .xls, 2.1 MB
                                </small>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item py-3">
                            <div className="d-flex align-items-center">
                              <div className="avatar rounded no-thumbnail">
                                <i className="fa fa-file-word-o text-info" />
                              </div>
                              <div className="flex-fill ms-3 text-truncate">
                                <p className="mb-0 color-800">
                                  Marketing Guidelines
                                </p>
                                <small className="text-muted">
                                  .doc, 2.3 MB
                                </small>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item py-3">
                            <div className="d-flex align-items-center">
                              <div className="avatar rounded no-thumbnail">
                                <i className="fa fa-file-zip-o" />
                              </div>
                              <div className="flex-fill ms-3 text-truncate">
                                <p className="mb-0 color-800">
                                  Brand Photography
                                </p>
                                <small className="text-muted">
                                  .zip, 30.5 MB
                                </small>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-lg bg-secondary text-light next text-uppercase">
                          Advanced Options
                        </button>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="step4">
                      <div className="card text-center">
                        <div className="card-body">
                          <h4 className="card-title mb-1">Project Created!</h4>
                          <span className="text-muted">
                            If you need more info, please check how to create
                            project
                          </span>
                        </div>
                        <div className="card-body">
                          <button className="btn btn-lg bg-light first text-uppercase">
                            Cretae new project
                          </button>
                          <button className="btn btn-lg bg-secondary text-light text-uppercase">
                            View project
                          </button>
                        </div>
                        <div className="card-body">
                          <img
                            className="img-fluid"
                            src="assets/img/project-team.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal: my notes */}
          <div className="modal fade" id="MynotesModal" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-vertical modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header px-4">
                  <h5 className="modal-title">
                    My Notes <span className="badge bg-danger ms-2">14</span>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="bg-light px-4 py-3">
                  <ul className="nav nav-pills nav-fill" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#Notetab-all"
                        role="tab"
                        aria-selected="true"
                      >
                        All Notes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Notetab-Business"
                        role="tab"
                        aria-selected="false"
                      >
                        Business
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Notetab-Social"
                        role="tab"
                      >
                        Social
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Notetab-Create"
                        role="tab"
                      >
                        <i className="fa fa-plus me-2" />
                        New
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="modal-body px-4 custom_scroll">
                  <div className="tab-content p-0">
                    <div
                      className="tab-pane fade active show"
                      id="Notetab-all"
                      role="tabpanel"
                    >
                      <div className="card ribbon mb-2">
                        <div className="option-2 bg-primary position-absolute" />
                        <div className="card-body">
                          <span className="text-muted">02 January 2021</span>
                          <p className="lead">Give Review for design</p>
                          <span>
                            It has roots in a piece of classical Latin
                            literature from 45 BC, making it over 2020 years
                            old.
                          </span>
                        </div>
                        <div className="card-footer pt-0 border-0">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-star favourite-note" />
                          </a>
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-trash favourite-note" />
                          </a>
                        </div>
                      </div>
                      <div className="card ribbon mb-2">
                        <div className="option-2 bg-success position-absolute" />
                        <div className="card-body">
                          <span className="text-muted">17 January 2022</span>
                          <p className="lead">Give salary to employee</p>
                          <span>
                            The generated Lorem Ipsum is therefore always free
                            from repetition
                          </span>
                        </div>
                        <div className="card-footer pt-0 border-0">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-star favourite-note" />
                          </a>
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-trash favourite-note" />
                          </a>
                        </div>
                      </div>
                      <div className="card ribbon mb-2">
                        <div className="option-2 bg-info position-absolute" />
                        <div className="card-body">
                          <span className="text-muted">02 Fabruary 2020</span>
                          <p className="lead">Launch new template</p>
                          <span>
                            Blandit tempus porttitor aasfs. Integer posuere erat
                            a ante venenatis.
                          </span>
                        </div>
                        <div className="card-footer pt-0 border-0">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-star favourite-note" />
                          </a>
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-trash favourite-note" />
                          </a>
                        </div>
                      </div>
                      <div className="card ribbon mb-2">
                        <div className="option-2 bg-dark position-absolute" />
                        <div className="card-body">
                          <span className="text-muted">22 August 2021</span>
                          <p className="lead">Nightout with friends</p>
                          <span>
                            Blandit tempus porttitor aasfs. Integer posuere erat
                            a ante venenatis.
                          </span>
                        </div>
                        <div className="card-footer pt-0 border-0">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-star favourite-note" />
                          </a>
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-trash favourite-note" />
                          </a>
                        </div>
                      </div>
                      <div className="card ribbon mb-2">
                        <div className="option-2 bg-danger position-absolute" />
                        <div className="card-body">
                          <span className="text-muted">01 December 2021</span>
                          <p className="lead">Change a Design</p>
                          <span>
                            {" "}
                            It has survived not only five centuries, but also
                            the leap into electronic
                          </span>
                        </div>
                        <div className="card-footer pt-0 border-0">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-star favourite-note" />
                          </a>
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-trash favourite-note" />
                          </a>
                        </div>
                      </div>
                      <div className="card ribbon mb-2">
                        <div className="option-2 bg-warning position-absolute" />
                        <div className="card-body">
                          <span className="text-muted">10 December 2021</span>
                          <p className="lead">Meeting with Mr.Lee</p>
                          <span>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                          </span>
                        </div>
                        <div className="card-footer pt-0 border-0">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-star favourite-note" />
                          </a>
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-trash favourite-note" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Notetab-Business"
                      role="tabpanel"
                    >
                      <div className="card ribbon mb-2">
                        <div className="option-2 bg-warning position-absolute" />
                        <div className="card-body">
                          <span className="text-muted">10 December 2021</span>
                          <p className="lead">Meeting with Mr.Lee</p>
                          <span>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                          </span>
                        </div>
                        <div className="card-footer pt-0 border-0">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-star favourite-note" />
                          </a>
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-trash favourite-note" />
                          </a>
                        </div>
                      </div>
                      <div className="card ribbon mb-2">
                        <div className="option-2 bg-danger position-absolute" />
                        <div className="card-body">
                          <span className="text-muted">01 December 2021</span>
                          <p className="lead">Change a Design</p>
                          <span>
                            {" "}
                            It has survived not only five centuries, but also
                            the leap into electronic
                          </span>
                        </div>
                        <div className="card-footer pt-0 border-0">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-star favourite-note" />
                          </a>
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-trash favourite-note" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Notetab-Social"
                      role="tabpanel"
                    >
                      <div className="card ribbon mb-2">
                        <div className="option-2 bg-dark position-absolute" />
                        <div className="card-body">
                          <span className="text-muted">22 August 2021</span>
                          <p className="lead">Nightout with friends</p>
                          <span>
                            Blandit tempus porttitor aasfs. Integer posuere erat
                            a ante venenatis.
                          </span>
                        </div>
                        <div className="card-footer pt-0 border-0">
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-star favourite-note" />
                          </a>
                          <a
                            className="btn btn-sm btn-outline-secondary"
                            href="#"
                          >
                            <i className="fa fa-trash favourite-note" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Notetab-Create"
                      role="tabpanel"
                    >
                      <div className="form-floating mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Note Title"
                        />
                        <label>Note Title</label>
                      </div>
                      <div className="form-floating mb-2">
                        <input
                          type="text"
                          className="form-control datepicker"
                          placeholder="Select Date"
                        />
                        <label>Select Date</label>
                      </div>
                      <div className="form-floating mb-2">
                        <select
                          className="form-select"
                          id="floatingSelect"
                          aria-label="Floating label select example"
                        >
                          <option selected="">Open this select menu</option>
                          <option value={1}>Business</option>
                          <option value={2}>Social</option>
                        </select>
                        <label>Works with selects</label>
                      </div>
                      <div className="form-floating mb-4">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          style={{ height: 100 }}
                          defaultValue={""}
                        />
                        <label>Leave a comment here</label>
                      </div>
                      <button type="button" className="btn btn-primary lift">
                        Save note
                      </button>
                      <button
                        type="button"
                        className="btn btn-white border lift"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal: Schedule */}
          <div className="modal fade" id="ScheduleModal" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-vertical modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header bg-secondary rounded-0">
                  <h5 className="modal-title text-light">Schedule</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body custom_scroll">
                  <div className="ps-2">
                    {/*Timeline item*/}
                    <div className="timeline-item ti-primary p-3">
                      <div className="avatar sm rounded-circle no-thumbnail">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="timeline-content ms-3">
                        <div>Call Danny at Colby's</div>
                        <small className="text-muted">Today - 11:32am</small>
                      </div>
                    </div>
                    {/*Timeline item*/}
                    <div className="timeline-item ti-info p-3">
                      <div className="timeline-icon">
                        <img
                          className="avatar sm rounded-circle"
                          src="assets/img/xs/avatar1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="timeline-content ms-3">
                        <div>Meeting with Alice</div>
                        <small className="text-muted">Today - 12:50pm</small>
                      </div>
                    </div>
                    {/*Timeline item*/}
                    <div className="timeline-item ti-danger p-3">
                      <div className="avatar sm rounded-circle no-thumbnail">
                        <i className="fa fa-comment" />
                      </div>
                      <div className="timeline-content ms-3">
                        <div>Answer Annie's message</div>
                        <small className="text-muted">Today - 01:35pm</small>
                      </div>
                    </div>
                    {/*Timeline item*/}
                    <div className="timeline-item ti-danger p-3">
                      <div className="avatar sm rounded-circle no-thumbnail">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="timeline-content ms-3">
                        <div>Send new campaign</div>
                        <small className="text-muted">Today - 02:40pm</small>
                      </div>
                    </div>
                    {/*Timeline item*/}
                    <div className="timeline-item ti-primary p-3">
                      <div className="avatar sm rounded-circle no-thumbnail">
                        <i className="fa fa-smile-o" />
                      </div>
                      <div className="timeline-content ms-3">
                        <div>Project review</div>
                        <small className="text-muted">Today - 03:15pm</small>
                      </div>
                    </div>
                    {/*Timeline item*/}
                    <div className="timeline-item ti-warning p-3">
                      <div className="avatar sm rounded-circle no-thumbnail">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="timeline-content ms-3">
                        <div>Call Trisha Jackson</div>
                        <small className="text-muted">Today - 05:40pm</small>
                      </div>
                    </div>
                    {/*Timeline item*/}
                    <div className="timeline-item ti-success p-3">
                      <div className="avatar sm rounded-circle no-thumbnail">
                        <i className="fa fa-leaf" />
                      </div>
                      <div className="timeline-content ms-3">
                        <div>Write proposal for Don</div>
                        <small className="text-muted">Today - 06:30pm</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal: RecentChat */}
          <div className="modal fade" id="RecentChat" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-vertical modal-dialog-scrollable">
              <div className="modal-content">
                <div className="d-flex align-items-start">
                  <div className="nav flex-column nav-pills p-3 h-100">
                    <a
                      className="nav-link rounded-circle p-1 mb-2 active"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-1"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar1.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-2"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar2.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-3"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar3.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-2"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar4.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-5"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar5.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-1"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar6.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-7"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar7.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-3"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar8.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-3"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar9.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-1"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar10.jpg"
                        alt="avatar"
                      />
                    </a>
                    <a
                      className="nav-link rounded-circle p-1 mb-2"
                      href="javascript:void(0);"
                      data-bs-toggle="pill"
                      data-bs-target="#c-user-1"
                      title=""
                    >
                      <img
                        className="avatar sm rounded-circle border"
                        src="assets/img/xs/avatar5.jpg"
                        alt="avatar"
                      />
                    </a>
                  </div>
                  <div className="tab-content shadow-sm">
                    <div
                      className="tab-pane fade show active"
                      id="c-user-1"
                      role="tabpanel"
                    >
                      <div className="card">
                        {/* start: chat header */}
                        <div className="card-header border-bottom py-3">
                          <div className="d-flex">
                            <a href="javascript:void(0);" title="">
                              <img
                                className="avatar rounded-circle"
                                src="assets/img/xs/avatar1.jpg"
                                alt="avatar"
                              />
                            </a>
                            <div className="ms-3">
                              <h6 className="mb-0">Orlando Lentz</h6>
                              <small className="text-muted">
                                Last seen: 2 hours ago
                              </small>
                            </div>
                          </div>
                          <div className="dropdown morphing scale-left">
                            <a
                              className="nav-link p-2 text-secondary d-none d-xl-inline-block"
                              href="javascript:void(0);"
                            >
                              <i className="fa fa-camera" />
                            </a>
                            <a
                              className="nav-link p-2 me-1 text-secondary d-none d-xl-inline-block"
                              href="javascript:void(0);"
                            >
                              <i className="fa fa-video-camera" />
                            </a>
                            <a
                              className="nav-link py-2 px-3 text-muted d-inline-block d-xl-none"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              href="#"
                            >
                              <i className="fa fa-close" />
                            </a>
                            <a
                              href="#"
                              className="more-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-h" />
                            </a>
                            <ul className="dropdown-menu shadow border-0 p-2">
                              <li>
                                <a className="dropdown-item" href="#">
                                  File Info
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Copy to
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Move to
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Rename
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Block
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* start: chat body */}
                        <div
                          className="card-body custom_scroll"
                          style={{ height: "calc(100vh - 141px)" }}
                        >
                          <ul className="list-unstyled chat-history flex-grow-1">
                            {/* Chat: left */}
                            <li className="mb-3 d-flex flex-row align-items-end">
                              <div className="max-width-70">
                                <div className="user-info mb-1">
                                  <img
                                    className="avatar xs rounded-circle me-1"
                                    src="assets/img/xs/avatar1.jpg"
                                    alt="avatar"
                                  />
                                  <span className="text-muted small">
                                    10:10 AM, Today
                                  </span>
                                </div>
                                <div className="card p-3">
                                  <div className="message">
                                    {" "}
                                    Hi Aiden, how are you?
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: right */}
                            <li className="mb-3 d-flex flex-row-reverse align-items-end">
                              <div className="max-width-70 text-end">
                                <div className="user-info mb-1">
                                  <span className="text-muted small">
                                    10:12 AM, Today
                                  </span>
                                </div>
                                <div className="card border-0 p-3 bg-primary text-light">
                                  <div className="message">
                                    Are we meeting today?
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: left */}
                            <li className="mb-3 d-flex flex-row align-items-end">
                              <div className="max-width-70">
                                <div className="user-info mb-1">
                                  <img
                                    className="avatar xs rounded-circle me-1"
                                    src="assets/img/xs/avatar1.jpg"
                                    alt="avatar"
                                  />
                                  <span className="text-muted small">
                                    10:10 AM, Today
                                  </span>
                                </div>
                                <div className="card p-3">
                                  <div className="message">
                                    {" "}
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: left */}
                            <li className="mb-3 d-flex flex-row align-items-end">
                              <div className="max-width-70">
                                <div className="user-info mb-1">
                                  <img
                                    className="avatar xs rounded-circle me-1"
                                    src="assets/img/xs/avatar1.jpg"
                                    alt="avatar"
                                  />
                                  <span className="text-muted small">
                                    10:10 AM, Today
                                  </span>
                                </div>
                                <div className="card p-3">
                                  <div className="message">
                                    {" "}
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text.
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: right */}
                            <li className="mb-3 d-flex flex-row-reverse align-items-end">
                              <div className="max-width-70 text-end">
                                <div className="user-info mb-1">
                                  <span className="text-muted small">
                                    10:12 AM, Today
                                  </span>
                                </div>
                                <div className="card border-0 p-3 bg-primary text-light">
                                  <div className="message">
                                    Yes, Orlando Allredy done <br /> There are
                                    many variations of passages of Lorem Ipsum
                                    available
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: left */}
                            <li className="mb-3 d-flex flex-row align-items-end">
                              <div className="max-width-70">
                                <div className="user-info mb-1">
                                  <img
                                    className="avatar xs rounded-circle me-1"
                                    src="assets/img/xs/avatar1.jpg"
                                    alt="avatar"
                                  />
                                  <span className="text-muted small">
                                    10:10 AM, Today
                                  </span>
                                </div>
                                <div className="card p-3">
                                  <div className="message">
                                    <p>Please find attached images</p>
                                    <img
                                      className="w120 img-thumbnail"
                                      src="assets/img/gallery/3.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="w120 img-thumbnail"
                                      src="assets/img/gallery/4.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: right */}
                            <li className="mb-3 d-flex flex-row-reverse align-items-end">
                              <div className="max-width-70 text-end">
                                <div className="user-info mb-1">
                                  <span className="text-muted small">
                                    10:12 AM, Today
                                  </span>
                                </div>
                                <div className="card border-0 p-3 bg-primary text-light">
                                  <div className="message">
                                    Okay, will check and let you know.
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* start: chat footer */}
                        <div className="card-footer border-top bg-transparent py-3 px-4">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter text here..."
                            />
                            <button className="btn btn-primary" type="button">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="c-user-2"
                      role="tabpanel"
                    >
                      <div className="card">
                        {/* start: chat header */}
                        <div className="card-header border-bottom py-3">
                          <div className="d-flex">
                            <a href="javascript:void(0);" title="">
                              <img
                                className="avatar rounded-circle"
                                src="assets/img/xs/avatar2.jpg"
                                alt="avatar"
                              />
                            </a>
                            <div className="ms-3">
                              <h6 className="mb-0">Orlando Lentz</h6>
                              <small className="text-muted">
                                Last seen: 2 hours ago
                              </small>
                            </div>
                          </div>
                          <div className="dropdown morphing scale-left">
                            <a
                              className="nav-link p-2 text-secondary d-none d-xl-inline-block"
                              href="javascript:void(0);"
                            >
                              <i className="fa fa-camera" />
                            </a>
                            <a
                              className="nav-link p-2 me-1 text-secondary d-none d-xl-inline-block"
                              href="javascript:void(0);"
                            >
                              <i className="fa fa-video-camera" />
                            </a>
                            <a
                              className="nav-link py-2 px-3 text-muted d-inline-block d-xl-none"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              href="#"
                            >
                              <i className="fa fa-close" />
                            </a>
                            <a
                              href="#"
                              className="more-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-h" />
                            </a>
                            <ul className="dropdown-menu shadow border-0 p-2">
                              <li>
                                <a className="dropdown-item" href="#">
                                  File Info
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Copy to
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Move to
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Rename
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Block
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* start: chat body */}
                        <div
                          className="card-body custom_scroll"
                          style={{ height: "calc(100vh - 141px)" }}
                        >
                          <ul className="list-unstyled chat-history flex-grow-1">
                            {/* Chat: right */}
                            <li className="mb-3 d-flex flex-row-reverse align-items-end">
                              <div className="max-width-70 text-end">
                                <div className="user-info mb-1">
                                  <span className="text-muted small">
                                    10:12 AM, Today
                                  </span>
                                </div>
                                <div className="card border-0 p-3 bg-primary text-light">
                                  <div className="message">
                                    Are we meeting today?
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: left */}
                            <li className="mb-3 d-flex flex-row align-items-end">
                              <div className="max-width-70">
                                <div className="user-info mb-1">
                                  <img
                                    className="avatar xs rounded-circle me-1"
                                    src="assets/img/xs/avatar2.jpg"
                                    alt="avatar"
                                  />
                                  <span className="text-muted small">
                                    10:10 AM, Today
                                  </span>
                                </div>
                                <div className="card p-3">
                                  <div className="message">
                                    {" "}
                                    Hi Aiden, how are you?
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: right */}
                            <li className="mb-3 d-flex flex-row-reverse align-items-end">
                              <div className="max-width-70 text-end">
                                <div className="user-info mb-1">
                                  <span className="text-muted small">
                                    10:12 AM, Today
                                  </span>
                                </div>
                                <div className="card border-0 p-3 bg-primary text-light">
                                  <div className="message">
                                    Yes, Orlando Allredy done <br /> There are
                                    many variations of passages of Lorem Ipsum
                                    available
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: left */}
                            <li className="mb-3 d-flex flex-row align-items-end">
                              <div className="max-width-70">
                                <div className="user-info mb-1">
                                  <img
                                    className="avatar xs rounded-circle me-1"
                                    src="assets/img/xs/avatar2.jpg"
                                    alt="avatar"
                                  />
                                  <span className="text-muted small">
                                    10:10 AM, Today
                                  </span>
                                </div>
                                <div className="card p-3">
                                  <div className="message">
                                    <p>Please find attached images</p>
                                    <img
                                      className="w120 img-thumbnail"
                                      src="assets/img/gallery/1.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="w120 img-thumbnail"
                                      src="assets/img/gallery/2.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: right */}
                            <li className="mb-3 d-flex flex-row-reverse align-items-end">
                              <div className="max-width-70 text-end">
                                <div className="user-info mb-1">
                                  <span className="text-muted small">
                                    10:12 AM, Today
                                  </span>
                                </div>
                                <div className="card border-0 p-3 bg-primary text-light">
                                  <div className="message">
                                    Okay, will check and let you know.
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: left */}
                            <li className="mb-3 d-flex flex-row align-items-end">
                              <div className="max-width-70">
                                <div className="user-info mb-1">
                                  <img
                                    className="avatar xs rounded-circle me-1"
                                    src="assets/img/xs/avatar2.jpg"
                                    alt="avatar"
                                  />
                                  <span className="text-muted small">
                                    10:10 AM, Today
                                  </span>
                                </div>
                                <div className="card p-3">
                                  <div className="message">
                                    {" "}
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            {/* Chat: left */}
                            <li className="mb-3 d-flex flex-row align-items-end">
                              <div className="max-width-70">
                                <div className="user-info mb-1">
                                  <img
                                    className="avatar xs rounded-circle me-1"
                                    src="assets/img/xs/avatar2.jpg"
                                    alt="avatar"
                                  />
                                  <span className="text-muted small">
                                    10:10 AM, Today
                                  </span>
                                </div>
                                <div className="card p-3">
                                  <div className="message">
                                    {" "}
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text.
                                  </div>
                                </div>
                              </div>
                              {/* More option */}
                              <div className="btn-group">
                                <a
                                  href="#"
                                  className="nav-link py-2 px-3 text-muted"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v" />
                                </a>
                                <ul className="dropdown-menu rounded-4 border-0 shadow">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Share
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* start: chat footer */}
                        <div className="card-footer border-top bg-transparent py-3 px-4">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter text here..."
                            />
                            <button className="btn btn-primary" type="button">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal: Setting */}
          <div className="modal fade" id="SettingsModal" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-vertical right-side modal-dialog-scrollable">
              <div className="modal-content">
                <div className="px-xl-4 modal-header">
                  <h5 className="modal-title">Theme Setting</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="px-xl-4 modal-body custom_scroll">
                  {/* start: color setting */}
                  <div className="card fieldset border border-primary p-3 setting-theme mb-4">
                    <span className="fieldset-tile text-primary bg-card">
                      Color Settings
                    </span>
                    <ul className="list-unstyled d-flex choose-skin mb-0">
                      <li data-theme="black">
                        <div className="black" />
                      </li>
                      <li data-theme="indigo">
                        <div className="indigo" />
                      </li>
                      <li data-theme="blue">
                        <div className="blue" />
                      </li>
                      <li data-theme="cyan">
                        <div className="cyan" />
                      </li>
                      <li data-theme="green">
                        <div className="green" />
                      </li>
                      <li data-theme="orange">
                        <div className="orange" />
                      </li>
                      <li data-theme="blush">
                        <div className="blush" />
                      </li>
                      <li data-theme="red">
                        <div className="red" />
                      </li>
                      <li data-theme="dynamic">
                        <div className="dynamic">
                          <i className="fa fa-paint-brush" />
                        </div>
                      </li>
                    </ul>
                    {/* Settings: Theme dynamics */}
                    <div className="card fieldset border border-primary p-3 dt-setting mt-4">
                      <span className="fieldset-tile text-primary bg-card">
                        Dynamic Color Settings
                      </span>
                      <div className="row g-3">
                        <div className="col-7">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <button
                                id="primaryColorPicker"
                                className="btn bg-primary avatar xs me-2"
                              />
                              <label>Primary Color</label>
                            </li>
                            <li>
                              <button
                                id="secondaryColorPicker"
                                className="btn bg-secondary avatar xs me-2"
                              />
                              <label>Secondary Color</label>
                            </li>
                            <li>
                              <button
                                id="BodyColorPicker"
                                className="btn btn-outline-secondary bg-body avatar xs me-2"
                              />
                              <label>Site Background</label>
                            </li>
                            <li>
                              <button
                                id="CardColorPicker"
                                className="btn btn-outline-secondary bg-card avatar xs me-2"
                              />
                              <label>Widget Background</label>
                            </li>
                            <li>
                              <button
                                id="BorderColorPicker"
                                className="btn btn-outline-secondary bg-card avatar xs me-2"
                              />
                              <label>Border Color</label>
                            </li>
                          </ul>
                        </div>
                        <div className="col-5">
                          <ul className="list-unstyled mb-0">
                            <li>
                              <button
                                id="chartColorPicker1"
                                className="btn chart-color1 avatar xs me-2"
                              />
                              <label>Chart Color 1</label>
                            </li>
                            <li>
                              <button
                                id="chartColorPicker2"
                                className="btn chart-color2 avatar xs me-2"
                              />
                              <label>Chart Color 2</label>
                            </li>
                            <li>
                              <button
                                id="chartColorPicker3"
                                className="btn chart-color3 avatar xs me-2"
                              />
                              <label>Chart Color 3</label>
                            </li>
                            <li>
                              <button
                                id="chartColorPicker4"
                                className="btn chart-color4 avatar xs me-2"
                              />
                              <label>Chart Color 4</label>
                            </li>
                            <li>
                              <button
                                id="chartColorPicker5"
                                className="btn chart-color5 avatar xs me-2"
                              />
                              <label>Chart Color 5</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* start: Light/dark */}
                  <div className="card fieldset border setting-mode mb-4">
                    <span className="fieldset-tile bg-card">
                      Light/Dark &amp; Contrast Layout
                    </span>
                    <div className="c_radio d-flex text-center">
                      <label
                        className="m-1 theme-switch"
                        htmlFor="theme-switch"
                      >
                        <input type="checkbox" id="theme-switch" />
                        <span className="card p-2">
                          <img
                            className="img-fluid"
                            src="assets/img/dark-version.svg"
                            alt="Dark Mode"
                          />
                        </span>
                      </label>
                      <label className="m-1 theme-dark" htmlFor="theme-dark">
                        <input type="checkbox" id="theme-dark" />
                        <span className="card p-2">
                          <img
                            className="img-fluid"
                            src="assets/img/dark-theme.svg"
                            alt="Theme Dark Mode"
                          />
                        </span>
                      </label>
                      <label
                        className="m-1 theme-high-contrast"
                        htmlFor="theme-high-contrast"
                      >
                        <input type="checkbox" id="theme-high-contrast" />
                        <span className="card p-2">
                          <img
                            className="img-fluid"
                            src="assets/img/high-version.svg"
                            alt="High Contrast"
                          />
                        </span>
                      </label>
                      <label className="m-1 theme-rtl" htmlFor="theme-rtl">
                        <input type="checkbox" id="theme-rtl" />
                        <span className="card p-2">
                          <img
                            className="img-fluid"
                            src="assets/img/rtl-version.svg"
                            alt="RTL Mode!"
                          />
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* start: Font setting */}
                  <div className="card fieldset border setting-font">
                    <span className="fieldset-tile bg-card">
                      Google Font Settings
                    </span>
                    <div className="c_radio d-flex text-center font_setting">
                      <label className="m-1" htmlFor="font-opensans">
                        <input
                          type="radio"
                          name="font"
                          id="font-opensans"
                          defaultValue="font-opensans"
                        />
                        <span className="card p-2">
                          <img
                            className="img-fluid"
                            src="assets/img/font-opensans.svg"
                            alt="Dark Mode"
                          />
                        </span>
                      </label>
                      <label className="m-1" htmlFor="font-quicksand">
                        <input
                          type="radio"
                          name="font"
                          id="font-quicksand"
                          defaultValue="font-quicksand"
                        />
                        <span className="card p-2">
                          <img
                            className="img-fluid"
                            src="assets/img/font-quicksand.svg"
                            alt="Dark Mode"
                          />
                        </span>
                      </label>
                      <label className="m-1" htmlFor="font-nunito">
                        <input
                          type="radio"
                          name="font"
                          id="font-nunito"
                          defaultValue="font-nunito"
                          defaultChecked=""
                        />
                        <span className="card p-2">
                          <img
                            className="img-fluid"
                            src="assets/img/font-nunito.svg"
                            alt="Dark Mode"
                          />
                        </span>
                      </label>
                      <label className="m-1" htmlFor="font-raleway">
                        <input
                          type="radio"
                          name="font"
                          id="font-raleway"
                          defaultValue="font-raleway"
                        />
                        <span className="card p-2">
                          <img
                            className="img-fluid"
                            src="assets/img/font-raleway.svg"
                            alt="Dark Mode"
                          />
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* start: Dynamic Font Settings */}
                  <div className="m-1 p-3 bg-body rounded-4 mb-4">
                    <p>Dynamic Font Settings</p>
                    <div className="mb-2">
                      <label className="form-label small text-muted mb-0">
                        Enter font URL
                      </label>
                      <input
                        id="font_url"
                        type="text"
                        className="form-control"
                        placeholder="http://fonts.cdnfonts.com/css/vonfont"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small text-muted mb-0">
                        Enter font family name
                      </label>
                      <input
                        id="font_family"
                        type="text"
                        className="form-control"
                        placeholder="vonfont"
                      />
                    </div>
                    <button
                      id="font_apply"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Save Changes
                    </button>
                    <button
                      id="font_cancel"
                      type="submit"
                      className="btn btn-secondary"
                    >
                      Clear Changes
                    </button>
                  </div>
                  {/* start: Extra setting */}
                  <div className="setting-more mb-4">
                    <h6 className="card-title">More Setting</h6>
                    <ul className="list-group list-group-flush list-group-custom fs-6">
                      {/* Settings: Horizontal menu version */}
                      <li className="list-group-item">
                        <div className="form-check form-switch h-menu-switch mb-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="h_menu"
                          />
                          <label className="form-check-label" htmlFor="h_menu">
                            Horizontal Menu Version
                          </label>
                        </div>
                      </li>
                      {/* Settings: page header top Fix */}
                      <li className="list-group-item">
                        <div className="form-check form-switch pageheader-switch mb-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="PageHeader"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="PageHeader"
                          >
                            Page Header Fix
                          </label>
                        </div>
                      </li>
                      {/* Settings: page header Dark version  */}
                      <li className="list-group-item">
                        <div className="form-check form-switch pageheader-dark-switch mb-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="PageHeader_dark"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="PageHeader_dark"
                          >
                            Page Header Dark Mode
                          </label>
                        </div>
                      </li>
                      {/* Settings: Border radius */}
                      <li className="list-group-item">
                        <div className="form-check form-switch radius-switch mb-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="BorderRadius"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="BorderRadius"
                          >
                            Border Radius none
                          </label>
                        </div>
                      </li>
                      {/* Settings: sidebar version 2 */}
                      <li className="list-group-item">
                        <div className="form-check form-switch sidebar-v2 mb-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="sidebar_v2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="sidebar_v2"
                          >
                            Sidebar Version 2
                          </label>
                        </div>
                      </li>
                      {/* Settings: sidebar dark */}
                      <li className="list-group-item">
                        <div className="form-check form-switch sidebardark-switch mb-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="SidebarDark"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="SidebarDark"
                          >
                            Enable Dark! ( Sidebar )
                          </label>
                        </div>
                      </li>
                      {/* Settings: Sidebar bg image */}
                      <li className="list-group-item setting-img">
                        <div className="form-check form-switch imagebg-switch mb-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="CheckImage"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="CheckImage"
                          >
                            Background Image (Sidebar)
                          </label>
                        </div>
                        <div className="bg-images">
                          <ul className="list-unstyled d-flex">
                            <li className="sidebar-img-1 me-1 sidebar-img-active">
                              <a
                                className="rounded sidebar-img"
                                id="img-1"
                                href="#"
                              >
                                <img
                                  src="assets/img/sidebar-bg/sidebar-1.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="sidebar-img-2 me-1">
                              <a
                                className="rounded sidebar-img"
                                id="img-2"
                                href="#"
                              >
                                <img
                                  src="assets/img/sidebar-bg/sidebar-2.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="sidebar-img-3 me-1">
                              <a
                                className="rounded sidebar-img"
                                id="img-3"
                                href="#"
                              >
                                <img
                                  src="assets/img/sidebar-bg/sidebar-3.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="sidebar-img-4 me-1">
                              <a
                                className="rounded sidebar-img"
                                id="img-4"
                                href="#"
                              >
                                <img
                                  src="assets/img/sidebar-bg/sidebar-4.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="sidebar-img-5 me-1">
                              <a
                                className="rounded sidebar-img"
                                id="img-5"
                                href="#"
                              >
                                <img
                                  src="assets/img/sidebar-bg/sidebar-5.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* Settings: Container Fluid */}
                      <li className="list-group-item">
                        <div className="form-check form-switch fluid-switch mb-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="fluidLayout"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fluidLayout"
                          >
                            Container Fluid
                          </label>
                        </div>
                      </li>
                      {/* Settings: Card box shadow  */}
                      <li className="list-group-item">
                        <div className="form-check form-switch shadow-switch mb-1">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="card_shadow"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="card_shadow"
                          >
                            Card Box-Shadow
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* start: Extra link, please do not add in your project */}
                  <div className="mb-4">
                    <a
                      className="btn lift  btn-outline-secondary"
                      href="marketing/index.html"
                    >
                      Marketing page
                    </a>
                    <a
                      className="btn lift  btn-outline-secondary"
                      href="onepgae-uikit/onepage.html"
                    >
                      Landing page
                    </a>
                    <a
                      className="btn lift  btn-outline-secondary"
                      href="onepgae-uikit/index.html"
                    >
                      One page Ui Kit Elements
                    </a>
                  </div>
                </div>
                <div className="px-xl-4 modal-footer d-flex justify-content-start text-center">
                  <button
                    type="button"
                    className="btn flex-fill btn-primary lift"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn flex-fill btn-white border lift"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
