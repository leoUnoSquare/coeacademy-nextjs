import { db } from "@/lib/firebase";
import { DATABASE_COLLECTIONS, IUserCollection } from "@/lib/types";
import { addDoc, collection } from "firebase/firestore";
import { useCallback } from "react";

export default function useUserCollection() {
  const usersCollection = collection(db, DATABASE_COLLECTIONS.users);

  const createUser = useCallback((data: IUserCollection) => {
    addDoc(usersCollection, data).then((createdUser) =>
      console.log({ createdUser })
    );
  }, []);

  return { createUser };
}
