import { useEffect } from "react";
import { getCognitoSignupUrl } from "../../../config/cognitoAuthConfig";

function SignupPage() {
  useEffect(() => {
    window.location.href = getCognitoSignupUrl();
  }, []);

  return null;
}

export default SignupPage;
