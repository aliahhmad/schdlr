import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

function LoginPage() {
  const auth = useAuth();

  useEffect(() => {
    auth.signinRedirect();
  }, [auth]);

  return null;
}

export default LoginPage;
