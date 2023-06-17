import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { isExists } from './isExists.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  if (!(await isExists(filePath))) {
    throw new Error('FS operation failed');
  } 

	try {
    await rm(filePath);
  } catch (error) {
		throw new Error('FS operation failed');
  }
};

await remove();
