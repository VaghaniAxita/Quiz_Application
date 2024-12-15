require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const { notFoundHandler } = require('./middleware/notFoundHandler');

const app = express();


app.use(express.json());
app.use(require('cors')());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Quiz Api!');
  });
app.use('/api/quizzes', quizRoutes);
app.use('/api/users', userRoutes);


app.use(notFoundHandler);

app.use(errorHandler);


connectDB();


// const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server running on port 5000`));
