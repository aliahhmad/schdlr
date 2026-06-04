import { CognitoJwtVerifier } from "aws-jwt-verify";

export const verifier = CognitoJwtVerifier.create({
  userPoolId: "us-east-2_G2Hytc2gd",
  clientId: "6ihn59s3ej9g283qmevldj791r",
  tokenUse: "id",
});
