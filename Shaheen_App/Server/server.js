const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const authRoutes = require('./Routes/authRoutes');
const authMiddleware = require('./config/authMiddleware');
const contactRoutes = require('./Routes/contactRoutes');
const emailRoutes = require('./Routes/emailRoutes');


const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Allow your frontend (React app) to access this API
    methods: ['GET', 'POST',"PATCH", "PUT","DELETE"],       // Specify the allowed HTTP methods
    credentials: true               // Allow cookies and credentials to be sent with requests
  }));


const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cookieParser()); // To parse cookies
app.use('/api/email', emailRoutes);

// Connect to the database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', contactRoutes);

// A protected route example
app.get('/api/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'You have access to this protected route', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
