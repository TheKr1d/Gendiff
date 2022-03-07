import path, { dirname } from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('gendiffTest', () => {
  const test1File1 = getFixturePath('file1.json');
  const test1File2 = getFixturePath('file2.json');
  const correctAnswer = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

  expect(gendiff(test1File1, test1File2)).toBe(correctAnswer);

  const test2File1 = '/home/user/hexlet-projects/frontend-project-lvl2/__fixtures__/file1.json';
  const test2File2 = '/home/user/hexlet-projects/frontend-project-lvl2/__fixtures__/file2.json';

  expect(gendiff(test2File1, test2File2)).toBe(correctAnswer);
});
