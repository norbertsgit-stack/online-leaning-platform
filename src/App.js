import "./style.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Courses from './Courses';
import Lessons from './Lessons';
import Instructors from "./Instructors";
import Resources from "./Resources";

const App = () => {
  
  return (
    <><Router>
      <nav className="bar">
        <ul>
          <li className="explore">
            <Link  to="/Courses">Courses</Link>
          </li>
          <li className="explore">
            <Link to="/Lessons" >Lessons</Link>
          </li>
          <li className="explore">
            <Link to="/Instructors" >Instructors</Link>
          </li>
          <li className="explore">
            <Link to="/Resources" >Resources</Link>
          </li>
        </ul>
      </nav>
      
      <Routes className="result">
        <Route path="/Courses" exact element={<Courses />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/Instructors" element={<Instructors />} />
        <Route path="/Resources" element={<Resources />} />
   
      </Routes>
    </Router>

    <div className="App">
      <div className="App-Header">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Learning Platform</h1>
            <p>
              Unlock the potential of online education with our vast library of courses and expert instructors.
            </p>
            <div className="m">   
            <a href="https://www.learnplatform.com/"> 
            <button className="explore">Start Learning Now</button>
            </a>
             
            </div>
          </div>
          <div className="j">
            <div className="free">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/collections/product-images/ibm-full-stack-cloud-developer.jpeg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50"
              alt="Courses" />
              <h3>Artificial Intelligence: Implications for Business Strategy</h3>
              </div>
              <div className="free">
            <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/2c/c9b36e0de04147b43661ee0655561f/Image-JS-Full-Stack.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50"
              alt="Lessons" /><h3>Artificial Intelligence: Implications for Business Strategy</h3></div>
          <div className="free">  <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/69/d189dfdb9d46db9bc3641bfdb39bfb/NET-FullStack-Developer.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop"
              alt="Instructors" /><h3>Artificial Intelligence: Implications for Business Strategy</h3></div>
             <div className="free"> <img
              src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/7b/8a041f2d5d4e67af763f831515b3e6/CF_3_SKT-Image_Cloud-1134X675.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&q=50&fit=crop"
              alt="Resources" /><h3>Artificial Intelligence: Implications for Business Strategy</h3></div>
            <h2>Enhance Your Skills Today</h2>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
