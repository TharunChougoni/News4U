import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, category, imageUrl, newsExt } = this.props;
    return (
      <div className="p-4 ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={
              !imageUrl
                ? "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                : imageUrl
            }
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest dark:text-slate-50 text-xs title-font font-medium text-gray-400 mb-1">
              {category}
            </h2>
            <h1 className="title-font dark:text-slate-300	 text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed dark:text-zinc-400 mb-3">
              {description}
            </p>
            <div className="flex items-center flex-wrap ">
              <a
                className="text-indigo-500  inline-flex items-center md:mb-2 lg:mb-0"
                href={newsExt}
                target="_blank"
                rel="noreferrer"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
