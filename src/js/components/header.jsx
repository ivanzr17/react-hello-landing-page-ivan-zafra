import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto ml-3 link-body-emphasis text-decoration-none"
        >
          <span class="fs-4 text-light px-sm-5">Start Bootstrap</span>
        </a>

        <ul class="nav nav-pills d-none d-sm-flex ">
          <li class="nav-item">
            <a href="#" class="nav-link text-light" aria-current="page">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-light">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-light">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-light">
              Contact
            </a>
          </li>
        </ul>
        <div class="dropdown d-sm-none">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                About
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Services
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
