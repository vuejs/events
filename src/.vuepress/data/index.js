const dataFiles = require.context(".", false, /\.json$/);
const presentationDataFiles = require.context("./presentations", true, /\.json$/);

const data = {};
const presentationData = {};

dataFiles.keys().forEach((fileName) => {
  const fileData = dataFiles(fileName);
  const year = fileName.replace(/^\..*\//, '').replace(/\.\w+$/, '');
  data[year] = fileData.default || fileData;
});

presentationDataFiles.keys().forEach((fileName) => {
  let fileData = presentationDataFiles(fileName);
  fileName = fileName.replace(/\.\//, '').replace(/\.json/, '')
  const [theme, year, title] = fileName.split("/", 3)
  // Example folder are juste for test and pr review. We do not want them in production
  if (["example", "example2"].includes(theme.toLowerCase()) && NODE_ENV !== "development") {
    return;
  }
  if (!presentationData[theme]) {
    presentationData[theme] = {}
  }
  if (!presentationData[theme][year]) {
    presentationData[theme][year] = []
  }
  fileData = fileData.default || fileData;
  fileData = {...fileData, title}
  presentationData[theme][year].push(fileData.default || fileData)
});

export default data;
export { data, presentationData};
