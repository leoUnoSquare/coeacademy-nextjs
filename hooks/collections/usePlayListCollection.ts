import { db } from "@/lib/firebase";
import { DATABASE_COLLECTIONS, IPlayListCollection } from "@/lib/types";
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { getServerSession } from "next-auth";

export default function usePlayListCollection() {
  const playlistsCollection = collection(db, DATABASE_COLLECTIONS.playlists);
  const playlistsQuery = query(playlistsCollection);

  const getPlayLists = async () => {
    const snapshots = await getDocs(playlistsQuery);
    return snapshots.docs.map((doc) => ({
      ...(doc.data() as IPlayListCollection),
      id: doc.id,
    }));
  };

  const createPlayList = async (data: IPlayListCollection) => {
    const session = await getServerSession();
    console.log('session', session)
    const sessionUserName = session?.user?.name;
    const sessionUserEmail = session?.user?.email;
    const createdAt = Timestamp.now();
    const newPlaylist = {
      ...data,
      owner: {
        name: sessionUserName || '',
        email: sessionUserEmail,
      },
      createdAt,
    };
    console.log('create playlist', newPlaylist)
    const createdPlayList = await addDoc(playlistsCollection, newPlaylist);
    return createdPlayList;
  };

  return { getPlayLists, createPlayList };
}
