const treatmenValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (node, acc = []) => {
  const accJoin = acc.join('.');
  switch (node.action) {
    case 'added':
      return `Property '${accJoin}' was added with value: ${treatmenValue(node.value)}`;

    case 'save':
      return [];

    case 'removed':
      return `Property '${accJoin}' was removed`;

    case 'updated':
      return `Property '${accJoin}' was updated. From ${treatmenValue(node.value1)} to ${treatmenValue(node.value2)}`;

    default:
      return node.children.flatMap((child) => plain(child, [...acc, child.name])).join('\n');
  }
};
export default plain;
