export const cognitoClientId = "6ihn59s3ej9g283qmevldj791r";

export const cognitoDomain =
  "https://us-east-2g2hytc2gd.auth.us-east-2.amazoncognito.com";

const appOrigin = window.location.origin;

export const loginCallbackUri = `${appOrigin}/auth/callback`;
export const logoutCallbackUri = `${appOrigin}/logout/callback`;

const scope = "openid email phone";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_G2Hytc2gd",
  client_id: cognitoClientId,
  redirect_uri: loginCallbackUri,
  post_logout_redirect_uri: logoutCallbackUri,
  response_type: "code",
  scope,
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

export function getCognitoLogoutUrl() {
  const params = new URLSearchParams({
    client_id: cognitoClientId,
    logout_uri: logoutCallbackUri,
  });

  return `${cognitoDomain}/logout?${params.toString()}`;
}

export function getCognitoSignupUrl() {
  const params = new URLSearchParams({
    client_id: cognitoClientId,
    response_type: "code",
    scope,
    redirect_uri: loginCallbackUri,
  });

  return `${cognitoDomain}/signup?${params.toString()}`;
}

export default cognitoAuthConfig;