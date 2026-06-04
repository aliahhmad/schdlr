export const cognitoClientId = "6ihn59s3ej9g283qmevldj791r";
export const cognitoDomain =
  "https://us-east-2g2hytc2gd.auth.us-east-2.amazoncognito.com";

const appOrigin = window.location.origin;
const redirectUri = `${appOrigin}/callback`;
const logoutUri = `${appOrigin}/login`;
const scope = "email openid phone";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_G2Hytc2gd",
  client_id: cognitoClientId,
  redirect_uri: redirectUri,
  post_logout_redirect_uri: logoutUri,
  response_type: "code",
  scope,
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

export function getCognitoLogoutUrl() {
  const params = new URLSearchParams({
    client_id: cognitoClientId,
    logout_uri: logoutUri,
  });

  return `${cognitoDomain}/logout?${params.toString()}`;
}

export function getCognitoSignupUrl() {
  const params = new URLSearchParams({
    client_id: cognitoClientId,
    response_type: "code",
    scope,
    redirect_uri: redirectUri,
  });

  return `${cognitoDomain}/signup?${params.toString()}`;
}

export default cognitoAuthConfig;
