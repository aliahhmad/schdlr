import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { AuthProvider } from "react-oidc-context";
import cognitoAuthConfig from "./config/cognitoAuthConfig";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
