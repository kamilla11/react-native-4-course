import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./navigation/TabNavigation.tsx";
import Navigation from "./navigation/Navigation.ts";
import {DeepLinking} from "./navigation/DeepLinking.ts";
import {Linking} from "react-native";
import React, {useEffect} from "react";
import {ThemeProvider} from "./modules/theme/ThemeProvider.tsx";


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
    useEffect(() => {
        Linking.getInitialURL().then(async deepLinkInitialURL => {
            if (deepLinkInitialURL) {
                await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
            }
        });
    }, []);

    return (
       <ThemeProvider>
           <NavigationContainer  linking={DeepLinking.linking}  ref={Navigation.navigationRef}>
               <Stack.Navigator>
                   <Stack.Screen name={'Tab'} component={TabNavigation} options={{ headerShown: false }} />
               </Stack.Navigator>
           </NavigationContainer>
       </ThemeProvider>
    );
}

export default App;
