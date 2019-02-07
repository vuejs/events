const dataFiles = require.context(".", false, /\.json$/);

const data = {};

dataFiles.keys().forEach((fileName) => {
  const fileData = dataFiles(fileName);
  const year = fileName.replace(/^\..*\//, '').replace(/\.\w+$/, '');
  data[year] = fileData.default || fileData;
});

export default data;
