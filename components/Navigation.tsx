import styled from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import { createStaticNavigation } from '@react-navigation/native';
import AcolyteHome from './roles/acolyte/AcolyteHome';
import AcolyteSettings from './roles/acolyte/AcolyteSettings';

const TabIcon = styled.Image`
  width: 25px;
  height: 25px;
  filter: brightness(${props => (props.$focused ? 150 : 100)}%)
    grayscale(${props => (props.$focused ? 0 : 100)}%);
`;

const Navigator = createBottomTabNavigator({
  screenOptions: ({ route }) => {
    return {
      tabBarShowLabel: false,
      tabBarIcon: ({ focused }) => {
        let tabIconSource;

        switch (route.name) {
          case 'AcolyteHome':
            tabIconSource = require('../assets/images/home-icon.png');
            break;

          case 'AcolyteSettings':
            tabIconSource = require('../assets/images/settings-icon.png');
            break;
        }

        return <TabIcon source={tabIconSource} $focused={focused} />;
      },
      tabBarBackground: () => {
        return (
          <BlurView
            blurAmount={1}
            overlayColor="rgba(218 205 176 / 0.1)"
            style={{ height: '100%' }}
          />
        );
      },
      tabBarStyle: {
        position: 'absolute',
        overflow: 'hidden',
        borderTopWidth: 0,
        boxShadow: '0 -11.5px 5px rgba(218 205 176 / 0.1)',
      },
      headerShown: false,
    };
  },
  screens: {
    AcolyteHome,
    AcolyteSettings,
  },
});

const Navigation = createStaticNavigation(Navigator);

export default Navigation;
