const express = require('express');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/alunoRoutes');
const loginRoutes = require("./routes/loginRoutes");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5174/",
    // credentials: true,
  })
);

app.use('/cadastro', alunoRoutes);
app.use('/login', loginRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
