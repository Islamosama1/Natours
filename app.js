const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const bookingController = require('./controllers/bookingController');
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

const scriptSrcUrls = [
  'https://api.tiles.mapbox.com/',
  'https://api.mapbox.com/',
  'https://cdnjs.cloudflare.com/',
  'https://cdn.jsdelivr.net',
  'https://unpkg.com/',
  'https://cdnjs.cloudflare.com/',
  'https://unpkg.com/',
  'https://www.google-analytics.com/',
  'https://cdn.maptiler.com/',
  'https://unpkg.com/',
  'https://js.stripe.com/v3/',
  'https://checkout.stripe.com/',
  'https://unpkg.com/',
  'https://cdnjs.cloudflare.com/',
  'https://www.google-analytics.com/',
  'https://127.0.0.1:57253/',
  'https://127.0.0.1:57253/',
];
const styleSrcUrls = [
  'https://api.mapbox.com/',
  'https://api.tiles.mapbox.com/',
  'https://fonts.googleapis.com/',
  'https://cdnjs.cloudflare.com/',
  'https://cdn.maptiler.com/', // Add this line
  'https://unpkg.com/',
  'https://cdnjs.cloudflare.com/',
  'https://unpkg.com/',
  'https://www.google-analytics.com/',
  'https://127.0.0.1:57253/',
  'https://127.0.0.1:57253/',
];

const connectSrcUrls = [
  'https://api.mapbox.com/',
  'https://a.tiles.mapbox.com/',
  'https://b.tiles.mapbox.com/',
  'https://events.mapbox.com/',
  'https://api.maptiler.com/',
  'https://js.stripe.com/v3/',
  'https://checkout.stripe.com/',
  'https://unpkg.com/',
  'https://cdn.jsdelivr.net',
  'https://unpkg.com/',
  'https://cdnjs.cloudflare.com/',
  'https://www.google-analytics.com/',
  'https://127.0.0.1:57253/',
  'https://127.0.0.1:57253/',
  'ws://127.0.0.1:57253/', // Add WebSocket URL here
];

const imgSrcUrls = [
  "'self'",
  'blob:',
  'data:',
  'https://api.maptiler.com', // Add this line
  'https://js.stripe.com/v3/',
  'https://checkout.stripe.com/',
  'https://unpkg.com/',
  'https://cdn.jsdelivr.net',
  'https://unpkg.com/',
  'https://cdnjs.cloudflare.com/',
  'https://www.google-analytics.com/',
  'https://127.0.0.1:57253/',
  'https://127.0.0.1:57253/',
];

const fontSrcUrls = ['fonts.googleapis.com', 'fonts.gstatic.com'];
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      connectSrc: ["'self'", ...connectSrcUrls],
      scriptSrc: ["'self'", ...scriptSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      workerSrc: ["'self'", 'blob:'],
      objectSrc: [],
      imgSrc: [...imgSrcUrls],
      fontSrc: ["'self'", ...fontSrcUrls],
      frameSrc: ["'self'", 'https://js.stripe.com/'],
    },
  }),
);

app.use(compression());
//accept data in stream not in json

const limiter = rateLimit({
  max: 100, //allow 1 handred request from the same ip per 1 hour
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour',
});
app.use('/api', limiter);

app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  bookingController.webhookCheckout,
);
// body parser  - reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

//data sanitization against NoSQL query injection
app.use(mongoSanitize());

//Data sanitization against XSS
app.use(xss());

//prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  }),
);

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Middleware to time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

//TODO:Routes
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// TODO: ERROR
// HANDLING MIDDLEWARE
//Handler = Controller in MVC architecture

app.use(globalErrorHandler);

module.exports = app;
