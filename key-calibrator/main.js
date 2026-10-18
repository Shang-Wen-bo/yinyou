const { app, BrowserWindow } = require('electron')
const { GlobalKeyboardListener } = require('node-global-key-listener');
// 定义变量 gkl
const gkl = new GlobalKeyboardListener();

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('index.html')
    // 第27行这里使用gkl
    gkl.addListener(function (e, down) {
        console.log(`按键：${e.name}，状态：${e.state}`)
    })
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
