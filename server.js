import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(dirname, 'dist')));

// Handle SPA routing: return index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
