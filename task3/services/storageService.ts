import { supabase } from "@/supabase/client";

export const listFiles = async (folder:string) => {
  const { data, error } = await supabase
    .storage
    .from("media")
    .list(folder, {
      limit: 100,
      offset: 0,
    });

  console.log("LIST ERROR:", error);
  console.log("LIST DATA:", data);

  return data || [];
};