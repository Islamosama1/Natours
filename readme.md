# NATOURS
## Make your life better 🎇🎇🎇🎇🎇

## Deployment Link =>  Webiste live here:

<br>

### [Natours](https://natours-production-3e5c.up.railway.app/)
----------->
### [documentation of the API](https://documenter.getpostman.com/view/31689905/2sA2xnwpUP)

<br>

## Key Features 📝

![Natours _ All Tours - Google Chrome 2024-04-05 22-26-29](https://github.com/Islamosama1/Natours/assets/111485275/144b138a-6978-4725-a535-8d673fa2eefc)

![starter - Visual Studio Code 2024-04-04 23-15-27](https://github.com/Islamosama1/Natours/assets/111485275/41c6471d-b960-4b41-9765-0d3ff8683561)


## Features

+ [ ]  Signup and create your own account! 
+ [x]  Login to your account! 
+ [x]  Each login session is persisted using cookies
+ [x]  Reset your password
+ [x]  Update your password and profile
+ [x]  Stripe payment checkout gateway 💸
+ [x]  Upload Profile Picture 
+ [x]  Email service 📨
+ [ ]  Responsive for  Mobiles, Laptops and PC 📱

## How To Use 🤔

### Book a tour

- Login to the site
- Search for tours that you want to book
- Book a tour
- Proceed to the payment checkout page
- Enter the card details (Test Mood):
  ```
  - Card No. : 4242 4242 4242 4242
  - Expiry date: 02 / 22
  - CVV: 222
  ```
- Finished!

### Manage your booking

- Check the tour you have booked on the "Manage Booking" page in your user settings. You'll be automatically redirected to this
  page after you have completed the booking.

### Update your profile

- You can update your own username, profile photo, email, and password.

## API Usage

Before using the API, you need to set the variables in Postman depending on your environment (development or production). Simply add:

```
- {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
- {{password}} with your user password as value.
```

Check [Natours API Documentation](https://documenter.getpostman.com/view/31689905/2sA2xnwpUP) for more info.



## Build With 🏗️

- [NodeJS](https://nodejs.org/en/) - JS runtime environment
- [Express](http://expressjs.com/) - The web framework used
- [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
- [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
- [JSON Web Token](https://jwt.io/) - Security token
- [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
- [Stripe](https://stripe.com/) - Online payment API and Making payments on the app.
- [Postman](https://www.getpostman.com/) - API testing
- [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
- [Railway](https://railway.app/) - Cloud platform
- [maptiler](https://cloud.maptiler.com/) - Displaying the different locations of each tour.

![https://nodejs.org/en/](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 

Easyauth is built using [Node](https://nodejs.org/en/) and uses core node modules for most of the backend part.
[MongoDB](https://www.mongodb.com/) database is used along with [Mongoose](https://mongoosejs.com/) API.

## To-do 🗒️

- Review and rating
  - Allow users to add a review directly at the website after they have taken a tour
- Booking
  - Prevent duplicate bookings after a user has booked that exact tour, implement favorite tours
- Advanced authentication features
  - Signup, confirm user email, log in with refresh token, two-factor authentication
- And More! There's always room for improvement!

## Setting Up Your Local Environment ⚙️

If you wish to play around with the code base in your local environment, do the following

```
* Clone this repo to your local machine.
* Using the terminal, navigate to the cloned repo.
* Install all the necessary dependencies, as stipulated in the package.json file.
* If you don't already have one, set up accounts with: MONGODB, MAPBOX, STRIPE, SENDGRID, and MAILTRAP. Please ensure to have at least basic knowledge of how these services work.
* In your .env file, set environment variables for the following:
    * DATABASE=your Mongodb database URL
    * DATABASE_PASSWORD=your MongoDB password

    * SECRET=your JSON web token secret
    * JWT_EXPIRES_IN=90d
    * JWT_COOKIE_EXPIRES_IN=90

    * EMAIL_USERNAME=your mailtrap username
    * EMAIL_PASSWORD=your mailtrap password
    * EMAIL_HOST=smtp.mailtrap.io
    * EMAIL_PORT=2525
    * EMAIL_FROM=your real-life email address

    * SENDGRID_USERNAME=apikey
    * SENDGRID_PASSWORD=your sendgrid password

    * STRIPE_SECRET_KEY=your stripe secret key
    * STRIPE_WEBHOOK_SECRET=your stripe webhook secret

* Start the server.
* Your app should be running just fine.
```

## Installation 🛠️

You can fork the app or you can git-clone the app into your local machine. Once done, please install all the
dependencies by running

```
$ npm i
Set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start:prod (for production)
$ npm run debug (for debug)
$ npm start
Setting up ESLint and Prettier in VS Code 👇🏻
$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```


