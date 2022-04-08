import _ from 'lodash';

const indent = (level) => '  '.repeat(level);

const stylish = (node, level = 1) => {
  const stringify = (item, strLevel) => {
    if (!_.isObject(item)) {
      return item;
    }
    return `{\n${Object.entries(item).flatMap(([key, value]) => stylish({ type: 'same', value, name: key }, strLevel)).join('\n')}\n${indent(strLevel - 1)}}`;
  };
  const sub = indent(level);
  const { name } = node;
  switch (node.action) {
    case 'HEAD':
      return `{\n${node.children.map((child) => stylish(child, level)).join('\n')}\n}`;
    case 'perent':
      return `${sub}  ${node.name}: {\n${node.children.map((child) => stylish(child, level + 2)).join('\n')}\n${indent(level + 1)}}`;
    case 'updated':
      return [
        `${sub}- ${name}: ${stringify(node.value1, level + 2)}\n${sub}+ ${name}: ${stringify(node.value2, level + 2)}`,
      ];
    case 'added':
      return `${sub}+ ${name}: ${stringify(node.value, level + 2)}`;
    case 'removed':
      return `${sub}- ${name}: ${stringify(node.value, level + 2)}`;
    default:
      return `${sub}  ${name}: ${stringify(node.value, level + 2)}`;
  }
};

export default stylish;
