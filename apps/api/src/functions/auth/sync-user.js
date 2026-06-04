import { verifier } from "../../lib/auth.js";
import { prisma } from "../../lib/prisma.js";

export async function handler(event) {
  try {
    const authHeader =
      event.headers.authorization || event.headers.Authorization;

    if (!authHeader) {
      return {
        statusCode: 401,
        body: JSON.stringify({
          message: "Missing token",
        }),
      };
    }

    const token = authHeader.replace(/^Bearer\s+/i, "");
    const payload = await verifier.verify(token);

    if (!payload.email) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "ID token missing email claim",
        }),
      };
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ cognitoSub: payload.sub }, { email: payload.email }],
      },
    });

    const user = existingUser
      ? await prisma.user.update({
          where: { id: existingUser.id },
          data: {
            cognitoSub: payload.sub,
            email: payload.email,
            phone: payload.phone_number,
          },
        })
      : await prisma.user.create({
          data: {
            cognitoSub: payload.sub,
            email: payload.email,
            phone: payload.phone_number,
          },
        });

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 401,
      body: JSON.stringify({
        message: "Unauthorized",
      }),
    };
  }
}
