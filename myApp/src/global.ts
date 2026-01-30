// 🔥 Prevent Supabase Realtime from loading Node ws
(global as any).WebSocket = undefined;
