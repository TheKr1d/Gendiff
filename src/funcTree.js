const mkfile = (name, action, meta1, meta2 = []) => ({
  name,
  meta1,
  meta2,
  action,
});
const mkdir = (name, action, childrens) => ({
  name,
  action,
  childrens: childrens,
});
const getChild = (obj) => obj.childrens ?? [];
const getMeta1 = (obj) => obj.meta1;
const getMeta2 = (obj) => obj.meta2;
const getName = (obj) => obj.name;
const getAction = (obj) => obj.action;

const actSymbol = (action) => {
    if (action === 'add') {
        return '+ ';
    }
    if (action === 'del') {
        return '- ';
    }
    if (action === 'save') {
        return '  ';
    }
    return '';
};

export { mkfile, mkdir, getChild, getMeta1, getMeta2, getName, getAction, actSymbol}
