/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Producs from "./pages/Produklist";
import About from "./pages/About";
import Cart from "./pages/Cart";

export default function App() {
    return(
      <>

        <div className=" dark:bg-gelap3">
            <Router>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/producs" element={<Producs/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/cart" element={<Cart/>} />
              </Routes>
            </Router>
        </div>


      </>
    )
}