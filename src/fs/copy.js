import fs from "fs/promises";
import path from "path";

const sourceFolderPath = path.join(process.cwd(), "files");
const destFolderPath = path.join(process.cwd(), "files-copy");

const copy = async () => {
  try {
    await fs.access(sourceFolderPath);
    await fs.access(destFolderPath);
    console.error("FS operation failed");
  } catch (err) {
    await fs.cp(sourceFolderPath, destFolderPath, { recursive: true });
  }
};

await copy();
