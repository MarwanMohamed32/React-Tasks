import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./task4/components/navbar/navbar";
import ProductsScreen from "./task4/components/productsScreen/productsScreen";
import ProductDetails from "./task4/components/productDetails/productDetails";
import LoginForm from "./task4/components/login/loginForm";
import NotFound from "./task4/components/notFound/notFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/products" element={<ProductsScreen />}></Route>
          <Route
            path="/products/:name/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
