import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div >
        <header className="text-gray-600 body-font ">
          <div className="container fixed 	mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl">News4You</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1  md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900">Home</a>
              <a className="mr-5 hover:text-gray-900">sports</a>
              <a className="mr-5 hover:text-gray-900">Anime</a>
              <a className="mr-5 hover:text-gray-900">About</a>
            </nav>
            <a
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              href="https://www.instagram.com/__tharun__2022__/"
              type="button"
            >
              Instagram
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </header>
      </div>
    );
  }
}
