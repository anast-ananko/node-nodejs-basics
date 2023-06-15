import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {     
      const reversedChunk = chunk.toString().split('').reverse().join('');
    
      console.log(reversedChunk);
    
      callback();
    }
  });

  await pipeline(process.stdin, reverseStream, process.stdout);
};

await transform();