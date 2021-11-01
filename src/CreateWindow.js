// Cria a janela com as configuração e retorna

const { BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 200,
    height: 200,
    resizable: false,
    frame: false, 
    fullscreenable: false,
    show: false
  })

  //win.loadURL('https://duckduckgo.com/?t=brave')
  win.loadFile('index.html')

  win.on('blur', () => win.hide())

  return win
}

module.exports = createWindow()