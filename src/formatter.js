import _ from 'lodash';
import {
  getAction, getName, getValue1, getValue2, getValue, getAdd, getDel, getChildren,
} from './funcTree.js';

const iterObj = (node, level) => {
  const subString = '  ';
  const sub = subString.repeat(level);
  if (!_.isObject(node)) {
    return `${node}`;
  }
  const result = Object.entries(node).flatMap(([key, value]) => {
    if (_.isObject(value)) {
      return `${sub}  ${key}: ${iterObj(value, level + 2)}`;
    }
    return `${sub}  ${key}: ${value}`;
  });
  return ['{', ...result, `${subString.repeat(level - 1)}}`].join('\n');
};
const stylish = (tree, subString = '  ') => {
  const iter = (node, level) => {
    const sub = subString.repeat(level);
    const children = getChildren(node);
    const result = children.flatMap((child) => {
      const name = getName(child);
      if (_.has(child, 'children')) {
        return `${sub}${getAction(child)} ${name}: ${iter(child, level + 2)}`;
      }
      if (_.has(child, 'del') && _.has(child, 'add')) {
        return [
          `${sub}${getDel(child)} ${name}: ${iterObj(getValue1(child), level + 2)}`,
          `${sub}${getAdd(child)} ${name}: ${iterObj(getValue2(child), level + 2)}`,
        ];
      }
      return `${sub}${getAction(child)} ${name}: ${iterObj(getValue(child), level + 2)}`;
    });
    return ['{', ...result, `${subString.repeat(level - 1)}}`].join('\n');
  };
  return iter(tree, 1);
};

export default stylish;
