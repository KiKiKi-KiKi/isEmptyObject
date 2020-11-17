const isEmptyObject = (val?: any): boolean => {
  return val !== null && typeof val === 'object' && val.constructor === Object && Object.keys(val).length === 0;
};

export default isEmptyObject;
