import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import SignUp from "./Pages/SignUp";
import Testimonials from "./Pages/Testimonials";
import About from "./Pages/About";
import { BrowserRouter } from "react-router";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
