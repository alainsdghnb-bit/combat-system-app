@echo off
cd /d %~dp0
start http://127.0.0.1:4173
where node >nul 2>nul
if %errorlevel%==0 (
  node serve.mjs
) else (
  python -m http.server 4173 -d dist
)
