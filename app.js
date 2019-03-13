import express from 'express';
// import bodyParser from 'body-parser';

import port from './Server/config/config';
import routes from './Server/routes/route';


const app = express();
const PORT = port || 3000;

// app.use('/file', express.static('./')); - use later if necessary
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to EPIC Mail');
});

app.use('/api/v1/', routes);

app.listen(PORT, () => { console.log(`App is listening on port ${PORT}`); });

export default app;
