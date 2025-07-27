import "./App.css";
import Task1 from "./task1/task1";
import Task2 from "./task2/task2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./task3/components/navbar/navbar";
import ProductsScreen from "./task3/components/productsScreen/productsScreen";
import LoginForm from "./task3/components/login/loginForm";
import NotFound from "./task3/components/notFound/notFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/products" element={<ProductsScreen />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
