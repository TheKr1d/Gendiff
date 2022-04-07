import diff from './diff.js';
import getDataIsFormatter from './formatters/formatter.js';
import { parses } from './funcParse.js';

export default function gendiff(file1, file2, format = 'stylish') {
  const parseFile1 = parses(file1);
  const parseFile2 = parses(file2);
  const callDiff = diff(parseFile1, parseFile2);
  return getDataIsFormatter(callDiff, format);
}
