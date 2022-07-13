# Image Processing API

## The project summary 
This project aims to give a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database.

## lets Starte

1. **Initialize project**

   - I add required dependencies for this project like jasmine,Express,typescript, Eslint,Prettier and add scripts to package.json.

2. **Set up project structure**
   - I build a very helpful structure that make the functionality in separate files , the routes 
     server file and utilities.
   
3. **middleware and dependencies**

   - I put some middleware in this project and other tools shown below.

## Installation Instructions
This section contains all the packages used in this project and how to install them.

1. Clone the project to your local machine:

```

2. Open the project

```
$ cd Image-Processing-API
```

3. To install all packages:

```
 $ npm install
```
### Tools
- Typescript
- Sharp package
- ESLint
- Nodemon
- fs module
- jasmine
- supertest
- morgan 
- path

### Start App

```
$ npm run start
```

### Building

to transbile the typescripts files to js files in build file

```
$ npm run build
```
### Testing

1. unit tests.
2. End-point tests.

* Run test with
```
$ npm run test
```

### Formatting & Linting

```
$ npm run prettier
```

```
$ npm run lint  

```
### Provided endpoint
After installing the dependencies, building and executing the project, the endpoint will be available as demonstrated below:

### Path

1. Getting the original image with
   - http://localhost:3000/api/images?name=<imagename>&width=<w>&height=<h>
2. Getting the same image with custom dimensions 
   - http://localhost:3000/api/images?name=fjord&width=300&height=200
3. Store the resized image in [thump folder](./images/thumb) file system.

