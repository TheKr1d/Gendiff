import yaml from 'js-yaml';

const parses = (obj, format) => {
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(obj);
  }
  if (format === '.json') {
    return JSON.parse(obj);
  }
  throw Error(`This if invalid is ${format}`);
};
export default parses;
