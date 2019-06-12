import app from './app';
import { PORT } from './constants';

/**
 * Seperate the server initialization to allow tests to be written for app.ts
 */

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
