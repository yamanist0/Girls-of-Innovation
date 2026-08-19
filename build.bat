@echo off
setlocal
if not exist node_modules (
  echo Run setup first: npm install
  exit /b 1
)
call npm run build
if errorlevel 1 goto :err
echo.
echo Build complete. Output: out/
goto :eof
:err
echo Build failed. Check the npm output above.
exit /b 1