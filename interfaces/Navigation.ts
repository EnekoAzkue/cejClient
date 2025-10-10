import { ViewStyle } from 'react-native';

interface AdaptiveNavigatorData {
  screens: Screens;
  thematicColor: string;
  thematicColorInDeg: string;
  tabBarStyle: ViewStyle;
}

interface Screens {
  Home?: Element;
  Settings?: Element;
  AngeloLab?: Element;
  ScanQr?: Element;
}

export type { AdaptiveNavigatorData };
