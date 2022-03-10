import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'fs';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFile(getFixturePath(filename), 'utf-8');

const parses = (fullWay) => {
  const format = path.extname(fullWay);
  let result;
  if (format === 'yaml' || format === 'yml') {
    result = yaml.load(fullWay);
  } else {
    result = JSON.parse(fullWay);
  }
  return result;
};
export {
  readFixtureFile, getFixturePath, parses,
};
