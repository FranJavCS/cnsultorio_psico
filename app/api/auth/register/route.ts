// pages/api/register.js

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

import { auth, db } from "@/lib/firebaseConfig";
import logger from "@/lib/logger";

function timeout(ms: number) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
    }, ms);
  });
}

export async function POST(req: NextRequest) {
  logger.info("Inicia POST /api/auth/register");

  const { email, password, fullName, avatar, username } = await req.json();

  try {
    logger.info("Creando usuario en Firebase");
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    logger.info("Usuario creado en Firebase");
    const user = userCredential.user;

    logger.info("Guardando usuario en Firestore");
    await Promise.race([
      setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        fullName: fullName,
        avatar: avatar,
        username: username,
      }),
      timeout(25000), // 5 segundos de timeout
    ]);
    logger.info("Usuario guardado en Firestore");
    const token = await user.getIdToken();

    return NextResponse.json({ token });
  } catch (error: any) {
    logger.error(error.message);

    return NextResponse.json({ error: error.message }), { status: 500 };
  }
}
