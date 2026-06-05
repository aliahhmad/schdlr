import { useAuth } from "react-oidc-context";
import { getCognitoLogoutUrl } from "../../config/cognitoAuthConfig";

function HomePage() {
  const auth = useAuth();

  function handleSignOut() {
    const logoutUrl = getCognitoLogoutUrl();
    window.location.href = logoutUrl;
  }

  return (
    <div className="container py-5">
      <h1>Welcome to the Home Page!</h1>
      <p>This is the main landing page of our web application.</p>
      <p className="text-body-secondary">
        Signed in as {auth.user?.profile.email}
      </p>
      <button className="btn btn-outline-primary" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
}

export default HomePage;
