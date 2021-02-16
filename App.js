// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigate, {navigationRef} from './RootNavigation';
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import Login from "./components/Login";
import {compose} from "recompose";
import State, {useStore, withStore} from "./store";
import Profile from "./containers/Profile";
import StateProvider from "./store";

function HomeNav() {
    return (
        <Text style={[styles.iconMenu, {color: iconFocused}]}>
            asaf
            <Icon name="search"/>
        </Text>
    );
}

function ProfileNav() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Profile/>
        </View>
    );
}

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <StateProvider>
            <RootNavigate/>
        </StateProvider>
    );
}

export default App;


