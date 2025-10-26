import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "files", "fileToRead.txt");

const read = async () => {
  try {
    await fs.access(filePath);
   const fileContent = await fs.readFile(filePath, "utf8");
    console.log(fileContent);
  } catch (err) {
    console.error("FS operation failed");
  }
};

await read();
