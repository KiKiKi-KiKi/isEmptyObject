const checkPrototypeProperty = (obj: typeof Object): boolean => {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};

const isEmptyObject = (val?: any, checkOwnProperty?: boolean): boolean => {
  const result = val !== null && typeof val === 'object' && val.constructor === Object && Object.keys(val).length === 0;

  if (!result || !checkOwnProperty) {
    return result;
  }

  return checkPrototypeProperty(val);
};

export default isEmptyObject;
