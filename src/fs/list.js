import fs from "fs/promises";
import path from "path";

const folderPath = path.join(process.cwd(), "files");

const list = async () => {
  try {
    await fs.access(folderPath);
    const filesArr = await fs.readdir(folderPath);
    console.log(filesArr);
  } catch (err) {
    console.error("FS operation failed");
  }
};

await list();
