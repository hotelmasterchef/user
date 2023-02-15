import "./app.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useGlobalContext } from "./contextApi/Context";
import { Spinner } from "reactstrap";
import { useEffect } from "react";
import Cart from "./pages/Cart";
import Privacy from "./pages/Privacy";

function App() {
  const { loading, fetchAll } = useGlobalContext();
  useEffect(() => {
    fetchAll();
  }, []);
  useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [loading]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <BrowserRouter>
        <Header />
        {loading ? (
          <div className="loader_home">
            <Spinner color="primary">Loading...</Spinner>
          </div>
        ) : null}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
