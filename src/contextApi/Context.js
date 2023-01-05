import React, { useState, useEffect, useContext } from "react";
import { menusRef, foodsRef } from "../config/firebase";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState({
    flag: false,
    type: "",
    msg: "",
  });
  const [loading, setLoading] = useState(false);
  const [menus, setMenus] = useState([]);
  const [foods, setFoods] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [popularFoods, setPopularFoods] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    let d = JSON.parse(localStorage.getItem("cart"));
    if (d) setCartProduct([...d]);
    let adrs = JSON.parse(localStorage.getItem("addressList"));
    if (adrs) setLocationList([...adrs]);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProduct));
  }, [cartProduct]);
  const removeFromCart = (id) => {
    let nowCart = cartProduct?.filter((cp) => cp?._id !== id);
    setCartProduct([...nowCart]);
  };
  const [locaitonList, setLocationList] = useState([]);
  const fetchAll = async () => {
    const response = await axios("https://raw.githubusercontent.com/hotelmasterchefdatabase/data/main/data.json");
    setFoods([...response?.data?.foods]);
    setMenus([...response?.data?.menus]);
    setPopularFoods([...response?.data?.popularFoods]);
    setBanners([...response?.data?.banners]);
  };
  return (
    <AppContext.Provider
      value={{
        foods,
        setFoods,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        alert,
        setAlert,
        loading,
        setLoading,
        menus,
        setMenus,
        fetchAll,
        cartProduct,
        setCartProduct,
        removeFromCart,
        locaitonList,
        setLocationList,
        setPopularFoods,
        popularFoods,
        banners,
        setBanners
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
