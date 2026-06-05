import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";

function LogoutCallbackPage() {
  const auth = useAuth();

  useEffect(() => {
    auth.removeUser();
  }, [auth]);

  return <Navigate to="/" replace />;
}

export default LogoutCallbackPage;