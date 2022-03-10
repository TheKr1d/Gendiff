import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const way = process.cwd();

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFile(getFixturePath(filename), 'utf-8');

const getPath = (filename) => path.resolve(way, filename);
const readFile = (filename) => fs.readFile(getPath(filename), 'utf-8');

export {
  readFixtureFile, getFixturePath, getPath, readFile,
};
