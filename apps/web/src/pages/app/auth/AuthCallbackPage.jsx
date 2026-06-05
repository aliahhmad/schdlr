import { Navigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { useEffect, useState } from "react";

function AuthCallbackPage() {
  const auth = useAuth();
  const [status, setStatus] = useState("syncing");

  useEffect(() => {
    if (auth.isLoading || !auth.isAuthenticated || !auth.user) return;

    async function syncUser() {
      try {
        const idToken = auth.user.id_token;

        if (!idToken) throw new Error("Missing ID token");

        const res = await fetch("http://localhost:3000/dev/auth/sync-user", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        if (!res.ok) throw new Error(`Sync failed: ${res.status}`);

        setStatus("done");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    }

    syncUser();
  }, [auth.isLoading, auth.isAuthenticated, auth.user]);

  if (auth.isLoading || auth.activeNavigator === "signinRedirect") {
    return <div>Completing sign in...</div>;
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (status === "error") {
    return <div>Could not set up your account. Please try again.</div>;
  }

  if (status === "syncing") {
    return <div>Setting up your account...</div>;
  }

  return <Navigate to="/app/dashboard" replace />;
}

export default AuthCallbackPage;