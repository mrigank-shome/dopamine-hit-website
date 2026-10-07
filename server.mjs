import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const files = { '/': ['index.html', 'text/html'], '/style.css': ['style.css', 'text/css'], '/app.js': ['app.js', 'text/javascript'] };
files['/index.html'] = files['/'];
files['/photo-credits.html'] = ['photo-credits.html', 'text/html'];
for (const id of ['m4', 'amg', 'rs6', 'xc90', 'm8', 'etron']) {
  files[`/assets/cars/${id}.jpg`] = [`assets/cars/${id}.jpg`, 'image/jpeg'];
}
http.createServer(async (req, res) => {
  const file = files[new URL(req.url, 'http://localhost').pathname];
  if (!file) { res.writeHead(404); return res.end('Not found'); }
  try { const content = await readFile(fileURLToPath(new URL(file[0], import.meta.url))); res.writeHead(200, { 'Content-Type': file[1] }); res.end(content); }
  catch { res.writeHead(500); res.end('Unable to load page'); }
}).listen(Number(process.env.PORT || 3000), '0.0.0.0', () => console.log('Dopamine Drive running on port ' + (process.env.PORT || 3000)));
