enum ScreenBackgroundImgSrc {
  ACOLYTE_HOME = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  ACOLYTE_ANGELO_LAB = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  ACOLYTE_SETTINGS = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  ISTVAN_HOME = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  SCAN_QR = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  ISTVAN_SETTINGS = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  MORTIMER_HOME = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  MORTIMER_ANGELO_LAB = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  MORTIMER_SETTINGS = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  VILLAIN_HOME = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
  VILLAIN_SETTINGS = require('../public/images/main-background.png') /* TODO: Reference definitive background image */,
}

enum ButtonBackgroundImgSrc {
  CLOSE_CAMERA = require('../public/images/close-camera.png'),
  ACOLYTE_THEMED = require('../public/images/acolyte-themed-button.png'),
}

enum UserRole {
  ACOLYTE = 'acolyte',
  ISTVAN = 'istvan',
  MORTIMER = 'mortimer',
  VILLAIN = 'villain',
}

enum Tab {
  HOME = 'Home',
  ANGELO_LAB = 'AngeloLab',
  SCAN_QR = 'ScanQr',
  SETTINGS = 'Settings',
}

enum SocketGeneralEvents {
  CONNECT = 'connect',
}

enum SocketClientToServerEvents {
  CONNECTION_OPEN = 'connection open',
}

export {
  ScreenBackgroundImgSrc,
  ButtonBackgroundImgSrc,
  UserRole,
  Tab,
  SocketGeneralEvents,
  SocketClientToServerEvents,
};
