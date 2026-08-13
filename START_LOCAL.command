#!/bin/bash
cd "$(dirname "$0")"
URL="http://127.0.0.1:4173"
if command -v node >/dev/null 2>&1; then
  (sleep 1; open "$URL") &
  node serve.mjs
elif command -v python3 >/dev/null 2>&1; then
  (sleep 1; open "$URL") &
  python3 -m http.server 4173 -d dist
else
  echo "Combat System needs Node.js or Python 3 to run the local web server."
  read -p "Press Enter to close."
fi
