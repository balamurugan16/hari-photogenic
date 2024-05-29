"use server"

import { supabase } from "@/lib/supabase/supabase";
import { notFound } from "next/navigation";
import { getImages } from "../cloudinary";

export async function getAllAlbums() {
  const response = await supabase.from("album").select();
  return response.data ?? [];
}

export async function getHighlightAlbums() {
  const response = await supabase.from("album").select().limit(3)
  return response.data ?? [];
}

export async function getAlbum(folder: string) {
  const response = await supabase
    .from("album")
    .select()
    .eq("folder_name", folder);

  if (!response.data) {
    notFound();
  }

  const album = response.data[0];

  const images = await getImages(album.folder_name);

  return [album, images] as const;
}
