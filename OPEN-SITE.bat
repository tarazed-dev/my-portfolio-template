@echo off
chcp 65001 >nul
start "" "http://localhost:3000"
echo Opening http://localhost:3000 in your browser...
echo.
echo If the page does not load, first double-click START.bat
timeout /t 5 >nul
