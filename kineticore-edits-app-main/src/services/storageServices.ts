import { supabase } from "../supabase/client";

export const listFiles = async (folder: string) => {
  const { data, error } = await supabase
    .storage
    .from("media")
    .list(folder, {
      limit: 100,
      offset: 0,
    });

  if (error) {
    console.log("LIST ERROR:", error);
    return [];
  }

  return data || [];
};
