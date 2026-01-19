

export const uriToBlob = async (uri: string): Promise<Blob> => {
  const res = await fetch(uri);
  return await res.blob();
};
