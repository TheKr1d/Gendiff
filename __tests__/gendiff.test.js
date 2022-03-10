import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import { getFixturePath } from '../src/functions.js';

test('gendiffTest', () => {
  const jsonFile1 = getFixturePath('file1.json');
  const jsonFile2 = getFixturePath('file2.json');
  const correctAnswer = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

  expect(gendiff(jsonFile1, jsonFile2)).toBe(correctAnswer);

  const yamlFile1 = getFixturePath('file1.yaml');
  const yamlFile2 = getFixturePath('file2.yaml');

  expect(gendiff(yamlFile1, yamlFile2)).toBe(correctAnswer);
});
