export const blobUrlToBlob = async (blobUrl: string) => {
  try {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error("Error converting blob URL to blob:", error);
  }
};
