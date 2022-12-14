import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./main/about";
import Fetching from "./main/fetching";
import Footer from "./main/footer";
import Home from "./main/home";
import Navbar from "./main/navbar";
import Submit from "./main/submit";
import '../src/index.css'
import '../src/App.css'

//routings section..
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/subscriber' element={<Submit />} />
    <Route path='/viewsubscribersdata' element={<Fetching />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
