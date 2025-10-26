import fs from "fs/promises";
import path from "path";

const wrongFilePath = path.join(process.cwd(), "files", "wrongFilename.txt");
const rightFilePath = path.join(process.cwd(), "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.access(wrongFilePath);
    await fs.access(rightFilePath);
    console.error("FS operation failed");
  } catch (err) {
    await fs.rename(wrongFilePath, rightFilePath);
  }
};

await rename();
