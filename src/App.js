
import React from "react";
import Welcome from './components/Welcome';
import Header from './components/Header';
import Middle from "./components/Middle";
import Card from "./components/Card";
import  Enterprise from "./components/Enterprise";
import Buzzword from "./components/Buzzword.jsx";
import Design from "./components/Design.jsx";
import Development from "./components/Development.jsx";
import Footer from "./components/Footer"
import Copywrite from "./components/Copywrite.jsx";



function App() {
  return (
    <>
    
    <Welcome />
    <Header />
    <Middle />
    <Card />
    <Enterprise />
    <Buzzword/>
    <Design />
    <Development />
    <Footer />
    <Copywrite />
    
    </>
   
  );
}

export default App;
