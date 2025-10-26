import path from "path";
import fs from "fs";

const filePath = path.join(process.cwd(), "files", "fileToRead.txt");

const read = async () => {
  const readableStream = fs.createReadStream(filePath, { encoding: "utf-8" });
   readableStream.pipe(process.stdout);
};

await read();
