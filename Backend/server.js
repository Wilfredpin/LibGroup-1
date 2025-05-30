require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const db = require('./db');
const bookRoutes = require('./routes/books');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/books', bookRoutes);

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/pfps/'); // folder where images are saved
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// JWT Middleware to protect routes
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer <token>

  if (!token) return res.status(401).json({ message: 'Missing token' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

// Token validation route
app.get('/api/validate-token', verifyToken, (req, res) => {
  res.status(200).json({ valid: true, user: req.user });
});


// Registration route
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const checkQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkQuery, [email], async (err, results) => {
      if (err)
        return res.status(500).json({ message: 'Database error', error: err });

      if (results.length > 0)
        return res.status(400).json({ message: 'User already exists' });

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new user
      const insertQuery =
        'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';
      db.query(insertQuery, [name, email, hashedPassword], (err, result) => {
        if (err)
          return res
            .status(500)
            .json({ message: 'Database error', error: err });

        // Create JWT token
        const token = jwt.sign(
          { id: result.insertId, username: name, email },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res
          .status(201)
          .json({ message: 'User registered successfully', token });
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Login route with JWT
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err)
      return res.status(500).json({ message: 'Database error', error: err });

    if (results.length === 0)
      return res.status(401).json({ message: 'Invalid email or password' });

    const user = results[0];

    // Compare password with hash
    const match = await bcrypt.compare(password, user.password_hash);
    if (!match)
      return res.status(401).json({ message: 'Invalid email or password' });

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // On success, you might send back user data or a token
    res.status(200).json({ message: 'Login successful', token });
  });
});

// Personalized dashboard data route
app.get('/api/dashboard', verifyToken, (req, res) => {
  const userId = req.user.id;

  const query = 'SELECT username, email, profile_picture_url FROM users WHERE id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error', error: err });

    if (results.length === 0)
      return res.status(404).json({ message: 'User not found' });

    const user = results[0];
    res.json({
      message: 'Dashboard data loaded',
      user: {
        id: userId,
        name: user.username,
        email: user.email,
        profile_picture: user.profile_picture_url,
      }
    });
  });
});

// Upload route
app.post('/api/upload-profile', upload.single('profilePic'), (req, res) => {
  const userId = req.body.userId;
  const imageUrl = `/uploads/pfps/${req.file.filename}`;

  const query = 'UPDATE users SET profile_picture_url = ? WHERE id = ?';
  db.query(query, [imageUrl, userId], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error', err });

    res.status(200).json({ message: 'Upload successful', imageUrl });
  });
});

// Update user details route
app.post('/api/update-user', verifyToken, (req, res) => {
  const { id, username, email } = req.body;
  const query = 'UPDATE users SET username = ?, email = ? WHERE id = ?';

  db.query(query, [username, email, id], (err, result) => {
    if (err)
      return res.status(500).json({ message: 'Database error', error: err });

    res.status(200).json({ message: 'User updated successfully' });
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
