import app from './app';
import { config } from './config';

app.listen(config.port || 5000, () => {
  console.log(`App is running on port ${config.port}`);
});
