import { useCallback } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signIn } from "next-auth/react";

interface ICredentials {
  email: string;
  password: string;
}

export default function useAuth() {
  const signInWithGoogle = useCallback(() => {
    signIn("google");
  }, []);

  const signInWithCredentials = useCallback(
    ({ email, password }: ICredentials) => {
      signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    },
    []
  );

  const createUserCredentials = useCallback(
    ({ email, password }: ICredentials) => {
      return createUserWithEmailAndPassword(auth, email, password);
    },
    []
  );

  return { signInWithGoogle, signInWithCredentials, createUserCredentials };
}
