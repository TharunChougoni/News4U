import { generateForegroundColorFrom } from "daisyui/src/colors/functions";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar cat1="General" cat2="Sports" cat3="Anime" />
        <News />
      </div>
    );
  }
}
