import express from 'express';

import port from './Server/config/config';
import routes from './Server/routes/users.route';


const app = express();
const PORT = port || 3000;

// app.use('/file', express.static('./')); - use later if necessary
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to ');
});

app.use('/api/v1/users', routes);

app.listen(PORT, () => { console.log(`App is listening on port ${PORT}`); });

export default app;
