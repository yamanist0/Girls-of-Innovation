@echo off
setlocal
if not exist node_modules (
  echo Run setup first: npm install
  exit /b 1
)
call npm run dev