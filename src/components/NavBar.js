import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    let {cat1,cat2,cat3}=this.props
    return (
      
      <div className="navbar fixed dark:bg-indigo-500		 bg-base-100">
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
                <a> {cat1} </a>
              </li>
              <li>
                <a> {cat2} </a>
              </li>
              <li>
                <a> {cat3} </a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">News4U</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>{cat1}</a>
            </li>
            <li>
              <a>{cat2}</a>
            </li>
            <li>
              <a>{cat3}</a>
            </li>
           
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Instagram</a>
        </div>
      </div>
    );
  }
}
