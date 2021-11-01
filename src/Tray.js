// Tray é onde o programa vai aparecer (Barra de Tarefas)

const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'pernas-roboticas.png')

function createTray() {
  const tray = new Tray(iconPath)
  tray.setToolTip('Bot Ponto')

  return tray
}

module.exports = createTray()