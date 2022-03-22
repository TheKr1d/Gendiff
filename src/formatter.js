import _ from 'lodash';

const iterObj = (obj, level) => {
  const subString = '  ';
  const sub = subString.repeat(level);
  const result = Object.entries(obj).map(([key, value]) => {
    if (_.has(obj, value)) {
      return `${sub}  ${key}: ${iterObj(value, level + 2)}`;
    }
    return `${value}`;
  })
  return result;
};
const stylish = (tree, subString = '  ') => {
  const iter = (node, level) => {
    const sub = subString.repeat(level);
    const children = node.children;
    if (children === undefined) {
      return `${node.value}`;
    }
    const result = children.flatMap((child) => {
      if (_.isObject(child.value1)) {
        return `${sub}${child.action} ${child.name}: ${iterObj(child.value1, level + 2)}`;
      }
      if (_.isObject(child.value2)) {
        return `${sub}${child.action} ${child.name}: ${iterObj(child.value2, level + 2)}`;
      }
      if (_.isObject(child.value)) {
        return `${sub}${child.action} ${child.name}: ${iterObj(child.value, level + 2)}`;
      }
      if (_.has(child, 'value2')) {
        return [`${sub}${child.del} ${child.name}: ${child.value1}`, `${sub}${child.add} ${child.name}: ${child.value2}`];
      }
      return [`${sub}${child.action} ${child.name}: ${iter(child, level + 2)}`];
    });
  return ['{', ...result, `${subString.repeat(level - 1)}}`].join('\n');
 }
return iter(tree, 1);
};

export default stylish;
