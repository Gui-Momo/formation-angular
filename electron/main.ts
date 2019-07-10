import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

require('../../server.js');

let win: BrowserWindow

app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function createWindow() {
  console.log('reload in 4s');

  win = new BrowserWindow({ width: 1000, height: 800 })

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../../dist/formation-angular/index.html`),
      protocol: 'file:',
      slashes: true,
    })
  )

  win.webContents.openDevTools()

  setTimeout(function () {
    console.log('reloading');
    win.reload();
  }, 8000);

  win.on('closed', () => {
    win = null
  })
}