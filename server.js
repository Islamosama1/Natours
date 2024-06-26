const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// process.on('uncaughtException', (err) => {
//   console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
//   console.log(err.name, err.message);
//   process.exit(1);
// });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

const port = process.env.PORT || 3000;

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}...`);
});

//TODO_Handeled all promices in our application
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1); //[1] for uncaught exception , [0] for success
  });
  //To give the server a chance to catch errors and handle them , and finish the requestes
});
