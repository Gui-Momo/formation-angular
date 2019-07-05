"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const url = require("url");
require('../../server.js');
let win;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    console.log('creating window, waiting for server');
    win = new electron_1.BrowserWindow({ width: 1000, height: 800 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, `/../../dist/formation-angular/index.html`),
        protocol: 'file:',
        slashes: true,
    }));
    setTimeout(function () {
        console.log('server ready');
        win.reload();
    }, 4000);
    win.on('closed', () => {
        win = null;
    });
}
//# sourceMappingURL=main.js.map