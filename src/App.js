import { generateForegroundColorFrom } from "daisyui/src/colors/functions";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div className="container ">
       <NavBar cat1="General" cat2="Sports" cat3="Entertainment" cat4="Technology" cat5="Science" cat6="Health" cat7="Business" />

      <Routes>
        <Route   exact  path="/general" element={<News key="general" pageSize ={9} category = "general" />}/>
        <Route   exact  path="/sports" element={<News key="sports" pageSize ={9} category = "sports" />}/> 
        <Route   exact  path="/entertainment" element={<News key="entertainment" pageSize ={9} category = "entertainment" />}/>
        <Route   exact   path="/technology" element={<News key="technology" pageSize ={9} category = "technology" />}/>
        <Route   exact  path="/science" element={<News key="science" pageSize ={9} category = "science" />}/>
        <Route   exact  path="/health" element={<News key="health" pageSize ={9} category = "health" />}/>
        <Route   exact  path="/business" element={<News key="business" pageSize ={9} category = "business" />}/>
      </Routes>
        
      </div>
    );
  }
}
