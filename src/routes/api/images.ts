// import express
import express from 'express';

// import path module to correct and detect the correct path
import path from 'path';

// import check inputs function from middleware folder
import checkInputs from '../../middleware/check';

// import helper functions from util folder
import { resizeImage, checkImage } from '../../util/helpers';

// assign router object make routes
const images = express.Router();

// the images route with method get
images.get(
  '/',
  checkInputs,
  async (req: express.Request, res: express.Response) => {
    // inspect the image name , width and height from the request
    const imageName = String(req.query.name);
    const w = Number(req.query.width);
    const h = Number(req.query.height);

    // the path to the images folder
    const originalImagePath = path.resolve('images', imageName);

    // image after resized
    const resizedImage = `${imageName}_${w}_${h}.jpeg`;

    // image resized path
    const resizedImagePath = path.resolve('images', 'thumb', resizedImage);

    // wrap the main functions to catch the errors
    try {
      // use check function to check if the original image input matches the images in the folder images
      checkImage(originalImagePath);

      // use check function again to prvevent regenerating a new image each time
      if (checkImage(resizedImagePath) === true) {
        return res.sendFile(resizedImagePath);
      } else {
        //resizing the new image
        await resizeImage(imageName, w, h);

        // sending the image after resizing
        return res.sendFile(resizedImagePath);
      }
    } catch (error) {
      // catch error and sending it
      return res.status(400).send({ error: 'Inter correct image name' });
    }
  }
);

// export images route
export default images;
