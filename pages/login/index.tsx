// components/Login.js
import { useAuth } from "@/lib/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();

  const handleLogin = async () => {
    console.log("Logging in...");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in successfully");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
