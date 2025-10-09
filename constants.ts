enum ScreenBackgroundImgSrc {
  ACOLYTE_HOME = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  ACOLYTE_ANGELO_LAB = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  ACOLYTE_SETTINGS = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  ISTVAN_HOME = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  SCAN_QR = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  ISTVAN_SETTINGS = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  MORTIMER_HOME = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  MORTIMER_ANGELO_LAB = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  MORTIMER_SETTINGS = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  VILLAIN_HOME = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
  VILLAIN_SETTINGS = require('./assets/images/main-background.png') /* TODO: Reference definitive background image */,
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
  UserRole,
  Tab,
  SocketGeneralEvents,
  SocketClientToServerEvents,
};
