import { supabase } from "@/supabase/client";
import { PickedMedia } from "@/types/media";
import { uriToBlob } from "@/utils/helper";

// Receives selected media
export const uploadToSupabase = async (media: PickedMedia) => {
  const blob = await uriToBlob(media.uri, media.mimeType)
  // Convert local file to Blob, Supabase needs Blob, not URI
  // A Blob simply means big binary data.
  // Blob in Supabase is binary file data (like images or videos) stored in Supabase Storage buckets instead of database tables.

  // Decide file extension
  const fileExt = media.type === "image" ? "jpg" : "mp4"
  // Create unique filename using timestamp
  const fileName = `${Date.now()}.${fileExt}`

  // Upload file to media bucket
  const {error} = await supabase.storage
    .from("media")
    .upload(fileName, blob, {
      contentType: 
      // media.type === "image" ? "image/jpeg" : "video/mp4",
       media.mimeType,
      // Tell Supabase what type of file it is
      // upsert: true,
    })

    if (error) throw error

    // Generate public access URL
    const {data} = supabase.storage
      .from("media")
      .getPublicUrl(fileName)

      // Return URL to UI
  return data.publicUrl
}