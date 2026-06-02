import { Link } from "react-router-dom";
import PageFooter from "../layout/PageFooter";
import { getCognitoSignupUrl } from "../config/cognitoAuthConfig";

function SignupPage() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-body-tertiary">
      <main className="d-flex flex-grow-1 align-items-center justify-content-center py-4">
        <div className="form-signup w-100 m-auto">
          <img
            src="./../public/logo/schdlr_logo_1_2_blue.png"
            alt="schdlr logo"
            height="57"
            className="mb-4 border rounded-2"
          />
          <h1 className="h3 mb-3 fw-normal">Sign up</h1>
          <p className="text-body-secondary">
            Create a new account through Cognito.
          </p>
          <a
            className="btn btn-primary w-100 py-2"
            href={getCognitoSignupUrl()}
          >
            Sign up with Cognito
          </a>
          <p className="mt-3 mb-0 text-body-secondary">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}

export default SignupPage;
