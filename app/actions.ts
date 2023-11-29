"use server";

import { usePlayListCollection } from "@/hooks";
import { IPlayListCollection } from "@/lib/types";
import { newPlaylistFormFields } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export default async function SubmitNewPlaylist(formData: FormData) {
  const data = newPlaylistFormFields.reduce(
    (acc, { id, name }) => ({ ...acc, [name]: formData.get(id) }),
    {}
  );
  const { createPlayList } = usePlayListCollection();

  try {
    await createPlayList(data as IPlayListCollection);
    revalidatePath("/");
    return { msg: "Success" };
  } catch (error) {
    return { msg: "Error" };
  }
}
