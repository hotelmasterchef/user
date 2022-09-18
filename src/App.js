import "./app.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
