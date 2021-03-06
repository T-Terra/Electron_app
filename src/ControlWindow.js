function ControlWindow(win, tray) {
  function toggle() {
    if(win.isVisible()){
      win.hide()
    } else {
      show()
    }
  }

  function show() {
    // Pegar o posicionamento da win / tray
    const {x, y} = getPosition()
    // atualizar o posicionamento da win
    win.setPosition(x, y, true)
    // mostrar a win
    win.show()
    win.focus()
  }

  function getPosition() {
    const winBounds = win.getBounds()
    const trayBounds = tray.getBounds()

    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
    const y = Math.round(trayBounds.y + trayBounds.height - 300)

    return {x, y}
  }

  return {
    toggle
  }

}

module.exports = ControlWindow