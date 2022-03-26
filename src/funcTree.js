const getChildren = (obj) => obj.children ?? [];
const getValue1 = (obj) => obj.value1 ?? null;
const getValue2 = (obj) => obj.value2 ?? null;
const getName = (obj) => obj.name ?? null;
const getAction = (obj) => obj.action ?? null;
const getValue = (obj) => obj.value ?? null;
const getAdd = (obj) => obj.add ?? null;
const getDel = (obj) => obj.del ?? null;
const getSign = (obj) => obj.sign ?? null;
const getType = (obj) => obj.type ?? null;

export {
  getChildren, getValue1, getValue2, getName, getAction, getValue, getAdd, getDel, getSign, getType,
};
