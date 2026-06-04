import { Navigate, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CallbackPage from "./pages/CallbackPage";
import { Toaster } from "react-hot-toast";
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            auth.isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/home"
          element={
            auth.isAuthenticated ? (
              <HomePage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
