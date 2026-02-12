
import {supabase} from '../supabase/client'

// folder creation (createFolder)
// Create folders like Google Drive, Supports: Root folder , nested folder
export async function createFolder(name: string, parentId?: string) {
    const {error} = await supabase.from('folders').insert({
        name,
        parent_id: parentId || null,
    });

    if(error) throw error;
}