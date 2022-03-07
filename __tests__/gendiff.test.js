import { test, expect } from '@jest/globals';
import gendiff from '../src/index.js';
import { getFixturePath } from '../src/functions.js';

test('gendiffTest', () => {
  const test1File1 = getFixturePath('file1.json');
  const test1File2 = getFixturePath('file2.json');
  const correctAnswer = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

  expect(gendiff(test1File1, test1File2)).toBe(correctAnswer);

  const test2File1 = '/home/user/hexlet-projects/frontend-project-lvl2/__fixtures__/file1.json';
  const test2File2 = '/home/user/hexlet-projects/frontend-project-lvl2/__fixtures__/file2.json';

  expect(gendiff(test2File1, test2File2)).toBe(correctAnswer);
});
