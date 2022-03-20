import _ from 'lodash';
import { getChild, getMeta1, getMeta2, getName, getAction, actSymbol } from './funcTree.js';

const stylish = (tree, subString = '  ') => {
  const iter = (node, level) => {
    const sub = subString.repeat(level);
    const childrens = getChild(node);
    if (node.childrens === undefined) {
      return `${getMeta1(node)}`;
    }
    const result = childrens.flatMap((child) => {
      if (getAction(child) === 'deff') {
        return [`${sub}${'- '}${getName(child)}: ${getMeta1(child)}`, `${sub}${'+ '}${getName(child)}: ${getMeta2(child)}`];
      }
      return [`${sub}${actSymbol(getAction(child))}${getName(child)}: ${iter(child, level + 1)}`];
    });
    return ['{', ...result, `${subString.repeat(level)}}`].join('\n');
  };
  return iter(tree, 1);
};

const formatter = (tree) => stylish(tree);
export default formatter;
