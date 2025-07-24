import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: {
    client_email: process.env.GCS_CLIENT_EMAIL,
    private_key: process.env.GCS_PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
  },
});
const bucketName = process.env.BUCKET_NAME!;

export async function getAllFiles() {
  const [fileList] = await storage.bucket(bucketName).getFiles();
  const files = await Promise.all(
    fileList.map(async (file) => {
      const [url] = await file.getSignedUrl({
        action: "read",
        expires: Date.now() + 1000 * 60 * 60, // 1 hora
      });
      return { name: file.name, url };
    }),
  );
  return files;
}

export async function getFileByName(fileName: string) {
  const file = storage.bucket(bucketName).file(fileName);
  if (!(await file.exists())) {
    throw new Error(`File ${fileName} does not exist`);
  }
  const [url] = await file.getSignedUrl({
    action: "read",
    expires: Date.now() + 1000 * 60 * 60, // 1 hora
  });
  return { name: file.name, url };
}
