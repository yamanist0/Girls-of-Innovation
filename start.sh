#!/usr/bin/env sh
set -e
if [ ! -d node_modules ]; then
  echo "Run setup first: npm install"
  exit 1
fi
npm run dev