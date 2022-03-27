import { getWay, parses } from './funcParse.js';
import diff from './diff.js';
import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';

export default function gendiff(file1, file2, format = 'stylish') {
  const normalisedWay1 = file1[0] === '/' || file1[0] === '~' ? file1 : getWay(file1);
  const normalisedWay2 = file2[0] === '/' || file2[0] === '~' ? file2 : getWay(file2);
  const parseFile1 = parses(normalisedWay1);
  const parseFile2 = parses(normalisedWay2);
  const callDiff = diff(parseFile1, parseFile2);
  if (format === 'stylish') {
    return stylish(callDiff);
  }
  if (format === 'plain') {
    return plain(callDiff);
  }
  if (format === 'json') {
    return JSON.stringify(callDiff, null, ' ');
  }
  throw new Error(`Invalid this exist ${format}`);
}
