const { app } = require('electron')
const controlWindow = require('./ControlWindow')

function App() {
  const win = require('./CreateWindow')
  const tray = require('./Tray')
  const { toggle } = controlWindow(win, tray)

  tray.on('click', toggle)
}

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.whenReady().then(() => {
  App()
})
