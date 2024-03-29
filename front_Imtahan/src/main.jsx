import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SearchProvider from "./context/searchContext.jsx";
import WishlistProvider from "./context/wishlistContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import BasketProvider from "./context/BasketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BasketProvider>
        <WishlistProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </WishlistProvider>
      </BasketProvider>
    </HelmetProvider>
  </React.StrictMode>
);
