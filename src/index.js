import path from 'path';
import * as fs from 'fs';
import diff from './diff.js';
import formatter from './formatters/formatter.js';
import parses from './funcParse.js';

const extractionData = (way) => {
  const format = path.extname(way);
  const obj = fs.readFileSync(way, 'utf-8');
  return parses(obj, format);
};

const gendiff = (file1, file2, format = 'stylish') => {
  const data1 = extractionData(file1);
  const data2 = extractionData(file2);
  const callDiff = diff(data1, data2);
  return formatter(callDiff, format);
};
export default gendiff;
