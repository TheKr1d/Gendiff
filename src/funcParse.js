import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'fs';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const way = process.cwd();

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(filename, 'utf-8');
const getWay = (filename) => path.resolve(way, filename);

const parses = (fullWay) => {
  const format = path.extname(fullWay);
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(readFile(fullWay));
  } else if (format === '.json') {
    return JSON.parse(readFile(fullWay));
  } else {
    throw Error(`This if invalid is ${format}`);
  }
};

export {
  readFile, getFixturePath, parses, getWay,
};
