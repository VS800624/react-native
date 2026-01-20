

export const uriToBlob = async (uri: string): Promise<Blob> => {
  // Read local file using fetch:
  const res = await fetch(uri);
  // Convert response to Blob:
  return await res.blob();
};
