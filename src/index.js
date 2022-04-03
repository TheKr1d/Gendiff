import diff from './diff.js';
import getDataIsFormatter from './formatter.js';

export default function gendiff(file1, file2, format = 'stylish') {
  const callDiff = diff(file1, file2);
  return getDataIsFormatter(callDiff, format);
}
