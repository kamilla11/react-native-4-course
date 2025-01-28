import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ColorValue, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CharactersScreen} from "../screens/charactersScreen/CharactersScreen.tsx";
import {Logo} from "../components/HeaderIcon.tsx";
import {SettingsScreen} from "../screens/settingsScreen/SettingsScreen.tsx";

const Tab = createBottomTabNavigator();

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
                name="Characters"
                component={CharactersScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => <Logo/>,
                    tabBarShowLabel: true,
                    tabBarIcon: (props: { color: number | ColorValue | undefined; }) => (
                        <Icon name="body" size={30} color={props.color}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: () => <Logo/>,
                    tabBarShowLabel: true,
                    tabBarIcon: (props: { color: number | ColorValue | undefined; }) => (
                        <Icon name="settings" size={30} color={props.color}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default TabNavigation;
const styles = StyleSheet.create({
    tabBarStyle: {backgroundColor: 'blue'},
    headerStyle: {backgroundColor: 'blue'},
});
