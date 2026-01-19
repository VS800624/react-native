import { supabase } from "@/supabase/client";
import { PickedMedia } from "@/types/media";
import { uriToBlob } from "@/utils/helper";

export const uploadToSupabase = async (media: PickedMedia) => {
  const blob = await uriToBlob(media.uri)

  const fileExt = media.type === "image" ? "jpg" : "mp4"
  const fileName = `${Date.now()}.${fileExt}`

  const {error} = await supabase.storage
    .from("media")
    .upload(fileName, blob, {
      contentType: 
      media.type === "image" ? "image/jpeg" : "video/mp4",
    })

    if (error) throw error

    const {data} = supabase.storage
      .from("media")
      .getPublicUrl(fileName)

  return data.publicUrl
}