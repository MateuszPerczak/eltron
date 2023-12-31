import "v8-compile-cache";

import { join } from "node:path";

import { app, ipcMain, Menu } from "electron";
import { IS_WINDOWS_11, MicaBrowserWindow } from "mica-electron";

import { type AppContent, Environment } from "./index.types";

process.env.DIST_ELECTRON = join(__dirname, "..");
process.env.DIST = join(process.env.DIST_ELECTRON, "..", "dist");
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, "..", "public")
  : process.env.DIST;

const url: string = process.env.VITE_DEV_SERVER_URL;
const indexHtml: string = join(process.env.DIST, "index.html");
const env: Environment = (process.env.NODE_ENV as Environment) ?? Environment.Production;

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

// Make sure only one instance of the app is running
if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

const initApp = async (): Promise<void> => {
  await app.whenReady();

  const window: MicaBrowserWindow = initMainWindow();

  if (IS_WINDOWS_11) {
    window.setMicaTabbedEffect();
  }

  // load app content
  appContent[env](window);

  configApp();
  initApi();

  window.on("ready-to-show", () => onReadyToShow(window));
};

const initMainWindow = (): MicaBrowserWindow => {
  const preload = join(__dirname, "..", "preload", "index.js");
  return new MicaBrowserWindow({
    title: "",
    icon: join(process.env.PUBLIC, "favicon.ico"),
    webPreferences: {
      preload,
    },
    show: false,
    width: 1030,
    height: 630,
    frame: false,
  });
};

const initApi = (): void => {
  ipcMain.on("show-dev-tools", ({ sender }) => {
    const window = MicaBrowserWindow.fromWebContents(sender);
    window && window.webContents.openDevTools();
  });
};

const configApp = (): void => {
  Menu.setApplicationMenu(null);
};

const onReadyToShow = (window: MicaBrowserWindow): void => {
  // show window on screen workaround
  window.setAlwaysOnTop(true, "normal", 1);
  window.show();
  window.setAlwaysOnTop(false);
};

const appContent: AppContent = {
  development: (window: MicaBrowserWindow) => {
    window.loadURL(url);
    // window.webContents.openDevTools();
  },
  production: (window: MicaBrowserWindow) => {
    window.loadFile(indexHtml);
  },
};

initApp();
