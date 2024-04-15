const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'collegedata'
});


connection.connect((error) => {
  if (error){
    console.error('error while connecting to collegedata database:' , error);
    process.exit(1);
  }
  else{
    console.log(' succeccfully connected to collegedata database');
  }
});


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/checkCollegeCode", (req, res) => {
  const { collegeCode } = req.body;
  if (!collegeCode) {
    return res.status(400).send("College code is required");
  }
  connection.query(
    "SELECT * FROM colleges WHERE college_code = ?",
    [collegeCode],
    (err, results) => {
      if (err) {
        res.status(500).send("Error checking college code");
      } else if (results.length === 0) {
        res.status(400).send("Invalid college code");
      } else {
        res.status(200).send("Valid college code");
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

 
  connection.query(
    "SELECT * FROM studentinfo WHERE username = ? AND password = ?",
    [username, password],
    (err, studentResults) => {
      if (err) {
      
        res.status(500).send("Error logging in");
      } else if (studentResults.length === 0) {

        res.status(400).send("Invalid username or password");
      } else {
        
        res.status(200).send("Login successful");
      }
    }
  );
});


app.post('/api/students', upload.single('photo'), (req, res) => {
  const { stud_name, stud_std, stud_rollno, stud_div, stud_dob, stud_phoneno, username } = req.body;
  const photoData = req.file ? req.file.buffer : null;

  const sql = 'INSERT INTO student (stud_name, stud_std, stud_rollno, stud_div, stud_dob, stud_phoneno, username, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [stud_name, stud_std, stud_rollno, stud_div, stud_dob, stud_phoneno, username, photoData];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into student table:', err);
      res.status(500).json({ error: 'An error occurred while inserting data into the database.' });
    } else {
      res.status(201).json({ message: 'Student data inserted successfully.' });
    }
  });
});






app.get("/student-info", (req, res) => {
  const sql = "SELECT * FROM student";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching student information");
    } else {
      const studentsWithPhoto = results.map((student) => {
        if (student.photo) {
          const base64Image = Buffer.from(student.photo).toString("base64");
          return { ...student, photo: base64Image };
        } else {
          return student;
        }
      });
      res.status(200).json(studentsWithPhoto);
    }
  });
}); 


app.patch('/student-info/:id', upload.single('photo'), (req, res) => {
  const { id } = req.params;
  const updatedStudent = req.body;

  if (req.file) {
    updatedStudent.photo = req.file.buffer; 
  }

  const sql = 'UPDATE student SET ? WHERE stud_id = ?';
  connection.query(sql, [updatedStudent, id], (err, result) => {
    if (err) {
      console.error('Error updating student information:', err);
      res.status(500).send('Error updating student information');
    } else {
      res.status(200).send('Student information updated successfully');
    }
  });
});

const PORT =  3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
