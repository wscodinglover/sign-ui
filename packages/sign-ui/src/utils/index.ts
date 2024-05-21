export function getType(obj: any) {
  return Object.prototype.toString.call(obj);
}

export function isObject(obj: any) {
  return getType(obj) === "[object Object]";
}
