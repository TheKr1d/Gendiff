import _ from 'lodash';

const indent = (level) => '  '.repeat(level);

const stringify = (item, strLevel, runStylish) => {
  if (!_.isObject(item)) {
    return item;
  }
  const result = Object.entries(item)
    .flatMap(([key, value]) => runStylish({ action: 'save', value, name: key }, strLevel)).join('\n');
  return `{\n${result}\n${indent(strLevel - 1)}}`;
};

const stylish = (node, level = 1) => {
  const sub = indent(level);
  const newLevel = level + 2;
  const { name } = node;
  switch (node.action) {
    case 'root':
      return `{\n${node.children.map((child) => stylish(child, level)).join('\n')}\n}`;

    case 'nested':
      return `${sub}  ${node.name}: {\n${node.children.map((child) => stylish(child, newLevel)).join('\n')}\n${indent(level + 1)}}`;

    case 'updated':
      return `${sub}- ${name}: ${stringify(node.value1, newLevel, stylish)}\n${sub}+ ${name}: ${stringify(node.value2, newLevel, stylish)}`;

    case 'added':
      return `${sub}+ ${name}: ${stringify(node.value, newLevel, stylish)}`;

    case 'removed':
      return `${sub}- ${name}: ${stringify(node.value, newLevel, stylish)}`;

    case 'save':
      return `${sub}  ${name}: ${stringify(node.value, newLevel, stylish)}`;

    default:
      throw Error(`This if invalid is ${node.action}`);
  }
};

export default stylish;
