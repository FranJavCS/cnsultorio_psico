"use client";
import {
  Card,
  Button,
  CardBody,
  Input,
  Spinner,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebaseConfig";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*   const [error, setError] = useState(null); */

  const [user, isLoading] = useAuthState(auth);

  const router = useRouter();

  if (user) {
    router.push("/");
  }

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(email, password);

    if (!loading && !error && result) {
      router.push("/");
    }
  };

  return (
    <section className="flex items-center justify-center ">
      {!isLoading && !user ? (
        <Card>
          <CardBody className="p-8 w-96 max-w-md">
            <div>
              <h1 className="text-2xl font-bold mb-6 text-center text-primary">
                Login
              </h1>
              <Input
                fullWidth
                className="p-2 mb-4 "
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                fullWidth
                className="p-2 mb-4"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 mb-5">{error.message}</p>}

              <div className="mb-4 2-full text-center">
                <Link href="/registrarme">Registrarme</Link>
              </div>

              <Button
                fullWidth
                color="primary"
                isLoading={loading}
                size="lg"
                onClick={() => handleLogin(email, password)}
              >
                Login
              </Button>
            </div>
          </CardBody>
        </Card>
      ) : (
        <Spinner />
      )}
    </section>
  );
}
