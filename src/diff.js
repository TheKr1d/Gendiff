/* eslint-disable max-len */
import _ from 'lodash';
import { mkfile, mkdir } from './funcTree.js';

const diffNode = (node) => {
  const keys = _.keys(node);
  return keys.map((key) => {
    if (_.isObject(node[key])) {
      return mkdir(key, 'save', diffNode(node[key]));
    }
    return mkfile(key, 'save', node[key]);
  });
};
const genD = (obj1, obj2) => {
const diff = (node1, node2) => {
  const keys = _.sortBy(_.uniqBy(_.concat(_.keys(node1), _.keys(node2))));
  const result = keys.map((key) => {
    if (_.isObject(node1[key]) && _.isObject(node2[key])) {
      return mkdir(key, 'save', diff(node1[key], node2[key]));
    }
    if (_.isObject(node1[key])) {
      return mkdir(key, 'del', diffNode(node1[key]));
    }
    if (_.isObject(node2[key])) {
      return mkdir(key, 'add', diffNode(node2[key]));
    }
    if (node1[key] === node2[key]) {
      return mkfile(key, 'save', node1[key]);
    }
    if (node1[key] !== undefined && node2[key] !== undefined) {
      return mkfile(key, 'deff', node1[key], node2[key]);
    }
    if (node1[key] !== undefined) {
      return mkfile(key, 'del', node1[key]);
    } if (node2[key] !== undefined) {
    return mkfile(key, 'add', node2[key]);
    }
  });
  return result;
}
return { name: 'tree', childrens: diff(obj1, obj2) };
};
export default genD;
