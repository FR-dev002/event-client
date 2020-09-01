const errorHandler422 = async data => {
  let errorList = {};
  Object.keys(data).map((key) => {
    const val = data[key];
    errorList[key] = val[0];
    return null;
  });
  console.log(errorList);
  return errorList;
};

export default errorHandler422;