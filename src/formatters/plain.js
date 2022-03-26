import {
  getAction, getName, getValue1, getValue2, getChildren, getType, getValue,
} from '../funcTree.js';

const treatmenValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  const iter = (node, acc = []) => {
    const accJoin = acc.join('.');
    if (getAction(node) === 'added') {
      return `Property '${accJoin}' was added with value: ${treatmenValue(getValue(node))}`;
    }
    if (getAction(node) === 'save') {
      return [];
    }
    if (getAction(node) === 'removed') {
      return `Property '${accJoin}' was removed`;
    }
    if (getAction(node) === 'updated') {
      return `Property '${accJoin}' was updated. From ${treatmenValue(getValue1(node))} to ${treatmenValue(getValue2(node))}`;
    }
    const result = getChildren(node).flatMap((child) => {
      const accName = [...acc, getName(child)];
      if (getType(child) === 'dir') {
        return iter(child, accName);
      }
      return iter(child, accName);
    });
    return result.join('\n');
  };
  return iter(tree);
};
export default plain;
