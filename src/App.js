import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
// import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
// import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Login } from "./components/users/login/Login";
import { RegisterPage } from "./pages/RegisterPage";
import { useEffect, useState } from "react";
import { getAllBooks } from "./services/getAllBooks/getAllBooks";
import { ProductPage } from "./pages/ProductPage";

function App() {
  const [infoCard, setInfoCard] = useState({});

  useEffect(() => {
    getAllBooks().then((data) => {
      setInfoCard(data);
    });
  }, []);

  const { books } = infoCard;

  return (
    <BrowserRouter>
      <CssBaseline />
         
      <Routes>
        {/* default route */}
        <Route path="/" element={<Home infobook={books} />}>
        </Route>
        <Route path="/categoria/libros" element={<div>dedede</div>} />
        <Route path="/categoria/libros/:isbn" element={<ProductPage />}/>
        <Route path="user" element="" />
        <Route path="login" element={<Login />} />
        <Route path="user/register" element={<RegisterPage />} />
        <Route />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
