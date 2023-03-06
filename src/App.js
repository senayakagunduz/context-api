import "./App.css";
import { useState } from "react";
import SiteProvider from "./context/SiteContext";
import Home from "./components/Home";

function App() {
  
  return (
    <SiteProvider>
      <Home />
    </SiteProvider>
  );
}

export default App;
