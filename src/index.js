/* eslint-disable max-len */
import _ from 'lodash';
import { getWay, parses } from './functions.js';

export default function gendiff(file1, file2) {
  const normalisedWay1 = file1[0] === '/' ? file1 : getWay(file1);
  const normalisedWay2 = file2[0] === '/' ? file2 : getWay(file2);
  const parseFile1 = parses(normalisedWay1);
  const parseFile2 = parses(normalisedWay2);
  const keys = _.sortBy(_.uniqBy(_.concat(_.keys(parseFile1), _.keys(parseFile2))));
  const chekData = keys.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(parseFile1, key) && Object.prototype.hasOwnProperty.call(parseFile2, key) && parseFile1[key] === parseFile2[key]) {
      return [...acc, `    ${key}: ${parseFile1[key]}`];
    } if (Object.prototype.hasOwnProperty.call(parseFile1, key) && Object.prototype.hasOwnProperty.call(parseFile2, key)) {
      return [...acc, `  - ${key}: ${parseFile1[key]}`, `  + ${key}: ${parseFile2[key]}`];
    } if (Object.prototype.hasOwnProperty.call(parseFile1, key)) {
      return [...acc, `  - ${key}: ${parseFile1[key]}`];
    }
    return [...acc, `  + ${key}: ${parseFile2[key]}`];
  }, []);
  const joinResult = ['{', ...chekData, '}'].join('\n');
  return joinResult;
}
