import styled from 'styled-components/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';

const TabIcon = styled.Image`
  width: 25px;
  height: 25px;
  filter: grayscale(${props => (props.$focused ? 0 : 100)}%);
`;

const Navigator = createMaterialTopTabNavigator({
  screenOptions: ({ route }) => {
    return {
      tabBarShowLabel: false,
      tabBarIcon: ({ focused }) => {
        let tabIconSource;

        switch (route.name) {
          case 'Home':
            tabIconSource = require('../assets/images/home-icon.png');
            break;

          case 'Settings':
            tabIconSource = require('../assets/images/settings-icon.png');
            break;
        }

        return <TabIcon source={tabIconSource} $focused={focused} />;
      },
      tabBarShowIcon: true,
      tabBarIndicatorStyle: { backgroundColor: '#dacdb0' },
    };
  },
  screens: {
    Home,
    Settings,
  },
});

const Navigation = createStaticNavigation(Navigator);

export default Navigation;
