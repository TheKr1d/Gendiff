import path from 'path';
import * as fs from 'fs';
import yaml from 'js-yaml';

const getThereWay = process.cwd();

const readFile = (filename) => fs.readFileSync(filename, 'utf-8');
const getWay = (filename) => path.resolve(getThereWay, filename);

const parses = (way) => {
  const fullWay = getWay(way);
  const format = path.extname(fullWay);
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(readFile(fullWay));
  }
  if (format === '.json') {
    return JSON.parse(readFile(fullWay));
  }
  throw Error(`This if invalid is ${format}`);
};

export {
  readFile, parses, getWay,
};
