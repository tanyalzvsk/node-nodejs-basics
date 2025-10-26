import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (err) {
    console.error("FS operation failed");
  }
};

await remove();
