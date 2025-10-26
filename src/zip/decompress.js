import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGunzip } from "zlib";

const compressedFilePath = path.join(process.cwd(), "files", "archive.gz");
const decompressedFilePath = path.join(process.cwd(), "files", "fileToCompress.txt");

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream(compressedFilePath);
  const destination = createWriteStream(decompressedFilePath);

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error("failed to decompress", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
