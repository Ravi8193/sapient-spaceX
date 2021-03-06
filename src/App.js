import React from "react";
import Pack from "./components/pack/Pack";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {

  return (
    <div className="container mx-auto px-2 bg-gray-200">
      <Header />
      <Pack />
      <Footer name="Ravi Chaudhari" />
    </div>
  );
};

export default App;
