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
      break;
  }
  const children = node.children ?? [];
  const result = children.flatMap((child) => {
    const accName = [...acc, child.name];
    return plain(child, accName);
  });
  return result.join('\n');
};
export default plain;
