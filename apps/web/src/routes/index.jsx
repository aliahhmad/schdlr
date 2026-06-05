import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

// Marketing pages
import HomePage from "../pages/marketing/HomePage";

// Auth pages
import LoginPage from "../pages/app/auth/LoginPage";
import SignupPage from "../pages/app/auth/SignupPage";
import AuthCallbackPage from "../pages/app/auth/AuthCallbackPage";
import LogoutCallbackPage from "../pages/app/logout/LogoutCallbackPage";

// App pages (protected)
import DashboardPage from "../pages/app/DashboardPage";

export function AppRoutes() {
  return (
    <Routes>
      {/* Marketing routes (public) */}
      <Route path="/" element={<HomePage />} />

      {/* Auth routes (public) */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route path="/auth/callback" element={<AuthCallbackPage />} />
      <Route path="/logout/callback" element={<LogoutCallbackPage />} />

      {/* App routes (protected) */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <Navigate to="/app/dashboard" replace />
          </ProtectedRoute>
        }
      />
      <Route
        path="/app/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
