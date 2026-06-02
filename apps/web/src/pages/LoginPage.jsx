import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import PageFooter from "../layout/PageFooter";

function LoginPage() {
  const auth = useAuth();

  return (
    <div className="d-flex flex-column min-vh-100 bg-body-tertiary">
      <main className="d-flex flex-grow-1 align-items-center justify-content-center py-4">
        <div className="form-signin w-100 m-auto">
          <img
            src="./../public/logo/schdlr_logo_1_2_blue.png"
            alt="schdlr logo"
            height="57"
            className="mb-4 border rounded-2"
          />
          <h1 className="h3 mb-3 fw-normal">Sign in</h1>
          <p className="text-body-secondary">
            Sign in to your account through Cognito.
          </p>
          <button
            className="btn btn-primary w-100 py-2"
            type="button"
            onClick={() => auth.signinRedirect()}
          >
            Sign in with Cognito
          </button>
          <p className="mt-3 mb-0 text-body-secondary">
            Need an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}

export default LoginPage;
