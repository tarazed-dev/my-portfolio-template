@echo off
chcp 65001 >nul
title Tarazed Portfolio

cd /d "%~dp0"

echo ========================================
echo   Tarazed Portfolio - Launch Script
echo ========================================
echo.

where node >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed.
    echo.
    echo Install Node.js from: https://nodejs.org
    echo Or run in PowerShell: winget install OpenJS.NodeJS.LTS
    echo.
    pause
    exit /b 1
)

if not exist "node_modules\" (
    echo Installing dependencies... This may take a few minutes.
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b 1
    )
    echo.
)

echo Starting development server...
echo.
echo Open in browser: http://localhost:3000
echo Press Ctrl+C to stop the server.
echo.

call npm run dev

pause
