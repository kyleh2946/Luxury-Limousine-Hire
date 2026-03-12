#!/bin/bash
set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
FRONTEND_DIR="$SCRIPT_DIR/frontend"

cd "$FRONTEND_DIR"

if [ ! -d "node_modules" ]; then
  npm install --legacy-peer-deps 2>&1
fi

exec node_modules/.bin/next dev -p 5000
