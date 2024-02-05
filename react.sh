#!/bin/bash
# Init React Project
npm create vite@latest . -- --template react
cd app
npm install react-router-dom sass 
cd src
# Create sub folders
mkdir components
mkdir pages
mkdir hooks
# Finalize and cleanup
cd..
sed -i "4d" main.jsx
sed -i "4d" App.jsx
rm -rf App.css
rm -rf index.css
echo "New React project initialized - Happy hacking!" 