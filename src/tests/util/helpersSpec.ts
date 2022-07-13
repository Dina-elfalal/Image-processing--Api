//  import checkResizedImage from util to test
import { checkImage, resizeImage } from '../../util/helpers';

//testing resizeImage function
it('should return new image object include image details', async () => {
  const data = await resizeImage('icelandwaterfall', 500, 200);
  expect(data).toEqual({
    format: 'jpeg',
    width: 500,
    height: 200,
    channels: 3,
    premultiplied: false,
    size: 7805,
  });
});

// testing checkResizedImage function
it('should check if the image is exists', () => {
  expect(checkImage('images/fjord.jpg')).toBeTruthy();
});
