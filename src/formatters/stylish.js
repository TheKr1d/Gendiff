import _ from 'lodash';

const getSign = (obj) => {
  switch (obj.action) {
    case 'save':
      return ' ';
    case 'perent':
      return ' ';
    case 'removed':
      return '-';
    case 'added':
      return '+';
    default:
      throw new Error(`Invalid this action ${obj.action}`);
  }
};
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
    const children = node.children ?? [];
    const result = children.flatMap((child) => {
      const { name } = child;
      if (_.has(child, 'children')) {
        return `${sub}  ${name}: ${iter(child, level + 2)}`;
      }
      if (child.action === 'updated') {
        return [
          `${sub}- ${name}: ${iterObj(child.value1, level + 2)}`,
          `${sub}+ ${name}: ${iterObj(child.value2, level + 2)}`,
        ];
      }
      return `${sub}${getSign(child)} ${name}: ${iterObj(child.value, level + 2)}`;
    });
    return ['{', ...result, `${subString.repeat(level - 1)}}`].join('\n');
  };
  return iter(tree, 1);
};

export default stylish;
