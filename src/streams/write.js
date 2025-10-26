import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "files", "fileToWrite.txt");

const write = async () => {
  const writableStream = fs.createWriteStream(filePath);
  process.stdin.pipe(writableStream);
};

await write();

