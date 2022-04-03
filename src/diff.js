/* eslint-disable max-len */
import _ from 'lodash';
import { parses, getWay } from './funcParse.js';

const mkfile = (action, key, value) => {
  if (action === 'add') {
    return {
      name: key,
      sign: '+',
      action: 'added',
      value,
    };
  }
  if (action === 'delete') {
    return {
      name: key,
      sign: '-',
      action: 'removed',
      value,
    };
  }
  if (action === 'save') {
    return {
      name: key,
      sign: ' ',
      action: 'save',
      value,
    };
  }
  if (action === 'exist') {
    return {
      name: key,
      add: '+',
      del: '-',
      action: 'updated',
      value1: value[0],
      value2: value[1],
    };
  }
  throw new Error(`Invalid this exist ${action}`);
};

const diff = (file1, file2) => {
  const iter = (node1, node2) => {
    const keys = _.sortBy(_.union(_.keys(node1), _.keys(node2)));
    const result = keys.map((key) => {
      if (!_.has(node1, key)) {
        return mkfile('add', key, node2[key]);
      }
      if (!_.has(node2, key)) {
        return mkfile('delete', key, node1[key]);
      }
      if (_.isObject(node1[key]) && _.isObject(node2[key])) {
        return {
          name: key,
          sign: ' ',
          type: 'dir',
          children: iter(node1[key], node2[key]),
        };
      }
      if (!_.isEqual(node1[key], node2[key])) {
        return mkfile('exist', key, [node1[key], node2[key]]);
      }
      return mkfile('save', key, node1[key]);
    });
    return result;
  };
  const normalisedWay1 = getWay(file1);
  const normalisedWay2 = getWay(file2);
  const parseFile1 = parses(normalisedWay1);
  const parseFile2 = parses(normalisedWay2);
  return { name: 'tree', children: iter(parseFile1, parseFile2) };
};
export default diff;
