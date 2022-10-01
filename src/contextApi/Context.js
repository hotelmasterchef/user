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

  const fetchAll = async () => {
    setLoading(true);
    let arr = [];
    menusRef
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          arr.push(doc.data());
        });
        console.log(arr);
        setMenus([...arr]);
        setLoading(false);
        setLoading(true);
        let arr2 = [];
        foodsRef
          .get()
          .then((docs) => {
            docs.forEach((doc) => {
              arr2.push(doc.data());
            });
            setFoods([...arr2]);
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
