const dotenv = require('dotenv');
const express = require('express')
const connectDB = require('./config/db');

const app = express()

dotenv.config( { path : './config/.env'} )
const port = process.env.PORT || 8080;

// Connect to Database
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const deviceRoutes = require('./routes/deviceRoutes');
app.use('/', deviceRoutes);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
