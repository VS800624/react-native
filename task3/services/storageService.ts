import { supabase } from "@/supabase/client";

export const listFiles = async (folder: string) => {
  const { data, error } = await supabase.storage
    .from("media")
    .list(folder);

  if (error) throw error;
  return data;
};

