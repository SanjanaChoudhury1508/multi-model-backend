const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Use routes
app.use('/api/college', require('./routes/college.routes'));
app.use('/api/hospital', require('./routes/hospital.routes'));
app.use('/api/school', require('./routes/school.routes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
