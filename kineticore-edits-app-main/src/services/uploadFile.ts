import { PickedMedia } from "../../types/media";
import { supabase } from "../supabase/client";

export const uploadToSupabase = async (media: PickedMedia) => {
  // 1. Get session
  const { data: sessionData } = await supabase.auth.getSession();

  if (!sessionData.session) {
    throw new Error("User not authenticated");
  }

  // 2. Convert URI → Blob
  const response = await fetch(media.uri);
  const blob = await response.blob();

  // 3. File info
  const fileExt = media.type === "image" ? "jpg" : "mp4";
  const fileName = `${Date.now()}.${fileExt}`;

  const folder = media.type === "image" ? "images" : "videos";
  const filePath = `${folder}/${fileName}`;

  // 4. Upload using Supabase SDK
  const { data, error } = await supabase.storage
    .from("media")
    .upload(filePath, blob, {
      contentType:
        media.mimeType ??
        (media.type === "image" ? "image/jpeg" : "video/mp4"),
      upsert: false,
    });

  if (error) {
    console.log("UPLOAD ERROR:", error);
    throw error;
  }

  // 5. Get public URL
  const { data: publicUrl } = supabase.storage
    .from("media")
    .getPublicUrl(filePath);

  return publicUrl.publicUrl;
};

