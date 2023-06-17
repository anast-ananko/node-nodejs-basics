import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { isExists } from './isExists.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderPath = join(__dirname, 'files');

const list = async () => {
  if (!(await isExists(folderPath))) {
    throw new Error('FS operation failed');
  } 

	try {
		const files = await readdir(folderPath);
    console.log(files);
  } catch (error) {
		throw new Error('FS operation failed');
  }
};

await list();
