// server.js

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_current_password",
    database: "test"
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM book";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error fetching addresses:', err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const sql = "INSERT INTO book (`id`, `title`, `des`, `cover`) VALUES (?)";
    const values = [
        req.body.id,
        req.body.title,
        req.body.des,
        req.body.cover
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error('Error creating address:', err);
        }
        return res.json("book sucessfully created");
    });
});

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
  
    // Update user in the database
    const q = "DELETE FROM book WHERE id = ?";
    db.query(q, [bookId], (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ message: 'deleted successfully' });
      }
    });
  });

  app.put("/books/:id", (req,res) =>{
    const bookId = req.params.id;
    const q1="UPDATE book SET `title`=?,`des`=?,`cover`=? WHERE id=?";
    const values =[
        req.body.title,
        req.body.des,
        req.body.cover
    ]
    db.query(q1, [...values,bookId], (err, result) => {
    if(err){
        res.json(err);
    }
    else{
        res.json({message : "updated sucessfully"})
    }
})
  })


  app.post("/login", (req, res) => {
    const q2 = "SELECT * FROM login WHERE email = ? AND password=?";
    db.query(q2, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (data.length > 0) {
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ error: "Invalid credentials" });
        }
    });
});

// API endpoint to handle booking appointment
app.post('/menu', (req, res) => {
  const { patientName, patientAge, patientCondition, doctorType, appointmentDateTime } = req.body;
  const sql = "INSERT INTO appointments (patient_name, patient_age, patient_condition, doctor_type, appointment_datetime) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [patientName, patientAge, patientCondition, doctorType, appointmentDateTime], (err, result) => {
    if (err) {
      console.error("Error occurred while booking appointment:", err);
      res.status(500).json({ error: 'Error occurred while booking appointment' });
    } else {
      console.log("Appointment booked successfully:", result);
      res.status(200).json({ message: 'Appointment booked successfully' });
    }
  });
});





app.post("/doctor", (req, res) => {
  const q2 = "SELECT * FROM doctor WHERE id = ? AND password=?";
  db.query(q2, [req.body.doc_id, req.body.password], (err, data) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal server error" });
      }
      if (data.length > 0) {
          return res.status(200).json({ message: "Login successful" });
      } else {
          return res.status(401).json({ error: "Invalid credentials" });
      }
  });
});


app.post('/signup', (req, res) => {
    const { name, email, password} = req.body;
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Registration failed' });
      } else {
        console.log('User registered successfully');
        res.status(200).json({ message: 'Registration successful' });
      }
    });
  });



  app.get('/doctorwho', (req, res) => {
    const query = 'SELECT * FROM doctor LIMIT 1'; // Assuming you have a 'doctors' table
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error fetching doctor details:', err);
        res.status(500).json({ error: 'Error fetching doctor details' });
        return;
      }
      res.json(result[0]); // Assuming you expect only one doctor
    });
  });
  
  // Endpoint to fetch attending patients
  app.get('/attending-patients', (req, res) => {
    const query = 'SELECT * FROM appointments';
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error fetching attending patients:', err);
        res.status(500).json({ error: 'Error fetching attending patients' });
        return;
      }
      res.json(result);
    });
  });



app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
