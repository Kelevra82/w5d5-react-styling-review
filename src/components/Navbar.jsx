import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-primary bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Divider</a>
            </li>
            <li>
              <a>Hero</a>
            </li>
            <li>
              <a>Navbar</a>
            </li>
          </ul>
        </div>
        <h1 className="text-xl text-info">Al Caponents</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-primary px-1">
          <li>
            <a>Divider</a>
          </li>
          <li>
            <a>Hero</a>
          </li>
          <li>
            <a>Navbar</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
