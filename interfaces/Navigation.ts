interface AdaptiveNavigatorData {
  screens: Screens;
  thematicColor: string;
  thematicColorInDeg: string;
}

interface Screens {
  Home?: Element;
  Settings?: Element;
  AngeloLab?: Element;
  ScanQr?: Element;
}

export type { AdaptiveNavigatorData };
