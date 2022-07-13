// import sharp library
import sharp from 'sharp';

// import file system module from express
import fs from 'fs';

// Resizing and naming function
const resizeImage = async (
  imageName: string,
  w: number,
  h: number
): Promise<object> => {
  try {
    const newImage = await sharp(`images/${imageName}.jpg`)
      .resize({ width: w, height: h })
      .jpeg({ quality: 50 })
      .toFile(`images/thumb/${imageName}_${w}_${h}.jpeg`);
    return newImage;
  } catch (error) {
    throw new Error('Invalid To Resize Image');
  }
};

//checker function that checks the images exists or no
const checkImage = (imagePath: string): boolean => {
  return fs.existsSync(imagePath);
};

//exporting two function to be used in images route
export { resizeImage, checkImage };
