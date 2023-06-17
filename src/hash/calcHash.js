import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');

  try {
    const content = await readFile(filePath);
    hash.update(content);

    const hashContent = hash.digest('hex');
    console.log(hashContent);
  } catch (error) {
		throw new Error('Operation failed');
  }
};

await calculateHash();