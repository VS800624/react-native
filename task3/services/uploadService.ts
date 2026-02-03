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
  const { data: sessionData } = await supabase.auth.getSession();
  if (!sessionData.session) {
    throw new Error("User not authenticated");
  }

  const accessToken = sessionData.session.access_token;

  // 1) File extension
  const fileExt = media.type === "image" ? "jpg" : "mp4";
  const fileName = `${Date.now()}.${fileExt}`;

  // 2) FOLDER LOGIC 
  const folder =
    media.type === "image" ? "images" : "videos";

  const filePath = `${folder}/${fileName}`;

  // 3) FormData
  const formData = new FormData();
  formData.append("file", {
    uri: media.uri,
    name: fileName,
    type:
      media.mimeType ??
      (media.type === "image" ? "image/jpeg" : "video/mp4"),
  } as any);

  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;

  // 4) Upload to SUPABASE (NOT LOCAL)
  const res = await fetch(
    `${supabaseUrl}/storage/v1/object/media/${filePath}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  // 5) Public URL
  return `${supabaseUrl}/storage/v1/object/public/media/${filePath}`;
};
