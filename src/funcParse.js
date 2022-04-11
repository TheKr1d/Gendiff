import path from 'path';
import * as fs from 'fs';
import yaml from 'js-yaml';

const readFile = (filename) => fs.readFileSync(filename, 'utf-8');

const parses = (way) => {
  const format = path.extname(way);
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(readFile(way));
  }
  if (format === '.json') {
    return JSON.parse(readFile(way));
  }
  throw Error(`This if invalid is ${format}`);
};

export {
  readFile, parses,
};
