import 'dotenv/config';
import app from './app.js';

const port = 3000;

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
