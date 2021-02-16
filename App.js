// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import StateProvider from "./store";
import RootNavigate from "./RootNavigation";


const App = () => {
    return (
        <StateProvider>
            <RootNavigate/>
        </StateProvider>
    );
}

export default App;


