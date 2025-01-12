import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NewsScreen from './screens/NewsScreen';
import ChatScreen from './screens/ChatScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import AboutAppScreen from './screens/AboutAppScreen';
import HeaderIcon from './HeaderIcon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'lightgray',
        headerStyle: styles.headerStyle,
        headerTintColor: 'white',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: props => (
            <Icon name="home" size={30} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderIcon />,
          tabBarIcon: props => (
            <Icon name="newspaper" size={30} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderIcon />,
          tabBarIcon: props => (
            <Icon name="chatbox" size={30} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderIcon />,
          tabBarIcon: props => (
            <Icon name="settings" size={30} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderIcon />,
          headerRight: () => (
            <Button
              title="About app"
              onPress={() => {
                navigation.navigate('AboutApp');
              }}
            />
          ),
        })}
      />
      <Stack.Screen name="AboutApp" component={AboutAppScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {backgroundColor: 'blue'},
  headerStyle: {backgroundColor: 'blue'},
});
