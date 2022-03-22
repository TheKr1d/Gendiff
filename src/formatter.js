import _ from 'lodash';
import { getChild, getMeta1, getMeta2, getName, getAction, } from './funcTree.js';

const iterObj = (obj, level) => {
  const sub = subString.repeat(level);
  const result = Object.entries(obj).map(([key, value]) => {
    if (_.has(obj, value)) {
      return `${sub}  ${key}: ${iterObj(value, level + 2)}`;
    }
    return `${sub}  ${key}: ${value}`;
  })
};
const stylish = (tree, subString = '  ') => {
  const iter = (node, level) => {
    const sub = subString.repeat(level);
    const children = node.children;
    if (children === 0) {
      return `${node.value1}`;
    }
    
    const result = children.flatMap((child) => {
      if (_.isObject(child.value1)) {
        return iterObj(child.value1, level + 2);
      }
      if (_.isObject(child.value2)) {
        return iterObj(child.value2, level + 2);
      }
      if (_.has(child, 'del')) {
        return [`${sub}${child.del} ${child.key}: ${child.value1}`, `${sub}${child.add}${child.key}: ${child.value2}`];
      }
      return [`${sub}${child.value1}${child.key}: ${iter(child, level + 2)}`];
    });
  return ['{', ...result, `${subString.repeat(level - 1)}}`].join('\n');
 }
return iter(tree, 1);
};

export default stylish;
