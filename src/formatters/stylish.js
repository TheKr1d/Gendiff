import _ from 'lodash';

const stringify = (node, level) => {
  const subString = '  ';
  const sub = subString.repeat(level);
  if (!_.isObject(node)) {
    return node;
  }
  const result = Object.entries(node).flatMap(([key, value]) => {
    return `${sub}  ${key}: ${stringify(value, level + 2)}`;
  });
  return ['{', ...result, `${subString.repeat(level - 1)}${sub}}`].join('\n');
};
const stylish = (node, level = 1) => {
    const subString = '  ';
    const sub = '  '.repeat(level);
      const { name } = node;
      switch (node.action) {
        case 'HEAD':
          return `{\n${node.children.map(child => stylish(child, level)).join('\n')}\n}`;
        case 'perent':
          return `${sub}  ${node.name}: {${node.children.map(child => stylish(child, level + 2)).join('\n')}${sub}`;
        case 'updated':
          return [
          `${sub}- ${name}: ${stringify(node.value1, level + 2)}\n${sub}+ ${name}: ${stringify(node.value2, level + 2)}`
        ];
        case 'added':
          return `\n${sub}+ ${name}: ${stringify(node.value, level + 2)}`;
        case 'removed':
          return `\n${sub}- ${name}: ${stringify(node.value, level + 2)}`;
        default:
          return `\n${sub}  ${name}: ${stringify(node.value, level + 2)}`;
      }
  };

export default stylish;
