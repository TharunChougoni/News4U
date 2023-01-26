import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div className="container ">
        <NavBar
          cat1="General"
          cat2="Sports"
          cat3="Entertainment"
          cat4="Technology"
          cat5="Science"
          cat6="Health"
          cat7="Business"
        />

        <LoadingBar height={2} color="#dff20c" progress={this.state.progress} shadow={true} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={9}
                category="general"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={9}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={9}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={9}
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={9}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={9}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={9}
                category="business"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
