import Landing from "./pages/Landing/Landing";
import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Design from "./pages/Design/Design";
import SingleRawProduct from "./pages/SingleRawProduct/SingleRawProduct";
import PostNewDesign from "./pages/PostNewDesign/PostNewDesign";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import RowProducts from "./pages/RowProducts/RowProducts";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Products from "./pages/Products/Products";
import Basket from "./pages/Basket/Basket";
import Pardakht from "./pages/Pardakht/Pardakht";

function App() {
  return (
    // <Layout>
    //   <Landing />
    // </Layout>

    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/Learn" element={<Design />} />
        <Route path="/SingleRawProduct/:slug" element={<SingleRawProduct />} />
        <Route path="/SingleProduct/:slug" element={<SingleProduct />} />
        <Route path="/Design/:slug" element={<PostNewDesign />} />
        <Route path="/rowproducts" element={<RowProducts />} />
        <Route path="/products" element={<Products />} />

        <Route path="/dashboard" element={<DashboardLayout />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/Pardakht" element={<Pardakht />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
