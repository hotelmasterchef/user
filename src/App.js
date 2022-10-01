import "./app.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useGlobalContext } from "./contextApi/Context";
import { Alert, Spinner } from "reactstrap";
import { useEffect } from "react";
import Cart from "./pages/Cart";

function App() {
  const { loading, fetchAll } = useGlobalContext();
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      {/* <div className="alert_container">
        <div>
          <Alert color="primary">Hey! Pay attention.</Alert>
        </div>
      </div> */}
      {loading ? (
        <>
          <div className="loader_home">
            <Spinner color="primary">Loading...</Spinner>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
