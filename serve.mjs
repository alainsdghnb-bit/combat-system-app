import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = new URL('./dist/', import.meta.url).pathname;
const port = Number(process.env.PORT || 4173);
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
const server = http.createServer(async (req,res)=>{
  try {
    const raw=(req.url||'/').split('?')[0];
    const safe=normalize(decodeURIComponent(raw)).replace(/^([.][.][/\\])+/, '');
    let path=join(root, safe==='/'?'index.html':safe.replace(/^[/\\]/,''));
    try { if ((await stat(path)).isDirectory()) path=join(path,'index.html'); } catch { path=join(root,'index.html'); }
    const body=await readFile(path);
    res.writeHead(200,{'Content-Type':mime[extname(path)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(body);
  } catch (error) { res.writeHead(500,{'Content-Type':'text/plain'});res.end(String(error)); }
});
server.listen(port,'127.0.0.1',()=>console.log(`Combat System running at http://127.0.0.1:${port}\nPress Ctrl+C to stop.`));
