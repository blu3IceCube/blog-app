import { Client, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

export const storage = new Storage(client);

// Helper function to upload file
export const uploadFile = async (file: File) => {
  try {
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
      ID.unique(),
      file
    );

    // Get file preview URL
    const fileUrl = storage.getFilePreview(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
      response.$id
    );

    return {
      fileId: response.$id,
      fileUrl: fileUrl,
    };
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};
