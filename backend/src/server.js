require('dotenv').config();
const express = require('express');
const cors = require('cors');
const verificacionRoutes = require('./presentation/routes/verificacionRoutes');
const errorHandler = require('./presentation/middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/verificaciones', verificacionRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});