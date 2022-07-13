// Require Express to run main api route
import express from 'express';

// import images route to main api route
import images from './api/images';

// assign router object make routes
const routes = express.Router();

// Api Route
routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('Welcome to our API');
});

// using image route
routes.use('/images', images);

// export routes to use in the server
export default routes;
