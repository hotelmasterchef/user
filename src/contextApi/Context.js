import React, { useState, useEffect, useContext } from "react";
import { menusRef, foodsRef } from "../config/firebase";
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
  useEffect(() => {
    let d = JSON.parse(localStorage.getItem("cart"));
    if (d) setCartProduct([...d]);
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
    setLoading(true);
    let arr = [];
    menusRef
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          arr.push({ ...doc.data(), food: [] });
        });
        setMenus([...arr]);
        setLoading(false);
        setLoading(true);
        let arr2 = [];
        foodsRef
          .get()
          .then((docs2) => {
            docs2.forEach((doc) => {
              arr2.push(doc.data());
            });
            setFoods([...arr2]);
            let nowMenu = [...arr];
            arr?.forEach((m, m_idx) => {
              let filterF = arr2?.filter((f) => f?.menu === m?.name);
              nowMenu[m_idx] = {
                ...m,
                food: filterF,
              };
            });
            setMenus([...nowMenu]);
            setLoading(false);
          })
          .catch((err) => {
            setAlert({
              flag: true,
              type: "error",
              msg: err.message,
            });
            setLoading(false);
          });
      })
      .catch((err) => {
        setAlert({
          flag: true,
          type: "error",
          msg: err.message,
        });
        setLoading(false);
      });
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
