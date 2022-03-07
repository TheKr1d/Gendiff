/* eslint-disable max-len */
import _ from 'lodash';
import path from 'path';
import * as fs from 'fs';

export default function gendiff(file1, file2) {
  const way = process.cwd();
  const normalisedWay1 = file1[0] === '/' ? file1 : path.resolve(way, file1);
  const normalisedWay2 = file2[0] === '/' ? file2 : path.resolve(way, file2);
  const readingFile1 = fs.readFileSync(normalisedWay1, 'utf8');
  const readingFile2 = fs.readFileSync(normalisedWay2, 'utf8');
  const parseFile1 = JSON.parse(readingFile1);
  const parseFile2 = JSON.parse(readingFile2);
  const keys = _.sortBy(_.uniqBy(_.concat(_.keys(parseFile1), _.keys(parseFile2))));
  const chekData = keys.reduce((acc, key) => {
    if (Object.hasOwn(parseFile1, key) && Object.hasOwn(parseFile2, key) && parseFile1[key] === parseFile2[key]) {
      return [...acc, `    ${key}: ${parseFile1[key]}`];
    } if (Object.hasOwn(parseFile1, key) && Object.hasOwn(parseFile2, key)) {
      return [...acc, `  - ${key}: ${parseFile1[key]}`, `  + ${key}: ${parseFile2[key]}`];
    } if (Object.hasOwn(parseFile1, key)) {
      return [...acc, `  - ${key}: ${parseFile1[key]}`];
    }
    return [...acc, `  + ${key}: ${parseFile2[key]}`];
  }, []);
  const joinResult = ['{', ...chekData, '}'].join('\n');
  return joinResult;
}
