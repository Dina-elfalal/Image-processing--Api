// need Express to run the server & routes
import express from 'express';

import routes from './routes/routes';

// import morgan logger to use as a middleware
import morgan from 'morgan';

// Start up an instance of app
const app = express();

//using morgan module as a logger middleware
app.use(morgan('common'));



// Setup Server and routes
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hi');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`sever start at http://localhost:${port}`);
});

// export app for testing
export default app;
