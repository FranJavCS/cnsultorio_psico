// components/Login.js
import { Card, Button, CardBody, Input } from "@nextui-org/react";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = getAuth();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleLogin = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card>
        <CardBody className="p-8 w-96 max-w-md">
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">Registrarme</h1>
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

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <Button
              fullWidth
              color="primary"
              isLoading={loading}
              size="lg"
              onClick={() => handleLogin(email, password)}
            >
              Registrarme
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
