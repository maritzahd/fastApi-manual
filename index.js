const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3000;

const dbUrl = process.env.MYSQL_URL || process.env.MYSQLURL;
const pool = mysql.createPool(dbUrl || 'mysql://root:password@localhost:3306/railway');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'docs', 'index.html'));
});

app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    res.json({ status: 'Conectado a MySQL exitosamente', time: rows[0].now });
  } catch (err) {
    res.status(500).json({ error: 'Error al conectar a MySQL', details: err.message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    res.json({ message: 'Petición de login recibida con éxito' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    res.json({ message: 'Petición de registro recibida con éxito' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));