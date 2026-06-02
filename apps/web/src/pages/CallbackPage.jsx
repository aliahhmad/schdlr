import { Navigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";

function CallbackPage() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Completing sign in...</div>;
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Navigate to="/login" replace />;
}

export default CallbackPage;
