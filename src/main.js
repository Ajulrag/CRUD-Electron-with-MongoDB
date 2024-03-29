const { BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('src/index.html')
}


module.exports = { createWindow }