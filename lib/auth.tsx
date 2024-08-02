// AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
/* import nookies from "nookies";
 */
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export async function login(email, password) {
  try {
    console.log(email, password);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User logged in");
    const user = userCredential.user;
    console.log(user);
    const idToken = await user.getIdToken();

    /*     nookies.set(undefined, "token", idToken, { path: "/" }); */

    return user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}
