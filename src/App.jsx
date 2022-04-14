import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products/:category" element={<AllProducts />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;