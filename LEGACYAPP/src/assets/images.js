const importAllImagesFromFolder = folderPath => {
  const images = {};
  folderPath.keys().forEach(item => {
    images[item.replace('./', '')] = folderPath(item);
  });
  return images;
};

const images = importAllImagesFromFolder(require.context('./img', false, /\.(png|gif|svg|jpeg)$/));

export default images;
