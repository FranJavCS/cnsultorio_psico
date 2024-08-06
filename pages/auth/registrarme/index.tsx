// components/Login.js
import { Card, Button, CardBody, Input } from "@nextui-org/react";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useAuthState,
} from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();
  const [user, isLoading] = useAuthState(auth);

  const router = useRouter();

  if (user) {
    router.push("/");
  }

  const [createUserWithEmailAndPassword, , isLoadingRegister, registerError] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleRegister = async () => {
    try {
      const user = await createUserWithEmailAndPassword(email, password);

      if (!user) {
        return;
      }

      const result = await updateProfile({
        displayName: username,
        photoURL: avatar,
      });

      setEmail("");
      setPassword("");

      if (!isLoadingRegister && !updating && result) {
        router.push("/");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Card className="border border-indigo-400">
        <CardBody className="p-8 w-96 max-w-md">
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center text-primary">
              Registrarme
            </h1>
            <Input
              fullWidth
              className="p-2 mb-4 "
              color="secondary"
              label="Username"
              type="text"
              value={username}
              variant="bordered"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              fullWidth
              className="p-2 mb-4 "
              color="secondary"
              label="Avatar"
              type="url"
              value={avatar}
              variant="bordered"
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              fullWidth
              className="p-2 mb-4 "
              color="secondary"
              label="Email"
              type="email"
              value={email}
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              fullWidth
              className="p-2 mb-4"
              color="secondary"
              label="Password"
              type="password"
              value={password}
              variant="bordered"
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <Button
              fullWidth
              color="primary"
              isLoading={loading}
              size="lg"
              onClick={() => handleRegister()}
            >
              Registrarme
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
