// import required modules
const express = require('express');
const bodyParser = require('body-parser');
const tournamentRoutes = require('./routes/tournmentRoutes');
const cors = require('cors');
const mongoose = require('mongoose');

// Create Express application
const app = express();

// Connecting mongoose to mongoDB
mongoose.connect('mongodb+srv://rahul:rahul123g@bracketcluster.yiclb2w.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(error => console.error('Error connecting to MongoDB: ', error));

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mount the tournament routes on '/api' path
app.use('/api', tournamentRoutes);

// Other middleware and route handling can be added here

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});