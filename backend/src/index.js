const express = require('express');
const app = express();

app.use(express.json());

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}));

const employeesRoutes = require('./routes/employees');
app.use('/api/employees', employeesRoutes);

app.get('/', (req, res) => {
  res.send('API do backend está funcionando!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
