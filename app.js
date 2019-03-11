import express from 'express';

import port from './Server/config/config';

const app = express();
const PORT = port || 3000;

app.listen(PORT, () => { console.log(`App is listening on port ${PORT}`); });
