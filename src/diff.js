/* eslint-disable max-len */
import _ from 'lodash';

const mkfile = (action, key, value) => {
  if (action === 'add') {
    return {
      key,
      action: '+',
      value
    }
  }
  if (action === 'delete') {
    return {
      key,
      action: '-',
      value
    }
  }
  if (action === 'save') {
    return {
      key,
      action: ' ',
      value
    }
  }
  if (action === 'exist') {
    return {
      key,
      add: '+',
      del: '-',
      value1: value[0],
      value2: value[1]
    }
  }
  throw new Error(`Invalid this exist ${action}`)
};

const diff = (obj1, obj2) => {
const iter = (node1, node2) => {
  const keys = _.sortBy(_.union(_.keys(node1), _.keys(node2)));
  const result = keys.map((key) => {
    if (!_.has(node1, key)) {
      return mkfile('add', key, node2[key]);
    }
    if (!_.has(node2, key)) {
      return mkfile('delete', key, node1[key])
    }
    if (_.isObject(node1[key]) && _.isObject(node2[key])) {
      return {
        name: key,
        action: ' ',
        children: iter(node1[key], node2[key])
      };
    }
    if (!_.isEqual(node1[key], node2[key])) {
      return mkfile('exist', key, [node1[key], node2[key]]);
    }
    return mkfile('save', key, node1[key]);
  });
  return result;
}
return { name: 'tree', children: iter(obj1, obj2) };
};
export default diff;