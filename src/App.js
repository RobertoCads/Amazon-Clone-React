import './App.css';
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home.js";
import Checkout from "./Components/Checkout/Checkout.js";
import { Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
