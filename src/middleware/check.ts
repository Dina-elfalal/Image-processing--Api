// import express
import express from 'express';

// checks if the user inputs use as a middleware in images route
const checkInputs = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  
   //check if the height is a number & exists
   if (Number(req.query.height) <= 0 || !Number(req.query.height)) {
    return res
      .status(400)
      .send({ error: 'Enter height as a number and greater than zero' });
  }
  

  //check if the weidth is a number & exists
  if (Number(req.query.width) <= 0 || !Number(req.query.width)) {
    return res
      .status(400)
      .send({ error: 'Enter width as a number and greater than zero' });
  }

 
  //check the name is exist
  if (!req.query.name) {
    return res.status(400).send({ error: 'Image name is missing' });
  }
  next();
};

//export the check in
export default checkInputs;
