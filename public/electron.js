const electron = require("electron");

const { app } = electron;
const { BrowserWindow } = electron;

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.resolve(__dirname, "..", "build", "index.html")}`
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  // Hide menu bar since we are not going to use it
  mainWindow.setMenuBarVisibility(false);
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
