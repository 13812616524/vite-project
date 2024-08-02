import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
