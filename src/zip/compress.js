import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";
import { createGzip } from "zlib";

const filePath = path.join(process.cwd(), "files", "fileToCompress.txt");
const compressedFilePath = path.join(process.cwd(), "files", "archive.gz");

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(filePath);
  const destination = createWriteStream(compressedFilePath);

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("failed to compress", err);
      process.exitCode = 1;
    }
  });
};

await compress();
