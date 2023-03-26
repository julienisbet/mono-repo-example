const app = require('./lib/app');
const pool = require('./sql/pool');

const PORT = process.env.PORT || 7890;

app.listen(PORT, async () => {
  console.info(`🚀  Server started on port ${PORT}`);
});

process.on('exit', () => {
  console.info('👋  Goodbye!');
  pool.end();
});
