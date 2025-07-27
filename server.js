const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// پوشه عکس‌ها
const uploadFolder = './uploads';
if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// پشتیبانی از ارسال عکس با multer
const storage = multer.diskStorage({
  destination: uploadFolder,
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// اتصال به دیتابیس
const db = new sqlite3.Database('./database.db');
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName TEXT,
  lastName TEXT,
  fatherName TEXT,
  passportNumber TEXT,
  dob TEXT,
  passportIssueDate TEXT,
  expiryDate TEXT,
  phoneNumber TEXT,
  afghanistanPhoneNumber TEXT,
  afghanistanAddress TEXT,
  iranAddress TEXT,
  serviceType TEXT,
  gender TEXT,
  imagePath TEXT
)`);

// 📩 مسیر ذخیره اطلاعات
app.post('/submit', upload.single('image'), (req, res) => {
  const data = req.body;
  const imagePath = req.file ? req.file.path : '';

  db.run(`INSERT INTO users (
    firstName, lastName, fatherName, passportNumber, dob, passportIssueDate,
    expiryDate, phoneNumber, afghanistanPhoneNumber, afghanistanAddress,
    iranAddress, serviceType, gender, imagePath
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.firstName, data.lastName, data.fatherName, data.passportNumber,
      data.dob, data.passportIssueDate, data.expiryDate, data.phoneNumber,
      data.afghanistanPhoneNumber, data.afghanistanAddress,
      data.iranAddress, data.serviceType, data.gender, imagePath
    ],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, error: err.message });
      }
      res.json({ success: true });
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
