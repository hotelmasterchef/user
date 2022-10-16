import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";

import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App";

import AppProvider from "./contextApi/Context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ToastProvider transitionDuration={220} autoDismiss autoDismissTimeout={5000} placement="top-center">
        <App />
      </ToastProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
