import { Transform } from "stream";

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().split("").reverse().join(""));
  },
});

const transform = async () => {
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
