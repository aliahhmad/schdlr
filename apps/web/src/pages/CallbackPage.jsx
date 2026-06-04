import { Navigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { useEffect, useState } from "react";

function CallbackPage() {
  const auth = useAuth();
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    const syncUser = async () => {
      if (auth.isAuthenticated && auth.user && !synced) {
        const idToken = auth.user.id_token;

        if (!idToken) {
          console.error("Missing Cognito ID token");
          return;
        }

        await fetch("http://localhost:3000/dev/auth/sync-user", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        setSynced(true);
      }
    };

    syncUser();
  }, [auth.isAuthenticated, auth.user, synced]);

  if (auth.isLoading) {
    return <div>Completing sign in...</div>;
  }

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!synced) {
    return <div>Setting up your account...</div>;
  }

  return <Navigate to="/home" replace />;
}

export default CallbackPage;
