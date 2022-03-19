import { getWay, parses } from './functions.js';
import genD from './diff.js';
import formatter from './formatter.js';

export default function gendiff(file1, file2, format) {
  const normalisedWay1 = file1[0] === '/' ? file1 : getWay(file1);
  const normalisedWay2 = file2[0] === '/' ? file2 : getWay(file2);
  const parseFile1 = parses(normalisedWay1);
  const parseFile2 = parses(normalisedWay2);
  const callDiff = genD(parseFile1, parseFile2);
  return formatter(callDiff);
}
