import { test, expect } from '@jest/globals';
import {
  getChildren, getValue1, getValue2, getName, getAction, getValue, getAdd, getDel,
} from '../src/funcTree.js';

const verifiable1 = {
  name: 'greeting',
  children: ['one', 'two', 'free'],
  action: '+',
  value1: 'hey',
  value2: 'man',
  value: 'bro',
  add: 'who',
  del: 'you?',
};
const verifiable2 = {
  name: { name: 'Pitter', famale: 'Parker' },
  action: NaN,
  value1: '',
  value2: {},
  value: true,
  add: 'add',
  del: false,
};
const verifiable3 = {};

test('Functions tree', () => {
  expect(getChildren(verifiable1)).toEqual(['one', 'two', 'free']);
  expect(getChildren(verifiable1).length).toEqual(3);
  expect(getValue1(verifiable1)).toBe('hey');
  expect(getValue2(verifiable1)).toBe('man');
  expect(getName(verifiable1)).toBe('greeting');
  expect(getAction(verifiable1)).toBe('+');
  expect(getValue(verifiable1)).toBe('bro');
  expect(getAdd(verifiable1)).toBe('who');
  expect(getDel(verifiable1)).toBe('you?');
});
test('Non-standart', () => {
  expect(getChildren(verifiable2).length).toEqual(0);
  expect(getValue1(verifiable2)).toBe('');
  expect(getValue2(verifiable2)).toEqual({});
  expect(getName(verifiable2)).toEqual({ name: 'Pitter', famale: 'Parker' });
  expect(getAction(verifiable2)).toBe(NaN);
  expect(getValue(verifiable2)).toBe(true);
  expect(getAdd(verifiable2)).toBe('add');
  expect(getDel(verifiable2)).toBe(false);
});
test('to be null', () => {
  expect(getValue1(verifiable3)).toBeNull();
  expect(getValue2(verifiable3)).toBeNull();
  expect(getName(verifiable3)).toBeNull();
  expect(getAction(verifiable3)).toBeNull();
  expect(getValue(verifiable3)).toBeNull();
  expect(getAdd(verifiable3)).toBeNull();
  expect(getDel(verifiable3)).toBeNull();
});
