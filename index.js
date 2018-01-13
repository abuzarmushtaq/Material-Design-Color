const electron = require('electron');
const url = require('url');
const path = require('path');


const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1080,
        height: 700,
        frame: false
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('close', () => {
        // clear them memory
        mainWindow = null;
    });

});

// disable the manu bar in application
electron.app.on('browser-window-created', function (e, window) {
    window.setMenu(null);
});



