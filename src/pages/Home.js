import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/navbar/Navbar";

export const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "350px",
          }}
        >
          <img
            src="images/banner-booki.jpg"
            alt="banner-library"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center bottom",
            }}
          />
        </div>
          <Outlet />
        <div>
          <p>popopopopop</p>
        </div>
      </div>
    </>
  );
};
