import fs from "fs/promises";
import path from "path";

const content = "I am fresh and young";
const filePath = path.join(process.cwd(), "files", "fresh.txt");

const create = async () => {
  try {
    await fs.access(filePath);
    console.error("FS operation failed");
  } catch (err) {
    await fs.writeFile(filePath, content);
  }
};

await create();
