import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
// import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
// import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Login } from "./components/users/login/Login";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        {/* default route */}
        <Route path="/" element={<Home />}>
          <Route index element={<div>hello nico</div>} />
          <Route index element={<div>hellow sebas</div>} />
          <Route path="/libros" element={<div>Book</div>} />
        </Route>
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


// url/
//  / = index
// Home = 

// <header></header>
// <div>Book</div>
// <footer></footer>