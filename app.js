import express from 'express';
import dotenv from 'dotenv';

import routes from './Server/routes/route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Welcome to EPIC Mail');
});

app.use('/api/v1/', routes);

app.listen(PORT, () => { console.log(`App is listening on port ${PORT}`); });

export default app;
