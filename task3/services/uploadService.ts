// import { uriToBlob } from "@/utils/helper";
import { supabase } from "@/supabase/client";
import { PickedMedia } from "@/types/media";

// export const uploadToSupabase = async (media: PickedMedia) => {
//   // Get session
//   const { data: sessionData } = await supabase.auth.getSession();

//   if (!sessionData.session) {
//     throw new Error("User not authenticated");
//   }

//   // Extracts the JWT access token, this token proves the user is logged in, we will send this token while uploading the file
//   const accessToken = sessionData.session.access_token;

//   //  Prepare file
//   const fileExt = media.type === "image" ? "jpg" : "mp4";
//   const fileName = `${Date.now()}.${fileExt}`;

//   // FormData is a JavaScript object used to send data (especially files) from your app to a server using HTTP requests.
//   // FormData is used to send files and form values to a server in multipart/form-data format.
//   const formData = new FormData();

  
//   // Adds a file to the form, "file" is the required key name for Supabase storage
//   formData.append("file", {
//     uri: media.uri,
//     name: fileName,
//     type:
//       media.mimeType ??
//       (media.type === "image" ? "image/jpeg" : "video/mp4"),
//   } as any);

//   //  Upload using USER JWT (IMPORTANT)
//   const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;

//   // Upload file to Supabase Storage
//   const res = await fetch(
//     `${supabaseUrl}/storage/v1/object/media/${fileName}`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${accessToken}`, // FIX
//       },
//       body: formData,
//     }
//   );

//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error(text);
//   }

//   //  Return public URL
//   return `${supabaseUrl}/storage/v1/object/public/media/${fileName}`;
// };

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

