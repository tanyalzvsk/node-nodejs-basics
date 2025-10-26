import path from "path";
import fs from "fs";
import { createHash } from "crypto";

const filePath = path.join(process.cwd(), "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(hash);

  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString("hex"));
    }
  });
};

await calculateHash();
