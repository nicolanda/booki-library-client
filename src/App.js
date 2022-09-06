import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/navbar/Navbar";
import { RegisterForm } from "./router/users/register/RegisterForm";
import { Login } from "./router/users/login/Login";
import { Home } from "./pages/Home";


function App() {
  return (
      <BrowserRouter>
      <Header />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<RegisterForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App;
