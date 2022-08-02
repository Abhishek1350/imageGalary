import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGalary from "./components/ImageGalary";


const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  return (
      <ImageGalary API_KEY={API_KEY}/>
  );
};

export default App;
