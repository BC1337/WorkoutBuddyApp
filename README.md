# WorkoutBuddyApp

WorkoutBuddyApp
WorkoutBuddyApp is a web application that allows users to create and track their workouts. Users can sign up, log in, and create customized workouts with specific exercises and reps. The app also includes a dashboard where users can view their workout history and progress.

# Technologies Used
This application was built using the MERN stack, which includes:

MongoDB: a document-based database for storing workout data

Express.js: a framework for building web applications in Node.js

React: a JavaScript library for building user interfaces

Node.js: a JavaScript runtime for building server-side applications

In addition to the MERN stack, this application uses several additional libraries and packages, including:

JWT: for user authentication and authorization

Bcrypt: for password hashing and security

Axios: for making HTTP requests to the server

Moment.js: for date formatting and manipulation

React Router: for client-side routing

Material-UI: for building a responsive user interface

# Installation
To run the application locally, you must have Node.js and MongoDB installed on your machine. You can follow these steps to get started:

Clone the repository to your local machine:

git clone https://github.com/BC1337/WorkoutBuddyApp.git
Navigate to the project directory:

cd WorkoutBuddyApp
Install the dependencies for both the server and client:

npm install
cd client
npm install
cd ..
Create a .env file in the root directory with the following environment variables:
makefile

MONGODB_URI=<your MongoDB connection string>
JWT_SECRET=<your JWT secret key>
Start the server:

npm run dev
Open a web browser and navigate to http://localhost:3000 to view the application.


# Usage
To use the application, follow these steps:

Create an account by clicking the "Sign Up" button on the home page and filling out the registration form.
Log in to your account by clicking the "Log In" button on the home page and entering your credentials.
Create a new workout by clicking the "Add Workout" button on the dashboard and filling out the workout form.
View your workout history and progress by navigating to the "History" and "Progress" tabs on the dashboard.

# Contributing
Contributions to this project are welcome! To contribute, follow these steps:

Fork the repository to your own GitHub account.
Create a new branch and make your changes:
css

git checkout -b my-feature-branch
Commit your changes and push them to your fork:
perl

git commit -m "Add new feature"
git push origin my-feature-branch
Create a pull request from your fork to the main repository.
Wait for feedback and collaborate with the project maintainers to get your changes merged.
# Credits
This application was developed by BC1337 Based off of The Net Ninja MERN Stack Tutorial.

License
This project is licensed under the MIT License - see the LICENSE file for details.
