# Overall flow

User taps Pick Image

Expo ImagePicker returns file URI

URI stored in state

User taps Upload

URI → Blob

Blob uploaded to Supabase Storage

Supabase returns public URL

URL logged / can be saved to DB