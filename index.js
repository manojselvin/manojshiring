const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// DB Connection
const pool = new Pool({
    host: 'ec2-44-213-151-75.compute-1.amazonaws.com',
    user: 'qhdnvvkcvnhztn',
    port: 5432,
    password: '22c27047a986000753bfd34b40f6d2809fef33676e0d71206488fe420fe479b3',
    database: 'd7tv1mr81s3rui',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: { sslmode: 'require', rejectUnauthorized: false }
});

// Fetch Candidates List
app.get('/candidates', async (req, res) => {

    const results = await pool.query('SELECT *, (CASE \
                          WHEN node_experience < 1 THEN 1 \
                          WHEN node_experience >= 1 AND node_experience <= 2 THEN 2 \
                          ELSE 3 END) AS node_score, \
                        (CASE \
                          WHEN react_experience < 1 THEN 1 \
                          WHEN react_experience >= 1 AND react_experience <= 2 THEN 2 \
                          ELSE 3 END) AS react_score, \
                        (CASE \
                          WHEN node_experience < 1 THEN 1 \
                          WHEN node_experience >= 1 AND node_experience <= 2 THEN 2 \
                          ELSE 3 END) + \
                        (CASE \
                          WHEN react_experience < 1 THEN 1 \
                          WHEN react_experience >= 1 AND react_experience <= 2 THEN 2 \
                          ELSE 3 END) AS total_score \
                FROM candidates')

    res.json(results.rows || []);
});

// Create Candidates
app.post('/candidates', async (req, res) => {
    const { name, email, phone, skills, status, expected_salary: expectedSalary, node_experience: nodeExperience, react_experience: reactExperience } = req.body;

    const candidate = await pool.query('INSERT INTO candidates (name, email, phone, skills, status, expected_salary, node_experience, react_experience) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [name, email, phone, JSON.stringify(skills), status, expectedSalary, nodeExperience, reactExperience]);

    res.status(201).json({ message: 'Candidate created successfully' });
});

// Update Candidate status
app.put('/candidates', async (req, res) => {
    const { id, status } = req.body;

    const candidateUpdated = await pool.query('UPDATE candidates SET status=$1 WHERE id=$2;', [status, id]);

    res.status(200).json({ message: 'Candidate updated successfully' });
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
