import _ from 'lodash';
import { getChild, getMeta1, getMeta2, getName, getAction, } from './funcTree.js';

const stylish = (tree, subString = '  ') => {
  const iter = (node, level) => {
    const sub = subString.repeat(level);
    const children = getChild(node);
    if (children === 0) {
      return `${getMeta1(node)}`;
    }
    const result = children.flatMap((child) => {
      if (getAction(child) === 'exist') {
        return [`${sub}${child.del}${getName(child)}: ${getMeta1(child)}`, `${sub}${child.add}${getName(child)}: ${getMeta2(child)}`];
      }
      return [`${sub}${actSymbol(getAction(child))}${getName(child)}: ${iter(child, level + 2)}`];
    });
    return ['{', ...result, `${subString.repeat(level - 1)}}`].join('\n');
  };
  return iter(tree, 1);
};

export default stylish;
