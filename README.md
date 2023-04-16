# Express Local Library

# Introduction

Express Local Library is a web application designed for managing a library's collection of books, keeping records of books borrowed and returned. The application is built using Node.js and Express for server-side development, with TypeScript for a statically typed and structured codebase. Mongoose is used to provide database access using MongoDB Compass for seamless data management.

# Learning Objectives

Throughout the development of this project, I have achieved several learning objectives, including:

- Understanding how to declare object schema and models using Mongoose for seamless integration with MongoDB.

- Utilizing field types and basic validation when creating schemas, and accessing model data using various methods.

- Performing CRUD (Create, Read, Update, Delete) operations and correlating them with HTTP methods in Express for efficient data management.

- Utilizing the Express Application Generator to structure the project using the Model-View-Controller (MVC) file structure pattern, aligning with best practices in Express development.

- Testing models by creating multiple instances using standalone scripts to ensure data integrity and reliability.

- Gaining proficiency in using TypeScript in Node.js and Express projects for improved code quality and maintainability.

## Installation Instructions

Before proceeding with the installation, ensure that you have set up your MongoDB Atlas account and obtained the connection string, or have MongoDB Compass installed on your local machine. Mongoose requires a connection to a MongoDB database, and this setup is crucial for the proper functioning of the application.

To set up Express Local Library on your local machine, follow the steps below:

1. Clone the project: You can either download the project as a zip file and extract it, or use the terminal to clone the project using the following command:

```bash
git clone https://github.com/IAmYoungbossy/express-local-library.git
```

2. Install dependencies: Navigate to the project directory in your text editor or terminal and install all the dependencies used in this project by running the following command:

```bash
npm install
```

3. Build TypeScript files: After successfully installing all the dependencies, run the following command to compile all the TypeScript files into JavaScript files in the `/dist` folder, which will be used in the production environment:

```bash
npm run build
```

4. Set up development environment: To set up a development environment, run the following command to enable watch mode using the nodemon module, which will automatically restart the web server whenever there's a change in the code:

```bash
npm run dev
```

5. Run in production environment: To run the project in a production environment, use the following command:

```bash
npm run start
```

## Conclusion

In conclusion, while the project is still a work in progress, I have gained valuable skills and knowledge in building full-stack applications using Node.js, Express, Mongoose, and MongoDB. I have learned how to effectively declare object schema and models, perform CRUD operations, and structure projects using the MVC pattern. I have also improved my proficiency in using TypeScript for creating robust and maintainable code. This project has provided me with practical experience and insights into best practices in web development, and I look forward to continuing my learning journey in building innovative applications.
