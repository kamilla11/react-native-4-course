import React from 'react';
import ToDoScreen from './screens/todoscreen/ToDoScreen.tsx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';

function App(): React.JSX.Element {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Host>
                <ToDoScreen/>
            </Host>
        </GestureHandlerRootView>
    );
}

export default App;
