/**
 * @description The function converts the data object to a handlebars object
 * @param {any} data
 */
const dataConverter = (data: any) => {
  let pureData = [];
  for (let key in data) {
    pureData.push({
      title: key,
      description: data[key],
    });
  }
  return pureData;
};

export { dataConverter };
