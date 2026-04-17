import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  console.log('Starting server in ' + (process.env.NODE_ENV || 'development') + ' mode');

  // Serve static files from 'dist' if it exists (Prod) or use Vite (Dev)
  const distPath = path.join(__dirname, 'dist');
  
  if (process.env.NODE_ENV === 'production' || !import.meta.env) {
    console.log('Serving static files from:', distPath);
    app.use(express.static(distPath));

    app.get('*', (req, res) => {
      const indexPath = path.join(distPath, 'index.html');
      console.log('Serving index.html for request:', req.url);
      res.sendFile(indexPath, (err) => {
        if (err) {
          console.error('Error sending index.html:', err);
          res.status(404).send('Not Found: The website has not been built yet. Please run "npm run build" on your server.');
        }
      });
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
