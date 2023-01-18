import React, { Component } from "react";
import { Link } from "react-router-dom";



export default class NavBar extends Component {
  render() {
    let { cat1, cat2, cat3, cat4, cat5, cat6, cat7 } = this.props;
    return (
      <div className="navbar fixed bg-cyan-50 	dark:bg-indigo-500	">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/general">{cat1} </Link>
              </li>
              <li>
                <Link to="/sports">{cat2} </Link>
              </li>
              <li>
                <Link to="/entertainment">{cat3} </Link>
              </li>
              <li>
                <Link to="/technology">{cat4} </Link>
              </li>
              <li>
                <Link to="/science">{cat5} </Link>
              </li>
              <li>
                <Link to="/health">{cat6} </Link>
              </li>
              <li>
                <Link to="/business">{cat7} </Link>
              </li>

            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">News4U</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/general">{cat1} </Link>
            </li>
            <li>
              <Link to="/sports">{cat2} </Link>
            </li>
            <li>
              <Link to="/entertainment">{cat3} </Link>
            </li>
            <li>
              <Link to="/technology">{cat4} </Link>
            </li>
            <li>
              <Link to="/science">{cat5} </Link>
            </li>
            <li>
              <Link to="/health">{cat6} </Link>
            </li>
            <li>
              <Link to="/business">{cat7} </Link>
            </li>

          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn"
            href="https://www.instagram.com/__tharun__2022__/"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    );
  }
}
