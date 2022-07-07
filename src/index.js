import 'dotenv/config';
import app from './app.js';
import { sequelize } from './database/database.js';

import './models/Project.js';
import './models/Task.js';

const port = 4000;

// Start
const start = (async () => {
  try {
    // Database
    await sequelize.sync();
    // await sequelize.sync({ force: true });

    // Server
    app.listen(port, () => {
      console.log(`Server Listening on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to Start Server:', error);
  }
})();
