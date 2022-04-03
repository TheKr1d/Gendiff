import stylish from './formatters/stylish.js';
import plain from './formatters/plain.js';

const getDataIsFormatter = (tree, format) => {
  if (format === 'stylish') {
    return stylish(tree);
  }
  if (format === 'plain') {
    return plain(tree);
  }
  if (format === 'json') {
    return JSON.stringify(tree, null, ' ');
  }
  throw new Error(`Invalid this exist ${format}`);
};

export default getDataIsFormatter;
