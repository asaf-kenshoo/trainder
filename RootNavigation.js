// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import Login from "./components/Login";
import Profile from "./containers/Profile";
import {useStore} from "./store";
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const RootNavigate = () => {
    const {isSignedIn} = useStore();
    return (
        isSignedIn ? (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen
                        name="Main"
                        component={HomeScreen}
                        options={{headerTitle: ''}}
                    />
                    <Stack.Screen
                        name="Details"
                        component={HomeScreen}

                    />
                </Stack.Navigator>
            </NavigationContainer>
                    // <Tab.Navigator
                    //         screenOptions={({route}) => ({
                    //             tabBarIcon: ({focused, color, size}) => {
                    //                 let iconName;
                    //                 if (route.name === 'Home') {
                    //                     iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                    //                 } else if (route.name === 'Settings') {
                    //                     iconName = focused ? 'ios-list-box' : 'ios-list';
                    //                 }
                    //
                    //                 // You can return any component that you like here!
                    //                 return <Ionicons name={iconName} size={size} color={color}/>;
                    //             },
                    //         })}
                    //         tabBarOptions={{
                    //             activeTintColor: 'tomato',
                    //             inactiveTintColor: 'gray',
                    //         }}
                    //     >
                    //         <Tab.Screen name="Home" component={HomeScreen}/>
                    //     </Tab.Navigator>
                    // </NavigationContainer>
                    ) :
                    <Login/>
                        );
                        };
                        export default RootNavigate;


