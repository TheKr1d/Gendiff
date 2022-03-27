import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import { getFixturePath, readFile } from '../src/funcParse.js';

test('stylish', () => {
  const jsonFile1 = getFixturePath('file1.json');
  const jsonFile2 = getFixturePath('file2.json');
  const expected = readFile(getFixturePath('stylish.expect.txt'));

  expect(gendiff(jsonFile1, jsonFile2)).toBe(expected);

  const yamlFile1 = getFixturePath('file1.yaml');
  const yamlFile2 = getFixturePath('file2.yaml');

  expect(gendiff(yamlFile1, yamlFile2)).toBe(expected);
});
