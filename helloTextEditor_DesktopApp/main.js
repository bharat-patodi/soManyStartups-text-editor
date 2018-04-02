// I want a main process to create a single window.
const electron = require('electron');
const path = require('path');
const app = electron();

function createWindow() {

  const mainWindow = new browserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets/png/64x64.png'),
  });

  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
};

app.on('ready', createWindow);
