import app, { PORT } from './infrastructure/http/server.js';

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
